---
layout: post
status: publish
published: true
title: HTML5 Slide Decks & Presentation Timer
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2697
wordpress_url: http://petelepage.com/blog/?p=2697
date: '2011-09-21 09:06:11 -0400'
date_gmt: '2011-09-21 16:06:11 -0400'
categories: blog
tags:
- JavaScript
- CodeSample
- CSS3
- HTML5
- canvas
- HTML5Slides
comments:
- id: 4707
  author: Marcos Loiola
  author_email: marcos.loiola@gmail.com
  author_url: http://marcosloiola.com
  date: '2011-09-21 09:52:25 -0400'
  date_gmt: '2011-09-21 16:52:25 -0400'
  content: "Really Great!\r\n\r\nI watched your presentations in GDD and I asked myself
    \"What is he using?\"\r\n\r\nI´ll try!\r\n\r\nMarcos Loiola - Brazil"
- id: 4708
  author: niclam
  author_email: niclam@citycloud.com.ar
  author_url: http://www.gamedesigntales.com
  date: '2011-09-21 13:25:25 -0400'
  date_gmt: '2011-09-21 20:25:25 -0400'
  content: I loved your presentations and I really enjoyed the fact that you used
    HTML 5 slides to talk about well, HTML 5.
---
[![Countdown Timer For Presentations](/assets/timer.png "Presentation Timer")](/assets/timer.png)A couple of folks at GDD and other events have asked what I use to create my slide decks, and I figured I'd share and add a link to a little plug in that I wrote for the slide decks.

My slide decks are based on [HTML5Slides](http://code.google.com/p/html5slides/), the Google HTML5 Slide Template - it's the same one that was used at Google IO, generally by the Chrome DevRel team and lots of other folks.  It's freely available for anyone to use, modify, fork, whatever you want, and creating the content for it is pretty easy.  One of my favorite things about using the HTML5Slides as my presentation software is that I can embed my demos straight into the slides and when you want to understand what's going on, you can simply view source!

There are a couple of things that I think this framework is missing though.  There isn't a way to do a presenter view and an audience view (not always necessary, but sometimes helpful to make sure you don't forget any of the important points you want to hit).  There wasn't an easy way to add fades when doing builds, but most importantly for me, it doesn't have any kind of timer.   I love to talk, and can easily lose track of time when on stage.

### Creating a presentation timer

This weekend, while on the flight from Brazil to Argentina, I build a little timer plug in that would help better keep track of time.  I wanted it to do three things:

1.  Tell me how many minutes until the official start time of my presentation
2.  Tell me how many minutes left until I was supposed to be done
3.  Tell me when I was done, and how many minutes over I was

### Inserting a canvas element

Let's jump right into the code! When the timer starts, it inserts a `<canvas>` element at the beginning of the `<body>` element with [insertAdjacentHTML](http://mzl.la/r5FuiJ).  The canvas element is going to draw our clock face and display the number of minutes left.

{% highlight javascript %}
var insertElement = function() {
  var body = document.getElementsByTagName("body")[0];
  body.insertAdjacentHTML("afterbegin",
    '<canvas id="cClock" width="30" height="30"></canvas>');
}
{% endhighlight %}

### Make it look pretty, and subtle

Since I wanted things to be very subtle and configurable, I used CSS to set the position to the upper left corner, and set the opacity to 0.25 to it mostly invisible so that I'll likely be the only one who notices it.  I also created a hover pseudo element so that I can hover over the element if I need to.  Finally, I added a hidden class so that the element is completely invisible if the presentation ended a long time ago.

{% highlight css %}
#cClock {
  position: fixed;
  top: 0px;
  left: 0px;
  opacity: 0.25;
  z-index: 1000;
}

#cClock:hover { opacity: 1.0; }
#cClock.hidden { display: none; }

{% endhighlight %}

### Refreshing the clock

When I start the clock, it uses a `setTimeout` to fire at a specific interval.  I decided to use `setTimeout` instead of `setInterval` because I wanted to be able to dynamically change the amount of time between refreshes, depending on where in the presentation I was.  If I was close to either the start time or end time, I want the clock to update more often, where as in the middle, it can fire every minute.

Drawing the clock

Getting the clock to draw in the way I wanted took a little bit of tinkering.

{% highlight javascript %}
  var drawClock = function(min, color) {
    var canvas = document.getElementById(&quot;cClock&quot;);
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,30,30);
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(15, 15, 10, toRadians(-90), toRadians((((min-60)/60)*360)-90), true);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.font="10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(min, 15, 15);
  }
{% endhighlight %}

### Math is hard, let's go shopping!*

`drawClock(min, color)` grabs the `<canvas>` element, and uses clearRect() to erase everything in the box.  I then set the line width and color and start the drawing the circle with `beginPath()` and [arc()](http://mzl.la/nRiHGl).  Let's quickly start at the end, the "true" tells arc to draw the circle counterclockwise.  Then, the first three parameters tell the arc to put the center at 15, 15 with a radius of 10px.  The next two parameters are the angles to start drawing the circle at in radians.  If you remember high school algebra (which I don't), 0 in radians on a circle would be equivalent of 3pm on a clock, so to figure out where the top is, we need to rotate -90 degrees and then convert to radians with toRadians(-90).

To calculate the second arc position, we need to convert everything to radians again, but we also need to figure out the angle in degrees.  Since I wanted the circle to become more complete the closer the time gets to zero, I started by taking the minutes and subtracting 60.  Next, I needed to figure out where (in degrees) the minutes would be, to do that, I divided by 60 to get a percentage and multiplied by 360 to get the degrees along the circle.

For example to figure out where the circle should end if the minutes were 15:

toRadians((((15 - 60) / 60) * 360) - 90)

-45 / 60 = -0.75 -- The arc line should continue three quarters of the way around

-0.75 * 360 = -270 -- The angle in degrees that the arc should draw to

-270 - 90 = -360 -- The angle in radians, and remember my comment earlier that 0 (or 360) would be at the 3 o'clock position.

Phew! When coding this up, that was the hardest part for me.  I'm not exactly the biggest math fan! :)  Next I called `.stroke()` to draw the circle, and sure enough - the circle appears!  Finally, I wanted to show the number of minutes left in the center of the circle.  I did that by using `fillText()`.  To get things to fit in the circle perfectly centered, I aligned everything middle and center, and with `fillText`, set the base point to 15, 15 - the center of the box.

### Getting the countdown timer on screen

Finally - to create an instance of the clock in a presentation, I created a JSON config object that contained the start time, and a length and a warning time, and then created an instance of the timer.

{% highlight html %}
<script type="text/javascript" src="js/timer.js"></script>
<script type="text/javascript">
  window.timerConfig = window.timerConfig || {
    settings : {
      date: new Date('Sept 19 2011 16:30'),
      minutes: 45,
      warnAt: 10
    }
  };
  var t = PresentationTimer();
  t.start();
</script>

{% endhighlight %}

### In action

I've iframed the timer into the window below, or you can try it [here](http://bit.ly/pIUxqH).  It creates a new instance of the timer, and sets the start time to be two minutes from now, with a length of 2 minutes and a warning at 1 minute.  I also made a small change to the CSS so that it's less transparent and you can see it better.

<iframe src="/scratch/presotimer/" style="border: none; width:50px; height: 50px;box-shadow:none;"></iframe>

### Summary

You can see the entire timer.js file in [GitHub](http://bit.ly/qwqDUc), or even grab the [whole project.](http://bit.ly/nifQCq).  I really want to integrate this into the HTML5Slides template at some point, because I think it's pretty useful.  Feel free to grab it, use it, fork it, what ever works for you!

*Math is hard, let's go shopping is one of my favorite Simpsons quotes.
