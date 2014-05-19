---
layout: post
title: Viewport target-densitydpi support is being deprecated
excerpt: If you're using <code>target-densitydpi</code> in your meta viewport, you
  should be aware that it's been deprecated from the specification and is being removed
  from WebKit and Chrome for Android!
date: '2013-02-21 05:51:20 -0500'
categories: blog
tags:
- Web Design
- HTML5
- BestPractices
- mobile
- viewport
- target-densitydpi
comments:
- id: 4887
  date: '2013-03-06 17:00:59 -0500'
  content: Doesn’t work on Nexus 7 Chrome. I have a 1024 x 768 fixed size HTML5 page,
    which simply will not display full width properly on that device. The edges are
    cropped.
- id: 4889
  date: '2013-03-11 00:40:23 -0400'
  content: I tried on Nexus 7, latest build 25.0.x and above doesn't honor target-densitydpi
    at all. We couldn't achieve those crisp UI anymore without being able to control
    the density scaling.
- id: 5033
  date: '2013-07-23 19:24:51 -0400'
  content: Does anyone know how to tell when this will effect the Android WebView?
- id: 5040
  date: '2013-07-27 11:05:55 -0400'
  content: For the time being, this won't affect the WebView, it will only affect
    users who are using Chrome for Android instead of the Android Browser.
- id: 5060
  date: '2013-08-27 12:33:06 -0400'
  content: "Do you know if there will be any way to programmatically detect from within
    the webpage when this feature is deprecated or removed?\r\n\r\nI'm having a hard
    time finding information on this, other than it's being removed.\r\n\r\nThanks
    for any insight."
- id: 5095
  date: '2013-12-13 11:52:41 -0500'
  content: An easy quick fix? <b>Really?! I don't think so!</b> With target-densitydpi
    I was able to set up image to be 2 inches wide. I see <b>no easy fix</b> without
    this setting.
- id: 5101
  date: '2014-04-06 18:18:39 -0400'
  content: '[&#8230;] control was too wide on some devices. (Sidenote: I initially
    thought it was due to the use of the now-deprecated target-densitydpi but it wasn&#8217;t
    and according to the comments on this JIRA issue, it will still be needed for
    [&#8230;]'
---
Support for `target-densitydpi` in the `viewport` meta tag was recently [removed from WebKit](http://trac.webkit.org/changeset/119527) and with Chrome for Android moving forward to current revisions on WebKit, this change is now rolling out in Android. This change affects only a small number of sites because of the limited implementation of the `target-densitydpi` attribute. It brings Chrome and other WebKit based browsers in compliance with the [specification](http://dev.w3.org/csswg/css-device-adapt/#viewport-meta) and matches the behavior of other modern mobile browsers.

In order to to best understand what’s changed, you need to remember that a device pixel is not the same as a CSS pixel (see [CSS Pixels](http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/)), and that high DPI displays are able to create crisper and sharper images by fitting more device pixels into a smaller space. This means that in order for content to appear at a normal size, the browser treats each CSS pixel as multiple device pixels and the browser scaled up assets and images to fit within the correct number of CSS pixels.

In Android browser and early versions of Chrome for Android, developers could use `target-densitydpi=device-dpi` viewport value to force the browser to make a CSS pixel the same size as a device pixel, which may cause content to appear incorrectly scaled on screen (as seen in figure 1).

[caption id="attachment_2839" align="aligncenter" width="520"][![Effects of target-densitydpi](/assets/targetdensitydpi.png)](/assets/targetdensitydpi.png) Figure 1 - The effects of `target-densitydpi`
`&lt;meta name="viewport" content="width=device-width, target-densitydpi=device-dpi"&gt;`
Left: Android Browser respects the `target-densitydpi` setting and causes content to be improperly scaled.
Right: Chrome for Android ignores the `target-densitydpi` setting.[/caption]

## An Easy, Quick Fix

In most cases, if your site is affected by this change you can fix it easily by serving the same mark-up (including viewport) to Chrome for Android as you serve to mobile Safari (which never supported `target-densitydpi`).

## Best Practices for Modern Mobile Web Sites

When designing a new mobile site, or updating existing pages, you should use modern techniques for dealing with high DPI displays; including always using `&lt;meta name="viewport" content="width=device-width"&gt;` and a flexible layout for mobile sites. Remember, device sizes, orientations and pixel ratios vary which means that your site may be displayed on a screen ranging from 320 to over 600 CSS pixels wide.

For more information about best practices for building websites that work well on high DPI displays, check out [Reda Lemeden’s](https://twitter.com/kaishin) [Towards a Rentina Web](http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/) article on Smashing Magazine.

## One Other Little Note

While writing up this post, I accidentally did a search for sites that used `target-density` instead of `target-densitydpi` and I came across quite a few of them.  If you’re using `target-density` (without the dpi at the end), you can just remove it, it wasn’t doing anything!