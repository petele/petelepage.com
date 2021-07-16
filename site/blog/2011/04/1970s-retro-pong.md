---
layout: post
title: 1970's Retro Pong
date: 2011-04-06
category: web development
tags:
- CodeSample
- HTML5
- Pong
- HTML5 Games
comments:
- id: 3046
  date: '2011-04-07 10:59:48 -0400'
  content: |-
    Yes, HTML5 Audio is broken.  See http://blog.sethladd.com/2011/03/html5-audio-needs-your-help.html

    Also, for the very very basics on HTML5 gaming, check out http://www.html5rocks.com/tutorials/canvas/notearsgame/
- id: 3049
  date: '2011-04-10 22:18:41 -0400'
  content: It doesn't work for me in either Firefox 4 or Chromium 10. When I visit
    the page, nothing happens and I click on "Start new game", the page simply gets
    reloaded.
- id: 3050
  date: '2011-04-10 22:52:49 -0400'
  content: '@Cd-MaN - thanks, looks like one of the little changes I made broke something.'
- id: 4814
  date: '2012-02-18 14:01:28 -0500'
  content: "hi,\r\n\r\nI ve started playing around with the accelerometer on the mobile
    browsers/html 5, and I think using accelerometer for pong would be cool. I will
    be working on it this week, lets see how it comes up!\r\n\r\ncheers\r\nAnshu Prateek"
---
[![screen shot of pong](/assets/pong-300x225.png "Pong")](/assets/pong.png)I started writing my first article for [HTML5Rocks.com](http://html5rocks.com) the other day, and as I started working on it, I wanted to do something fun with it, something that folks could play with and enjoy, but still learn something.  I found a really simple [Pong](http://en.wikipedia.org/wiki/Pong) implementation and decided that I'd re-write it in SVG, use the HTML5 audio tag and a few other little things for some extra fun.  The article isn't done yet, but I at least wanted to put the game up!

## [Play Pong](http://petelepage.com/scratch/pong/)

The little "boink" noise is me.  But it actually presented an interesting challenge, you'll probably notice that the boink doesn't happen every time the ball hits the wall.  When the ball hits a wall twice, in quick succession, the browser is still playing the first boink, and doesn't start a second boink [sad trombone noise].  While it's still in early draft, this is a really great example of something the [Web Audio API](http://chromium.googlecode.com/svn/trunk/samples/audio/specification/specification.html) will be really useful for - playing sounds in quick succession.

Thanks to [Chris Wilson](http://twitter.com/cwilso) for suggesting a painfully obvious optimization - I had two loops running in the game world, one for the paddle and one for the ball moving.  Chris suggested one loop and tracking which key is pressed and moving both the paddle and the ball at the same time.

I've tested the game in Chrome 10, Firefox 4, Opera 11, Safari 5 and Internet Explorer 9 and it worked well in all of them.

The one thing I didn't include was a scoring system, and I didn't really see any interesting ones on the 'net anywhere.  I think the next update I'll include one that is timer based, but if anyone has any better suggestions, I'm open!
