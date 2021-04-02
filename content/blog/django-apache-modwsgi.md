---
title: Setting up Apache Server for Django with mod_wsgi
date: 2011-10-29
---

Django is a very cool web development framework which comes with its own
lightweight development server which is best for testing the application. But
when it comes to deploying the application for the outer world, more efficient
and secure web server like Apache is preferred. Now, web developers who have
been developing applications using PHP might find it very easy to deploy their
applications on Apache(as they have easy configurable PHP module, or they
could just find a LAMP stack for if they were on Linux, so they would get
everything cooked. But when it comes to combining python web frameworks like
Django with Apache, things turn out to be less obvious. My experience weren't
smooth at all while trying to get my Django project work on Apache. And since
I was trying to configure it with already installed LAMP stack on my Ubuntu
system, things went really bad. Since, there are so many things integrated in
a compilation like LAMP stack, there are as many things which can go wrong
while configuring Django on an Apache server. So, its recommended that a clean
and separate Apache installation should be used so that things are easier to
diagnose one by one.

## Step 1 - Install Apache HTTP Server

You should install a clean build of Apache in case you haven't already. Its
easy, just follow the docs given here [http://httpd.apache.org/docs/2.2/instal
l.html](http://httpd.apache.org/docs/2.2/install.html)

## Step 2 - Install mod_wsgi

Now that you're done with Apache, you need to install mod_wsgi which is a WSGI
module for Apache. Know more about it here.
[http://code.google.com/p/modwsgi/](http://code.google.com/p/modwsgi/)

Installation instructions [http://code.google.com/p/modwsgi/wiki/InstallationO
nLinux](http://code.google.com/p/modwsgi/wiki/InstallationOnLinux) 

## Step 3 - Load and Configure mod_wsgi in Apache config 

This is where you edit the Apache
configuration file and tell Apache to load mod_wsgi module using the DSO
method. You need to edit /conf/httpd.conf file and add the following directive
to it

<pre class="apache">
LoadModule wsgi_module /usr/lib/apache2/modules/mod_wsgi.so
</pre>

Also, at the end of the httpd.conf file, add the following directives

<pre class="apache">
WSGIScriptAlias / &lt;path-to-your-django-project&gt;/test.wsgi
&lt;Directory path-to-your-django-project&gt;
Order deny,allow
Allow from all
&lt;/Directory&gt;
</pre>

The first line in the above directives loads mod_wsgi module into the Apache
instance. The second directive <Directory> directive is there to make sure
Apache can access the directory given in the path. Also, make sure you replace
<path-to-your-django-project> with its appropriate value.

## Step 4 - Test WSGI

Now that we've configured Apache to load the mod_wsgi module, its time to test
if it works. To do that, create a file <path-to-your-django-project>/test.wsgi
with the following content.
<pre class="python">
def application(environ, start_response):
	status = '200 OK'
	output = 'Hello World!'
	response_headers = [('Content-type', 'text/plain'),
	('Content-Length', str(len(output)))]
	start_response(status, response_headers)
	return [output]
</pre>

Now test if it works by trying http://localhost in your browser, you should
get Hello World for obvious reasons.(and yes make sure Apache is running)

## Step 5 - Test the bad WSGI

Now, that the simple WSGI application runs, we need to test something which
generally has issues which need to be resolved before moving on to using
Django as a WSGI application.

### **The Expat woe**

When we move to more complicated WSGI applications, and as the applications
start using libraries whose versions conflict with the versions used by
Apache, there are issues like Apache crashing and incorrect response. One such
library is libexpat. Know more about it here [http://expat.sourceforge.net/](http://expat.sourceforge.net/).

It happens in many situations that the expat module used by python(that is the
default one on a system) has a different version than that used by Apache(it
has its own). In such a situation, there is Segmentation Fault encountered by
Apache and it crashes. To test it if you encounter that issue, just make the
following entry in your test.wsgi file.

<pre class="python">
import pyexpat
</pre>

Now, again try http://localhost. If you get proper response as earlier then
you are free from the expat issue while if you get 'no response' error then
you need to resolve the expat issue before turning on to Django.

### **Resolving Expat Issue**

There is this great post on handling expat issue. [http://code.google.com/p/mod
wsgi/wiki/IssuesWithExpatLibrary](http://code.google.com/p/modwsgi/wiki/Issues
WithExpatLibrary).

Since, python's expat module is hard to replace, its
recommended you change Apache's expat module. Either update it or simply
replace it with your system's expat. I consider replacing it. After all done,
restart Apache and test http://localhost, if all went good it should be
working fine.

## Step 6 - Configure WSGI for Django

If you've successfully dealt with running WSGI with expat loaded, you should
then be able to run Django after a little bit of work if not-so-common issues
don't fall in your way. For connecting to Django with mod_wsgi, you should
create a new django.wsgi in the same directory as test.wsgi and set
WSGIScriptAlias to that very file. Enter the following code to django.wsgi and
you're on the go.

<pre class="python">
import os
import sys
root = os.path.join(os.path.dirname(__file__),'..')

sys.path.insert(0,root)
os.environ['DJANGO_SETTINGS_MODULE']='&lt;your-project&gt;.settings'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()
</pre>

Replace ```<your-project>``` with your project's name. 

## Step 7 - Test Django

So you've worked out all the way to the point where you would need to test if all
your setup works fine. Its recommended that you use a clean Django application
so that you don't encounter issues related to database and other stuff.

