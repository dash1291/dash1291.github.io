---
title: Of Web Frontends and Serverless Mock Services
date: 2017-03-20
---

*This post is about a hack on ServiceWorkers I did a while ago. Although, not a novel idea anymore, I'm still going to write about it to continue the legacy of this space, and to celebrate the first commit to the project after Nov 2015.*

## What is this?

We're going to talk about [Roamer](https://github.com/dash1291/roamer). Its a small library that utilizes the capability of [ServiceWorkers](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) to act like an intercepting proxy server, and turns it into a web server that serves inside your browser. When you achieve that, there are ton of things you can do. Mocking a web service is one of them, and thats the idea on which Roamer was born.

## How it works?

Roamer is a tiny JS script that can be dropped in your web app which needs to use mocked web services. Using a simple API, you can bind URL endpoints with the mock data that you want in the response for those endpoints.

Take a look at the following snippet -

<pre class="javascript">
Roamer.init(function(err) {
  if (err) {
    console.log('Could not initialize roamer.');
    return;
  }

  Roamer.bind({
    '/url1/': 'this is hope page',
    '/url2/': {
      foo: 'bar',
      syn: "ack"
    }
  });
});
</pre>

With something as simple as that, you can feed all the AJAX calls in your application with the mock data that they need for testing or prototyping purposes. You don't need to write a separate server side application and have it running to achieve this.

## Caveats?

Yes! This has only been a toy project so far. Mocking capabilities are very limited. All you can do is bind responses (strings or objects) to URL endpoints. After the latest commit, you can bind different responses with same URL for different HTTP methods, but thats all. But consider giving it a shot, because I'd love to hear how it goes. If you think there is some feature that would be useful to you, please [open an issue on GitHub](https://github.com/dash1291/roamer/issues). Much excited volunteers are welcome to open pull requests :)

