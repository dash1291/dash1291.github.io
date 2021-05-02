---
title: Interactive soundscape on web
date: 2021-05-02T16:43:11.056Z
description: FutureLanding
---
When it comes to generative music, one idea that has intrigued me for a while is building dynamic soundscapes. Elements in a visual scene moving around, like people or objects, resulting in music gradually changing as the composition of the scene changes. If you've followed some of my work, some synaesthetic elements might seem related as in the Pastelloops project (link). I think more than simply the sonification of a changing scene, what excited me was the unpredictable interplay of a growing number of elements in the scene. Like a lot of good ideas, this never materialized until I got a chance to work on FutureLanding, a digital art-curation project on the web, as part of Serendipity Arts Festival 2021 Virtual.

I worked along with Abhinay Khoparzi and Samarth Gulati on the FutureLanding website which would be a collection of artworks from different artists. It'd be a dynamic website where artists would keep uploading their content which would be displayed in different formats appropriately designed for the artwork.

One of the artworks was done by Abhinay Khoparzi as along with being a co-developer he was also one of the artists - his piece was to be about

The initial sketch involved a very simple interface that featured a couple of dots - each representing a live visitor. A user on the web page can move its dot across the 2D plane which reflects on every user's webpage. Each change in position is also accompanied by a change in panner configuration which changes the perception of sound for each visitor in 2D space.

<video controls>
  <source src="myVideo.mp4" type="video/mp4">
  <source src="myVideo.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is
     a <a href="myVideo.mp4">link to the video</a> instead.</p>
</video>

I used [socket.io](http://socket.io) to allow for dealing with the network bits of communicating the joining and leaving of a visitor and sharing changes in position. Essentially, it's pretty much like a chat application in which the messages result in changes in the visual and musical output. Tone.js has been used to implement the audio parts of it.

When I showed this to Khoparzi, he had a bunch of cool ideas right away to apply over it. Some of the things that came out of his mind were using custom tunings, more elaborate compositions, and a major visual revamp. After spending a couple of days, the experiment had transformed into a more visual and aurally pleasing experience and looked like artwork.