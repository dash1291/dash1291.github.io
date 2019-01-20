---
title: JS, Browsers in Cloud and Parallel Indexing
date: 2014-12-28
---

*This post is about a weekend hack I put together involving a tiny JavaScript library that I wrote a while ago (I call it "infantry") and using it on BrowserStack for experimentation and fun.*

## Story of Infantry

The idea of Infantry came into existence a while ago, when I was reading about techniques used for parallel processing of large datasets. At the same time, I was intrigued by the idea of having a website and distributing your processing power across your visitors' machines. The idea seemed pretty cool to me, so I started my research and found [this cool blog post](https://www.igvita.com/2009/03/03/collaborative-map-reduce-in-the-browser/) which meant people had already tried this and it might work. I also learnt about project [BOINC](http://boinc.berkeley.edu/) which seemed very impressive to me considering how well they used the concept of collaborative computing and achieve some great results out of it. As a matter of fact, I regularly use BOINC to volunteer some of my idle CPU power hoping that it might be helpful in finding extraterrestrial intelligence someday. Hope is a good thing.

Coming back to Infantry, I really wanted to build a small map-reduce libary in JS that can be used to parallelize simple logic across machines and run inside a web browser. After much procrastination, I decided to start working on it while I was on a 12 hours long flight. I tried to polish the framework further based on Google's map-reduce paper and ended up with something actually working.

The code has always been on GitHub and can be found [here](https://github.com/dash1291/infantry). I have tried to write documentation, but don't expect too much from it, instead just take a look at the example in the repo.

## About the Hack

For running map-reduce jobs with infantry, one needs to start the infantry server, which acts as master, and to start a worker one has to just navigate to the server's URL inside a browser. Since, BrowserStack allows you start browsers in cloud and test your web pages inside them, it occurred to me to try it as a test bed for Infantry. I wrote a piece of very buggy and fragile code to build an inverted index for a set of HTML pages. After a few minor fixes, I setup the code on my brand new DigitalOcean server, and when I tried to run it, this is the next thing I see:

![Screenshot](./infantry_scr.png)

Everything worked as expected. Two workers were started on BrowserStack, and infantry was executing the jobs inside both of them, working to count words in a couple of articles from the [AOSA book](http://aosabook.org/en/index.html) and build an inverted index.

The code involved can be found [here](https://github.com/dash1291/browserstack-infantry). If I get a chance, maybe I will try to iron out the example a bit, and post some execution stats in the updates. Suggestions are welcome.
