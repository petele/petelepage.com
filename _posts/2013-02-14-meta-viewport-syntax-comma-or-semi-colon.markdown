---
layout: post
title: Meta viewport syntax - comma or semi-colon?
excerpt: If you’re using a semi-colon to separate values in your viewport meta tag,
  your site may break! Use a comma instead.
date: '2013-02-14 13:25:50 -0500'
categories: blog
tags:
- HTML5
- TipsAndTricks
- BestPractices
- mobile
- viewport
comments:
- id: 5092
  date: '2013-12-05 15:34:23 -0500'
  content: Thx, above described correct syntax is working fine for me.
---

**TL;DR:** If you’re using a semi-colon to separate values in your viewport meta tag, your site may break! Use a comma instead.

Browsers can be pretty forgiving most days, they do their best to fix our coding mistakes; but it’s a tough job.  Most days, they manage to get it right, but trying to fix all the possible error cases is pretty hard.  Worse yet, sometimes one browser fixes our code for us, while others don’t.

The viewport meta tag seems to be one of those elements that’s a little bit persnickety.  The [CSS Device Adaptation spec](http://dev.w3.org/csswg/css-device-adapt/) says the correct syntax uses a comma to separate the values.  Unfortunately some sites use a semi-colon, which causes the browser to ignore your viewport settings completely!

### Correct Syntax

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
{% endhighlight %}

### Incorrect Syntax

{% highlight html %}
<meta name="viewport" content=width="device-width; initial-scale=1.0" />
{% endhighlight %}

If you want to see this in action and how bad things can look, use the remote debugger with Chrome for Android Beta to change the comma to a semi-colon in the viewport meta tag on Google.com.  The site will suddenly go from looking good, to looking awful.

{% comment %}
[![Good viewport syntax](/assets/vp-comma-180x300.png)](/assets/vp-comma.png)

[![Invalid viewport syntax](/assets/vp-semicolon-180x300.png)](/assets/vp-semicolon.png)
{% endcomment %}

<div style="clear:both;"></div>

The Developer Tools also warn you in the Console when it comes across an invalid viewport meta tag with the warning: `Viewport argument value "device-width;" for key "width" is invalid, and has been ignored. Note that ';' is not a separator in viewport values. The list should be comma-separated.`

Go make awesome, but use a comma!
