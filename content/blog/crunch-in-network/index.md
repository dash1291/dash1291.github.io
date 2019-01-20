---
title: Putting Some Crunch in the Network
date: 2012-11-09
---

Most of us, who write web pages, sometimes want to serve their content from the local server. Now if I'm one of the students of a college, where there are no ports forwarded on which I'm allowed to serve my content, being on the college's network. Thats bad because I often want to be able to serve some static pages or files from my local system to the internet. I wish there was no firewall but there are somethings you cannot change and have to live with. But certainly, one can adapt. I've made a small attempt towards such an adaptation.

## What about adaptation?


I started writing some experimental tools which would allow me to serve content from any such network where I cannot serve directly to the internet. All I require is just one port that allows me to make outbound remote connections from my network and a remote server, which should be under my control. I need to run a python program on my local system and another on my remote server and I get a bypassing highway for my content(which is on my local system) to reach where it is needed. Its really that simple, but works, hence very useful.

## Enter Crunch

So the tools consist of a server and client, which runs a serving node on your local machine. Lets call these serving nodes as crunch nodes. The server receives HTTP requests from the internet, and according to URI of the request, pulls content from a crunch node. Now an important thing to note here is that the crunch nodes create persistent connections with the server. They initialize these connections with the server, so the need to accept connections on crunch nodes is eliminated.

The server and the crunch nodes communicate over a very basic TCP protocol(something like IRC). Since, it has just begun yet, there are limits to serving. It can only serve static files. Some HTML, CSS, JS, or any other file. Moreover, its also not fit for serving large files yet. I've seen it break while serving JPEGs of sizes like 200KBs. Its an issue, but not a big one, so it will be fixed soon. Apart from that, I've planned so many enhancements to it. Perhaps, too many to list here. To put it simply and in short, I would love to make it fit for serving any pretty thing someone would want to serve from a local system, even dynamic web content. But, thats long way ahead.

## Usage

It does not make sense for such a thing to exist if you can't use it right? So lets squeeze out a simple feature of serving a small text file with crunch.

Install crunch:

<pre class="bash">
$ pip install -e git+https://github.com/dash1291/crunch.git#egg=crunch
</pre>

Write your server:

<pre class="python">
from crunch.server import runserver

runserver(8000, 8001)
</pre>

When you run the above code, your server will start accepting HTTP requests on port 8000 and will accept connections from crunch nodes on port 8001. You have the liberty to choose those ports. As a general rule, the first port(HTTP) can be anything because on your remote server, you can accept connections on most of the ports. But the second port can only be a port which is open on your network, such that it allows outbound remote connections. For example, in my own setup, I use port 80 as the HTTP port, and 21 as the crunch port, because 21 is one of the few ports that I can use to make outbound remote connections. This could work for you or you might need to alter it a bit to make it work for you.

We will need to create database schema for the users and atleast one user account to be able to connect to the server. So we'll do that from the Python shell.

<pre class="pycon">
&gt;&gt;&gt; from crunch.crunchauth import add_account, create_schema
&gt;&gt;&gt; create_schema()
&gt;&gt;&gt; add_account('someone', 'someonespassword')
</pre>

Write your crunch client:

<pre class="python">
from crunch.crunchclient import start_client

config = {
	'username': 'someone',
	'password': 'someonespassword'
	'address': 'something.com',
	'port': 8001
}

start_client(config)
</pre>

When you run this code, you will be connected to the crunch server. Remember to put in the right values to the config fields. When its running, whenever, the server receives an HTTP request at */someone/hello.txt*, the crunch client will look for the file *hello.txt* in the current directory and if found, it will send it to the server which is written back as a response to the HTTP request.

Lets put it to test, assuming there is a *hello.txt* in the current directory which contains *Hello World*.

<pre class="bash">
$ curl http://something.com:8000/someone/hello.txt
Hello World
</pre>

So thats it. One last point to note here is, the project is open for hacking. If you are over just suggestions, you are welcome to pitch in some code and make it better yourself. The code can be found on [GitHub](https://github.com/dash1291/crunch). Use it or fork it, if you want to make it better, and put some crunch in your network.
