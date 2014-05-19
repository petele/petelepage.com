---
layout: post
title: 'How To: HSL and HSLA Color Models'
date: '2010-07-13 09:50:02 -0400'
categories: blog
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
  date: '2010-07-15 17:49:40 -0400'
  content: I didn't know anything about hsla until now.. thanks for posting :)
- id: 2255
  date: '2010-10-12 17:18:37 -0400'
  content: "\"but still have to support browsers that don’t support the HSLA color
    mode\". \n\nThere may be an elephant in the room. Maybe you could name a browser
    that might require the fallback code? And don't be disingenuous. Name the obvious
    one(s)."
- id: 2884
  date: '2011-03-11 00:30:25 -0500'
  content: '[...] http://petelepage.com/blog/2010/07/how-to-hsl-and-hsla-color-models/
    [...]'
---
HSLA is defined in the CSS3 Color Module, and is another way that designers and developers can specify the color of something via CSS.  I grew up understanding color defined by light, varying the amounts of red, green and blue result in different colors – yellow and blue make green, or if you’re in the USA, yellow and blue mean your ziploc bag is sealed. ![Smile](/assets/wlEmoticonsmile.png)

It took me a little while to wrap my head around the HSL color model because it’s quite different from the RGB model.  Instead of adding different amounts of each of those, the color is defined by three properties:

1.  **Hue **_[0 to 360]_ – defines the color according to a position or degree on the color wheel.  The color wheel is split into effectively three areas, with 0° being pure red, 120° being pure green and 240° being pure blue.  Therefore, if you wanted purple, it’d be halfway between red (0 or 360) and blue (240), or 300°

    [![Wheel](/assets/Wheel_thumb.png "Wheel")](/assets/Wheel.png)
2.  **Saturation** _[0-100%]_ – defines the intensity of the color, zero, there is no instensity to the color and it shows as gray, and as the number gets bigger, the more intense the color.
3.  **Lightness** _[0-100%]_ – defines how bright, or dark the color is.  50% is the true color, the larger the number, the closer you get to white, and the smaller the number, the closer you get to black.
4.  **Alpha** _[0-1]_ – is the alpha transparency, and tells the browser how transparent or opaque the color should be.  The closer to 1, the more opaque, and the closer to 0, the more transparent.

## Let’s See It In Action!

In the samples below, if your browser supports HSLA, you'll see two color swatches, the first which sets the table cell background color via the HSLA property, and the second, an image of the same.  If your browser doesn't support HSLA, you'll only see the image.  Each color box is represented by the code sample below, in order from left to right.

<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="3">**Hue**</td>
</tr>
<tr>
<td style="background-color: hsla(0, 100%, 50%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(120, 100%, 50%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(240, 100%, 50%, 1.0);">&nbsp;</td>
</tr>
<tr>
<td colspan="3">![](/assets/hue.png)</td>
</tr>
<tr>
<td colspan="3">
{% highlight css %}
background-color: hsla(0, 100%, 50%, 1.0);
background-color: hsla(120, 100%, 50%, 1.0);
background-color: hsla(240, 100%, 50%, 1.0);
{% endhighlight %}

The value for hue is specified as a number between 0 and 359, but you can go above 359, which just cycles around the circle again.  For example 480 represents green, because 480 - 360 = 120.
</td>
</tr>
</table>

<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="5">**Saturation**</td>
</tr>
<tr>
<td style="background-color: hsla(300, 0%, 50%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(300, 25%, 50%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(300, 50%, 50%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(300, 75%, 50%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 50%, 1.0);">&nbsp;</td>
</tr>
<tr>
<td colspan="5">![Saturation](/assets/saturation.png)</td>
</tr>
<tr>
<td colspan="5">
{% highlight css %}
background-color: hsla(300, 0%, 50%, 1.0);
background-color: hsla(300, 25%, 50%, 1.0);
background-color: hsla(300, 50%, 50%, 1.0);
background-color: hsla(300, 75%, 50%, 1.0);
background-color: hsla(300, 100%, 50%, 1.0);
{% endhighlight %}

The saturation needs to be a percentage between 0% and 100% and defines the intensity of the color. At 0%, with no intensity, we end up with gray.
</td>
</tr>
</table>

<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="5">**Lightness**</td>
</tr>
<tr>
<td style="background-color: hsla(300, 100%, 0%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 25%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 50%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 75%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 100%, 1.0);">&nbsp;</td>
</tr>
<tr>
<td colspan="5">![Lightness](/assets/lightness.png)</td>
</tr>
<tr>
<td colspan="5">
{% highlight css %}
background-color: hsla(300, 100%, 0%, 1.0);
background-color: hsla(300, 100%, 25%, 1.0);
background-color: hsla(300, 100%, 50%, 1.0);
background-color: hsla(300, 100%, 75%, 1.0);
background-color: hsla(300, 100%, 100%, 1.0);
{% endhighlight %}

Like the saturation attribute, the lightness attribute is a percentage between 0% and 100%.  Changing the value, allows you to easily create black or white, but you can also get very subtle shades of a color, for example by setting the lightness to 98%, will result in an almost white, with a hint of color in it.
</td>
</tr>
</table>

<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="5">**Alpha**</td>
</tr>
<tr>
<td style="background-color: hsla(300, 100%, 50%, 0.0);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 50%, 0.25);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 50%, 0.50);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 50%, 0.75);">&nbsp;</td>
<td style="background-color: hsla(300, 100%, 50%, 1.0);">&nbsp;</td>
</tr>
<tr>
<td colspan="5">![Alpha](/assets/alpha.png)</td>
</tr>
<tr>
<td colspan="5">
{% highlight css %}
background-color: hsla(300, 100%, 50%, 0.0);
background-color: hsla(300, 100%, 50%, 0.25);
background-color: hsla(300, 100%, 50%, 0.50);
background-color: hsla(300, 100%, 50%, 0.75);
background-color: hsla(300, 100%, 50%, 1.0);
{% endhighlight %}

Alpha transparency makes the object more or less transparent.  This is very useful if you want to overlay something on top of another object, but still want to be able to see the object underneath.  Like other places where you can specify the alpha transparency, the value is between 0 and 1, where 0 is completely transparent (effectively invisible), and 1 is completely opaque and you cannot see through it at all.
</td>
</tr>
</table>

<table style="width:100%;border:1px solid #cccccc;">
<tr>
<td colspan="5">**Black, Grays and White**</td>
</tr>
<tr>
<td style="background-color: hsla(0, 0%, 0%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(0, 0%, 25%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(0, 0%, 50%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(0, 0%, 75%, 1.0);">&nbsp;</td>
<td style="background-color: hsla(0, 0%, 100%, 1.0);">&nbsp;</td>
</tr>
<tr>
<td colspan="5">![Black](/assets/black.png)</td>
</tr>
<tr>
<td colspan="5">
{% highlight css %}
background-color: hsla(0, 0%, 0%, 1.0);
background-color: hsla(0, 0%, 25%, 1.0);
background-color: hsla(0, 0%, 50%, 1.0);
background-color: hsla(0, 0%, 75%, 1.0);
background-color: hsla(0, 0%, 100%, 1.0);
{% endhighlight %}

When defining black, grays and white, the hue doesn't matter at all.  The needs to be set at 0, to indicate that there should be no indication of the color showing through.  Then, by changing the lightness you can adjust the shade of black, with 0% being black, and 100% being pure white.
</td>
</tr>
</table>

## Using It Today

If you want to use the HSLA color model today, but still have to support browsers that don't support the HSLA color model, the fact that CSS styles cascade (crazy I know), allow you to do support both models.

{% highlight css %}
div {
 background-color: #ff00ff;
 background-color: hsla(300, 100%, 50%, 1);
}
{% endhighlight %}