---
title: Collaborative soundscapes on web
date: 2021-05-02T16:43:11.056Z
description: Project post about FutureLanding
---
When it comes to generative music, one idea that has intrigued me for a while is building dynamic soundscapes. Elements in a visual scene moving around, like people or objects, resulting in music gradually changing as the composition of the scene changes. If you've followed some of my work, some synaesthetic elements might seem related as in the [Pastelloops project](https://pastelloops.ashishdubey.xyz/). I think more than simply the sonification of a changing scene, what excited me was the unpredictable interplay of a growing number of elements in the scene. Like a lot of good ideas, this never materialized until I got a chance to work on [FutureLanding](https://futurelanding.serendipityartsvirtual.com/), a collection of experimental artworks on the web curated by [Veerangana Solanki](https://www.delfinafoundation.com/in-residence/veeranganakumari-solanki/), as part of [Serendipity Arts Festival 2021 Virtual](https://serendipityartsvirtual.com/).

I worked along with [Abhinay Khoparzi](http://khoparzi.com/) and [Samarth Gulati](https://samarthgulati.com/) on the [FutureLanding](https://futurelanding.serendipityartsvirtual.com/) website which would be a collection of artworks from some really brilliant artists. It'd be a dynamic website where artists would keep uploading their content which would be displayed in different formats appropriately designed for the artwork.

When we first got together for brainstorming around what possibilities we could explore, it became evident that we could try a lot of things. Interactivity, generative, and collaborative were some of the keywords. The combination of these prodded my imagination towards a collaborative soundscape. I wasn't sure what it'd look like and if it could help in the project, but I still had some ideas that I wanted to try out.

The initial sketch involved a very simple web interface that featured a couple of dots on a 2D canvas - each representing a live visitor. A user on the web page can move its dot across the 2D plane which reflects on every user's webpage. Each change in position is also accompanied by a change in panner configuration which changes the perception of sound for each visitor in 2D space.

<video controls width="100%">
  <source src="oldgrab.mp4" type="video/mp4">
</video>

I used [socket.io](http://socket.io) to allow for dealing with the network bits of communicating the joining and leaving of a visitor and sharing changes in position. Essentially, it's pretty much like a chat application in which the messages result in changes in the visual and musical output. [Tone.js](https://tonejs.github.io/) has been used to implement the audio bits of the application.

When I showed this to Khoparzi, he had a bunch of cool ideas right away to apply over it. Some of the things that came out of his mind were using custom tunings, more elaborate compositions, and a major visual revamp. Thanks to his ideas, I got to learn about [tune.js](https://github.com/abbernie/tune) which is a library that supports 1000s of tunings to choose from and use in your WebAudio application. After spending a couple of days, Khoparzi had the experiment transformed into a more visual and aurally pleasing experience and it started looking more like artwork.

<video controls width="100%">
  <source src="newgrab.mp4" type="video/mp4">
</video>

This is a snapshot of what lives on [the site](https://futurelanding.serendipityartsvirtual.com/abhinaykhoparzi). Please feel free to load it in your browser (ideally desktop), put on your headphones, move around, listen and ask some of your friends to do it as well. Also, check out the works of the other artists - [Farah Mulla](https://futurelanding.serendipityartsvirtual.com/farahmulla), [Nepal Picture Library](https://futurelanding.serendipityartsvirtual.com/NepalPictureLibrary), [The Packet](https://futurelanding.serendipityartsvirtual.com/thepacket), and [Studio Oleomingus](https://futurelanding.serendipityartsvirtual.com/oleomingus).

For developers out there who are interested in the source code, it's open-source and lives [here](https://github.com/dash1291/collabscape).