---
layout: post
status: publish
published: true
title: 'How To: HSL and HSLA Color Models'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2397
wordpress_url: http://petelepage.com/blog/?p=2397
date: '2010-07-13 09:50:02 -0400'
date_gmt: '2010-07-13 16:50:02 -0400'
categories:
- Web Design &amp; Development
tags:
- IE9
- CodeSample
- CSS3
- HTML5
- HowTo
- ForMSDNIEDC
- HSL
- HSLA
- Color
comments:
- id: 1817
  author: Mark
  author_email: mark@futurekode.com
  author_url: http://www.futurekode.com
  date: '2010-07-15 17:49:40 -0400'
  date_gmt: '2010-07-16 00:49:40 -0400'
  content: I didn't know anything about hsla until now.. thanks for posting :)
- id: 2255
  author: Tim Snadden
  author_email: tim@snadden.com
  author_url: http://Website
  date: '2010-10-12 17:18:37 -0400'
  date_gmt: '2010-10-13 00:18:37 -0400'
  content: "\"but still have to support browsers that don’t support the HSLA color
    mode\". \n\nThere may be an elephant in the room. Maybe you could name a browser
    that might require the fallback code? And don't be disingenuous. Name the obvious
    one(s)."
- id: 2884
  author: HSLA Colors &#8211; Richard Choi
  author_email: ''
  author_url: http://richardchoi.net/hsla-colors/
  date: '2011-03-11 00:30:25 -0500'
  date_gmt: '2011-03-11 08:30:25 -0500'
  content: '[...] http://petelepage.com/blog/2010/07/how-to-hsl-and-hsla-color-models/
    [...]'
---
<p>HSLA is defined in the CSS3 Color Module, and is another way that designers and developers can specify the color of something via CSS.  I grew up understanding color defined by light, varying the amounts of red, green and blue result in different colors – yellow and blue make green, or if you’re in the USA, yellow and blue mean your ziploc bag is sealed. <img class="wlEmoticon wlEmoticon-smile" style="border-style: none;" src="http://petelepage.com/blog/wp-content/uploads/2010/07/wlEmoticonsmile.png" alt="Smile" /></p>
<p>It took me a little while to wrap my head around the HSL color model because it’s quite different from the RGB model.  Instead of adding different amounts of each of those, the color is defined by three properties:</p>
<ol>
<li><strong>Hue </strong><em>[0 to 360]</em> – defines the color according to a position or degree on the color wheel.  The color wheel is split into effectively three areas, with 0° being pure red, 120° being pure green and 240° being pure blue.  Therefore, if you wanted purple, it’d be halfway between red (0 or 360) and blue (240), or 300°<br />
<a href="http://petelepage.com/blog/wp-content/uploads/2010/07/Wheel.png"><img class="wlDisabledImage" style="display: block; float: none; margin-left: auto; margin-right: auto; border-width: 0px;" title="Wheel" src="http://petelepage.com/blog/wp-content/uploads/2010/07/Wheel_thumb.png" border="0" alt="Wheel" width="240" height="240" /></a></li>
<li><strong>Saturation</strong> <em>[0-100%]</em> – defines the intensity of the color, zero, there is no instensity to the color and it shows as gray, and as the number gets bigger, the more intense the color.</li>
<li><strong>Lightness</strong> <em>[0-100%]</em> – defines how bright, or dark the color is.  50% is the true color, the larger the number, the closer you get to white, and the smaller the number, the closer you get to black.</li>
<li><strong>Alpha</strong> <em>[0-1]</em> – is the alpha transparency, and tells the browser how transparent or opaque the color should be.  The closer to 1, the more opaque, and the closer to 0, the more transparent.</li>
</ol>
<h2>Let’s See It In Action!</h2>
<p>In the samples below, if your browser supports HSLA, you'll see two color swatches, the first which sets the table cell background color via the HSLA property, and the second, an image of the same.  If your browser doesn't support HSLA, you'll only see the image.  Each color box is represented by the code sample below, in order from left to right.</p>
<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="3"><strong>Hue</strong></td>
</tr>
<tr>
<td style="background-color: hsla(0, 100%, 50%, 1.0);"></td>
<td style="background-color: hsla(120, 100%, 50%, 1.0);"></td>
<td style="background-color: hsla(240, 100%, 50%, 1.0);"></td>
</tr>
<tr>
<td colspan="3"><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/hue.png"><img src="http://petelepage.com/blog/wp-content/uploads/2010/07/hue.png" alt="" title="Hue" width="550" height="14" class="alignnone size-full wp-image-2435" /></a></td>
</tr>
<tr>
<td colspan="3">
[css]<br />
background-color: hsla(0, 100%, 50%, 1.0);<br />
background-color: hsla(120, 100%, 50%, 1.0);<br />
background-color: hsla(240, 100%, 50%, 1.0);<br />
[/css]<br />
The value for hue is specified as a number between 0 and 359, but you can go above 359, which just cycles around the circle again.  For example 480 represents green, because 480 - 360 = 120.
</td>
</tr>
</table>
<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="5"><strong>Saturation</strong></td>
</tr>
<tr>
<td style="background-color: hsla(300, 0%, 50%, 1.0);"></td>
<td style="background-color: hsla(300, 25%, 50%, 1.0);"></td>
<td style="background-color: hsla(300, 50%, 50%, 1.0);"></td>
<td style="background-color: hsla(300, 75%, 50%, 1.0);"></td>
<td style="background-color: hsla(300, 100%, 50%, 1.0);"></td>
</tr>
<tr>
<td colspan="5"><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/saturation.png"><img src="http://petelepage.com/blog/wp-content/uploads/2010/07/saturation.png" alt="" title="Saturation" width="550" height="14" class="alignnone size-full wp-image-2441" /></a></td>
</tr>
<tr>
<td colspan="5">
[css]<br />
background-color: hsla(300, 0%, 50%, 1.0);<br />
background-color: hsla(300, 25%, 50%, 1.0);<br />
background-color: hsla(300, 50%, 50%, 1.0);<br />
background-color: hsla(300, 75%, 50%, 1.0);<br />
background-color: hsla(300, 100%, 50%, 1.0);<br />
[/css]<br />
The saturation needs to be a percentage between 0% and 100% and defines the intensity of the color. At 0%, with no intensity, we end up with gray.
</td>
</tr>
</table>
<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="5"><strong>Lightness</strong></td>
</tr>
<tr>
<td style="background-color: hsla(300, 100%, 0%, 1.0);"></td>
<td style="background-color: hsla(300, 100%, 25%, 1.0);"></td>
<td style="background-color: hsla(300, 100%, 50%, 1.0);"></td>
<td style="background-color: hsla(300, 100%, 75%, 1.0);"></td>
<td style="background-color: hsla(300, 100%, 100%, 1.0);"></td>
</tr>
<tr>
<td colspan="5"><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/lightness.png"><img src="http://petelepage.com/blog/wp-content/uploads/2010/07/lightness.png" alt="" title="Lightness" width="550" height="14" class="alignnone size-full wp-image-2443" /></a></td>
</tr>
<tr>
<td colspan="5">
[css]<br />
background-color: hsla(300, 100%, 0%, 1.0);<br />
background-color: hsla(300, 100%, 25%, 1.0);<br />
background-color: hsla(300, 100%, 50%, 1.0);<br />
background-color: hsla(300, 100%, 75%, 1.0);<br />
background-color: hsla(300, 100%, 100%, 1.0);<br />
[/css]<br />
Like the saturation attribute, the lightness attribute is a percentage between 0% and 100%.  Changing the value, allows you to easily create black or white, but you can also get very subtle shades of a color, for example by setting the lightness to 98%, will result in an almost white, with a hint of color in it.
</td>
</tr>
</table>
<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="5"><strong>Alpha</strong></td>
</tr>
<tr>
<td style="background-color: hsla(300, 100%, 50%, 0.0);"></td>
<td style="background-color: hsla(300, 100%, 50%, 0.25);"></td>
<td style="background-color: hsla(300, 100%, 50%, 0.50);"></td>
<td style="background-color: hsla(300, 100%, 50%, 0.75);"></td>
<td style="background-color: hsla(300, 100%, 50%, 1.0);"></td>
</tr>
<tr>
<td colspan="5"><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/alpha.png"><img src="http://petelepage.com/blog/wp-content/uploads/2010/07/alpha.png" alt="" title="Alpha" width="550" height="13" class="alignnone size-full wp-image-2451" /></a></td>
</tr>
<tr>
<td colspan="5">
[css]<br />
background-color: hsla(300, 100%, 50%, 0.0);<br />
background-color: hsla(300, 100%, 50%, 0.25);<br />
background-color: hsla(300, 100%, 50%, 0.50);<br />
background-color: hsla(300, 100%, 50%, 0.75);<br />
background-color: hsla(300, 100%, 50%, 1.0);<br />
[/css]<br />
Alpha transparency makes the object more or less transparent.  This is very useful if you want to overlay something on top of another object, but still want to be able to see the object underneath.  Like other places where you can specify the alpha transparency, the value is between 0 and 1, where 0 is completely transparent (effectively invisible), and 1 is completely opaque and you cannot see through it at all.
</td>
</tr>
</table>
<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="5"><strong>Black, Grays and White</strong></td>
</tr>
<tr>
<td style="background-color: hsla(0, 0%, 0%, 1.0);"></td>
<td style="background-color: hsla(0, 0%, 25%, 1.0);"></td>
<td style="background-color: hsla(0, 0%, 50%, 1.0);"></td>
<td style="background-color: hsla(0, 0%, 75%, 1.0);"></td>
<td style="background-color: hsla(0, 0%, 100%, 1.0);"></td>
</tr>
<tr>
<td colspan="5"><a href="http://petelepage.com/blog/wp-content/uploads/2010/07/black.png"><img src="http://petelepage.com/blog/wp-content/uploads/2010/07/black.png" alt="" title="Black" width="550" height="16" class="alignnone size-full wp-image-2447" /></a></td>
</tr>
<tr>
<td colspan="5">
[css]<br />
background-color: hsla(0, 0%, 0%, 1.0);<br />
background-color: hsla(0, 0%, 25%, 1.0);<br />
background-color: hsla(0, 0%, 50%, 1.0);<br />
background-color: hsla(0, 0%, 75%, 1.0);<br />
background-color: hsla(0, 0%, 100%, 1.0);<br />
[/css]<br />
When defining black, grays and white, the hue doesn't matter at all.  The needs to be set at 0, to indicate that there should be no indication of the color showing through.  Then, by changing the lightness you can adjust the shade of black, with 0% being black, and 100% being pure white.
</td>
</tr>
</table>
<h2>Using It Today</h2>
<p>If you want to use the HSLA color model today, but still have to support browsers that don't support the HSLA color model, the fact that CSS styles cascade (crazy I know), allow you to do support both models.</p>
<p>[css]<br />
div {<br />
 background-color: #ff00ff;<br />
 background-color: hsla(300, 100%, 50%, 1);<br />
}<br />
[/css]</p>
