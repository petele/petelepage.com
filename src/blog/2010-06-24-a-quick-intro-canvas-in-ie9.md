---
layout: post
title: 'A Quick Intro: Canvas in IE9'
date: '2010-06-24 11:37:13 -0400'
categories: blog
tags:
- IE9
- SVG
- CodeSample
- HowTo
- Performance
- Fast
- canvas
- ForMSDNIEDC
comments:
- id: 1727
  date: '2010-06-25 07:44:58 -0400'
  content: typo in your 2nd last link should be DeepZoom not DeemZoom
---

Yesterday, with the release of Internet Explorer 9 Platform Preview 3, the engineering team announced support for hardware accelerated &lt;canvas&gt;!  The &lt;canvas&gt; element is a part of the HTML5 Standards specification and allows for dynamic scriptable rendering of 2D graphics.  To use it, you put a simple &lt;canvas&gt; element in your HTML, which defines the drawing area, then through JavaScript, you can get the 2d context and begin dynamically drawing within that region.

Much like SVG, you can draw on the page using basic shapes, but you can also easily include rasterized images, videos and other objects.  But unlike SVG, when you draw on the page, the browser doesn't remember any of the "drawings".  With SVG, the "drawings" just become elements in the DOM and you can script them, change them, basically treat them like any other element.  Canvas on the other hand, doesn't remember the state of the "drawings" so you can't change them as easily.

### Quick Code Sample

{% highlight html %}

&lt;canvas id=&quot;myCanvas&quot; width=&quot;200&quot; height=&quot;200&quot;

    style=&quot;border: 1px solid black;&quot;&gt;

      Your browser doesn’t support Canvas, sorry.

&lt;/canvas&gt;

{% endhighlight %}

{% highlight javascript %}

    var canvasElement = document.getElementById(&quot;myCanvas&quot;);

    if (canvasElement.getContext) {

        // The Context exists, so we know we have a canvas element

        // we can work with.

        var context = canvasElement.getContext(&quot;2d&quot;);

        context.fillStyle = &quot;rgb(255,0,0)&quot;;

        context.fillRect(30, 30, 50, 50);

    }

    else {

        // There is no Context, so we can't do anything.

        // Put fall back code here.

    }

{% endhighlight %}

### Results in...

<canvas id="myCanvas" width="200" height="200" style="border: 1px solid black;">

  Your browser doesn’t support Canvas, sorry.

</canvas>

<script type="text/javascript">

    var canvasElement = document.getElementById("myCanvas");

    if (canvasElement.getContext) {

        // The Context exists, so we know we have a canvas element we can work with.

        var context = canvasElement.getContext("2d");

        context.fillStyle = "rgb(255,0,0)";

        context.fillRect(30, 30, 50, 50);

    }

    else {

        // There is no Context, so we can't do anything.

        // Put fall back code here.

    }

</script>

### The More Exciting Stuff...

Okay, so I can draw a little red box on a page, woop-de-doo right!  This is when I recommend you check out the IETestDrive.com website where the truly cool demos are.  Be sure when you're looking at these demos that you take a minute to look at the source code as well - it's pretty interesting to see how few lines of HTML are required, and in many cases how few lines of JavaScript as well!

*   [Amazon Shelf](http://ie.microsoft.com/testdrive/Performance/AmazonShelf/Default.html) - A visualization of Amazon's top books and a way to read a bit more into them
*   [FishIE Tank](http://ie.microsoft.com/testdrive/Performance/FishIE%20tank/Default.html) - Remember the Windows 7 beta fish, he's back!
*   [Mr. Potato Gun](http://ie.microsoft.com/testdrive/Performance/MrPotatoGun/Default.html) - Mr. Potato plus what looks like an air canon is never good for Mr. Potato!
*   [Asteroid Belt](http://ie.microsoft.com/testdrive/Performance/AsteroidBelt/Default.html) - be sure to look at the HTML for this one, there really isn't any!
*   [DeemZoom](http://ie.microsoft.com/testdrive/Graphics/DeepZoom/Default.html) - this is truly making web apps native!
*   [Canvas Pad](http://ie.microsoft.com/testdrive/Graphics/CanvasPad/Default.html) - An interactive canvas drawing app

Enjoy!

PEte