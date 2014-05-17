---
layout: post
status: publish
published: true
title: 'A Quick Intro: Canvas in IE9'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2304
wordpress_url: http://petelepage.com/blog/?p=2304
date: '2010-06-24 11:37:13 -0400'
date_gmt: '2010-06-24 18:37:13 -0400'
categories:
- Web Design &amp; Development
- Microsoft
- Internet Explorer
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
  author: steve
  author_email: stephen.cunliffe@gmail.com
  author_url: http://Website
  date: '2010-06-25 07:44:58 -0400'
  date_gmt: '2010-06-25 14:44:58 -0400'
  content: typo in your 2nd last link should be DeepZoom not DeemZoom
---
<p>Yesterday, with the release of Internet Explorer 9 Platform Preview 3, the engineering team announced support for hardware accelerated &lt;canvas&gt;!  The &lt;canvas&gt; element is a part of the HTML5 Standards specification and allows for dynamic scriptable rendering of 2D graphics.  To use it, you put a simple &lt;canvas&gt; element in your HTML, which defines the drawing area, then through JavaScript, you can get the 2d context and begin dynamically drawing within that region.</p>
<p>Much like SVG, you can draw on the page using basic shapes, but you can also easily include rasterized images, videos and other objects.  But unlike SVG, when you draw on the page, the browser doesn't remember any of the "drawings".  With SVG, the "drawings" just become elements in the DOM and you can script them, change them, basically treat them like any other element.  Canvas on the other hand, doesn't remember the state of the "drawings" so you can't change them as easily.</p>
<h3>Quick Code Sample</h3>
<p>[xml]<br />
&lt;canvas id=&quot;myCanvas&quot; width=&quot;200&quot; height=&quot;200&quot;<br />
    style=&quot;border: 1px solid black;&quot;&gt;<br />
      Your browser doesn’t support Canvas, sorry.<br />
&lt;/canvas&gt;<br />
[/xml]</p>
<p>[javascript]<br />
    var canvasElement = document.getElementById(&quot;myCanvas&quot;);<br />
    if (canvasElement.getContext) {<br />
        // The Context exists, so we know we have a canvas element<br />
        // we can work with.<br />
        var context = canvasElement.getContext(&quot;2d&quot;);<br />
        context.fillStyle = &quot;rgb(255,0,0)&quot;;<br />
        context.fillRect(30, 30, 50, 50);<br />
    }<br />
    else {<br />
        // There is no Context, so we can't do anything.<br />
        // Put fall back code here.<br />
    }<br />
[/javascript]</p>
<h3>Results in...</h3>
<p><canvas id="myCanvas" width="200" height="200" style="border: 1px solid black;"><br />
  Your browser doesn’t support Canvas, sorry.<br />
</canvas></p>
<p><script type="text/javascript"><br />
    var canvasElement = document.getElementById("myCanvas");<br />
    if (canvasElement.getContext) {<br />
        // The Context exists, so we know we have a canvas element we can work with.<br />
        var context = canvasElement.getContext("2d");<br />
        context.fillStyle = "rgb(255,0,0)";<br />
        context.fillRect(30, 30, 50, 50);<br />
    }<br />
    else {<br />
        // There is no Context, so we can't do anything.<br />
        // Put fall back code here.<br />
    }<br />
</script></p>
<h3>The More Exciting Stuff...</h3>
<p>Okay, so I can draw a little red box on a page, woop-de-doo right!  This is when I recommend you check out the IETestDrive.com website where the truly cool demos are.  Be sure when you're looking at these demos that you take a minute to look at the source code as well - it's pretty interesting to see how few lines of HTML are required, and in many cases how few lines of JavaScript as well!</p>
<ul>
<li><a href="http://ie.microsoft.com/testdrive/Performance/AmazonShelf/Default.html">Amazon Shelf</a> - A visualization of Amazon's top books and a way to read a bit more into them</li>
<li><a href="http://ie.microsoft.com/testdrive/Performance/FishIE%20tank/Default.html">FishIE Tank</a> - Remember the Windows 7 beta fish, he's back!</li>
<li><a href="http://ie.microsoft.com/testdrive/Performance/MrPotatoGun/Default.html">Mr. Potato Gun</a> - Mr. Potato plus what looks like an air canon is never good for Mr. Potato!</li>
<li><a href="http://ie.microsoft.com/testdrive/Performance/AsteroidBelt/Default.html">Asteroid Belt</a> - be sure to look at the HTML for this one, there really isn't any!</li>
<li><a href="http://ie.microsoft.com/testdrive/Graphics/DeepZoom/Default.html">DeemZoom</a> - this is truly making web apps native!</li>
<li><a href="http://ie.microsoft.com/testdrive/Graphics/CanvasPad/Default.html">Canvas Pad</a> - An interactive canvas drawing app</li>
</ul>
<p>Enjoy!<br />
PEte</p>
