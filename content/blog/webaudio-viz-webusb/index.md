---
title: Web of audio visualization devices
date: 2018-04-01
---

One of the last tweets I read towards the end of 2017 was about the excitement about WebUSB in the upcoming year. WebUSB left a powerful first impression on me, especially with the promise of how it could take the web forward as a platform. With this new power, web engineers can build applications which can talk directly with USB devices. Since these applications would be written in Javascript and run as web applications, expertise in writing system specific software won’t be needed.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Here is what I am most excited about for the web in 2018. <br><br>Web USB<br><br>The moment companies realize their custom hardware no longer requires per platform device drivers and instead can be browser based is going to open the flood gates.</p>&mdash; Sam Saccone (@samccone) <a href="https://twitter.com/samccone/status/945020246242377728?ref_src=twsrc%5Etfw">December 24, 2017</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Every such promise comes with a myriad of new possibilities. If you followed my blog, not long ago, I wrote about my newly lost-and-found excitement towards building audio visualizations (read it [here](https://ashishdubey.xyz/2017/12/27/waves-planes.html)). What I haven’t ever written on my blog is my love towards LEDs. You can already see where this is going.

I’ve wanted to play with RGB LEDs for a very long time, and the possibility of an educational hack got me pumped. I stumbled upon [WS2812 addressable LEDs](http://www.instructables.com/id/Bitbanging-step-by-step-Arduino-control-of-WS2811-/). I can’t fully describe here what addressable RGB LEDs are - but in a nutshell these LEDs are stuck to a circuit to which you can pass a timed signal to set the intensity of a particular color (R,G or B). It’s even possible to hook up more of these little circuits and control a whole array of LEDs with just one input. All you need is a perfectly timed signal to light up a particular LED with a particular color.

While I was waiting for my LEDs, I already had an Arduino board to play with. Like every other new thing I start to play with, I forked the example project, and tried to make changes to it to understand how it all worked together. This was also the time when I couldn’t wait for my WS2812 LEDs and decided to hook up some of my WebAudio code with the WebUSB example project. The result was poor man’s beat detection driving my Arduino’s onboard LED.

When I finally had my 4x4 matrix of WS2812 LEDs, a soldering kit, and mounting impatience to put everything together, I built my device, and was ready to start coding. After some amount fiddling with arduino code which read bytes from the USB port, and the JS code which fed into arduino the bytes representing audio levels at different frequencies (as in spectrum analyzer), I was beginning to see my new device in action. And, this is what it looked like -

<style>
    .embed-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0; overflow: hidden;
        max-width: 100%; height: auto;
    }
    .embed-container iframe, .embed-container object, .embed-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>

<div class="embed-container"><iframe src="https://player.vimeo.com/video/262706101" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

Here is the summary of what happens -

1. A webpage is opened which listens to the audio and analyzes it using WebAudio
2. Audio levels at certain frequencies are sent to Arduino over WebUSB. Each byte represents audio level at a particular frequency.
3. Each input byte read from the serial input by Arduino is used to light up a particular column that represents an audio frequency.

I've put the code on Github [here](https://github.com/dash1291/ws2812-audio-viz), in case anyone wants to have a look. A big shoutout to the authors of the amazing [Neopixel library](https://github.com/adafruit/Adafruit_NeoPixel) that makes it really easy to play with these little WS2812 LEDs by hiding away low-level details of controlling the AVR. This turned out to be quite a fun experiment and developed my further interest in developing web apps and more so, devices, which could work together. And it's really so easy.
