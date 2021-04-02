---
title: December of Things
date: 2012-01-05
---

I'm just done with a month long winter break after the semester finished at
school. The month of December was about some travel, lot of sleep, occasional
movie sprints, and lastly but most importantly it was about taking my
experiences with Python some steps forward.The list of experiments included a
handful with Twisted including an incomplete(+ abandoned) networking project,
gitpython, a small screen grabber(+ uploader) script and a couple of patches
contributed to one of the Mozilla.org websites that is
[addons.mozilla.org](http://addons.mozilla.org) a.k.a. AMO. These experiments
though not involving coding a huge project all the way, did well in teaching
me some really important things both at fundamental levels and sometimes
arbitrary magic tricks.

## Recap. Me Earlier with Python.

I started learning Python about 4 months back in September, last year. And it
was this time, that I realized that Python while being easy and quick to learn
can be very useful. I did my first Python work towards a special task which
was creating a script that runs as a daemon on my shared web host, crawls for
artists on Last.fm, pull their biographical information and look for the
location terms using Yahoo Placemaker API and eventually determine the
geographical location to which the artist belonged. I needed such a bot script
to populate a database of artists with their geographical locations for my
website project which was about music discovery over geographical data. My
shared host supported Python, I heard Python would be good for making such
scripts, and I wanted to learn Python so it was an obvious to choose Python
for the script. Being a PHP programmer, I used analogies to PHP methods of
parsing the web documents, and random smaller stuff to make a quick leap to
learning Python while directly coding my script. It was a smooth run, much
much smoother than I had expected and apart from some nasty bugs which broke
the script sometimes, it worked really good. Good enough to give me enough
artists to get the website live within 3 days after starting the script on my
shared web host. 

**Enclosed Lessons**

  1. Python has everything that PHP has. urllib, xml_minidom made me feel home.
  2. Life's easier without braces.

**Some Links**

* Checkout the website. [Geonres.com](http://geonres.com) 
* Checkout the source of the script on [GitHub](https://github.com/dash1291/geonres_bot). 
* Checkout the website source on [GitHub](https://github.com/dash1291/geonres.com). 

## Exposure to the Community. PyCon India 2011

I registered for PyCon India before actually starting to work with Python
which was because of my desire to learn the awesome language. I was really
excited as it was the first time that I was going to attend such a large
community meetup. Being interested in web development, I attended every
talk/session that gave me a hint of something that I could use to build web
applications using Python notably including some like the low level web-
scrapping tutorial, a talk on Redis, and another one on pyjamas. They came
with great learning and I got to know people who've been doing great things
with the awesome language that I was so wanted to learn. All that was a great
motivation package to keep up and working. 

**Enclosed Lessons**

  1. One can do pretty much anything, perhaps more things than any other language using Python, in ways that are easier and quicker.
  2. Python has an awesome community full of cool people who do cool stuff every day, every night and in every part of the globe.

## Trying out things with Web Development with Python. Learning Django.

When I started learning Python, I knew I wanted to use it as one my tools for
developing web applications along with PHP. I heard the names of some web
frameworks built in Python like Django, Google's webapp, pylons, and web2py.
When I visited PyCon India, I heard more about them and much more about Django
and how much better it is than any of the Python web frameworks out there, or
perhaps better than many web frameworks built in different languages too. I
wanted to give it a wild try to learning it. I usually have a tendency to
learn while doing, but I didn't have an idea of an application to start with
so I though I would remake a web application that I earlier developed using
PHP(I called it shitstream), but this time in Django. Since, it was my first
attempt to any MVC framework, shitstream appeared to be a good choice to get
some basic concepts built up, as the app was simple and compact. 

**Enclosed Lessons**

  1. Django is the best thing one can use to build web applications.
  2. Unless I'm out of choices or luck, I would never go back to PHP again.

Checkout the source of Shitstream app on
[GitHub](https://github.com/dash1291/shitstream).

## Helping make Web Better. Fixing @ [addons.mozilla.org](http://addons.mozilla.org)

I wanted to contribute to Mozilla in any way possible since the day I got to
know about Open Source Software, about Mozilla, and how Mozilla keeps doing
awesome things which make the web much more awesome than it was, or perhaps
much more awesome than how it is now. But, with a huge rack of Mozilla
projects to choose from, my unawareness about them, and my lack of focus in a
single field kept me confused whenever I wanted to give a try to contributing
to one of the projects at Mozilla. But when I learnt Django, and accidentally
browsing through the Web Dev projects at Mozilla's Contribution page, I found
my thing. Having developed two Firefox addons earlier, I was aware of AMO, or
I should say that I hung-out quite alot on that website. And, AMO being the
first in the web dev projects list, I could not wait to browse through the
bugs list and kick out a few of those annoying bugs. It did not take me long
to fork the Mozilla's github repository of Zamboni, clone it to my local box,
and start trying to set it up. But setting up the whole thing, that is my
local AMO instance took me 3 days. Yes, 3 days! It was actually a pain setting
up the huge stack on my Ubuntu system. Thanks to folks on IRC, who are patient
great helpers and played angels in helping me setting it up especially Jeff
Balogh. Not only setup, but he also guided me to how to start fixing my first
bug and led me all the way to my first pull request, which was much required
for me as it was not only my first attempt to fix a bug on this project, but
also my first attempt to fix anything on any open source project. My first
pull request although took a while to be closed with a merge of my proposed
patch because it was awaiting review from the reporter and in the meantime I
was also busy with college. But as the winter break started, I got it merged,
and also worked to fix a couple more bugs and got my patches merged. All the
while I was working on these bugs, Mozilla developers hanging out on IRC were
really helpful while being prompt at suggestive code reviews especially Chris
Van, who is also the commiter of all my patches to the original AMO git
repository. 

**Enclosed Lessons**

  1. Most importantly, I learnt how to write code that is readable and stylish. Thanks to Mozilla's adoption of PEP8.
  2. Ample of git stuff, I knew a very limited subset of git before starting to work on this project. I'm still terrible, but much better than what I was earlier.
  3. git rebase can be dangerous while working with a lot of people.
  4. find . -name "*.pyc" -delete is simple but can be magical sometimes.

Have a look at my commits merged with AMO
[here](https://github.com/mozilla/zamboni/commits/master?author=dash1291). So
that was pretty much my Python story so far, and another of my favorite
December. What I've figured out so far is that Python and Mozilla communities
are two of the best Open Source Communities working to promote openness
everywhere and Mozilla doing their every bit to build an open web platform
which is not just about Mozilla Firefox but freedom and choice to the users of
web around the globe.

