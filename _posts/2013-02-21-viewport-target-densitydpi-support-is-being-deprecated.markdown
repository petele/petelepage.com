---
layout: post
status: publish
published: true
title: Viewport target-densitydpi support is being deprecated
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
excerpt: If you're using <code>target-densitydpi</code> in your meta viewport, you
  should be aware that it's been deprecated from the specification and is being removed
  from WebKit and Chrome for Android!
wordpress_id: 2835
wordpress_url: http://petelepage.com/blog/?p=2835
date: '2013-02-21 05:51:20 -0500'
date_gmt: '2013-02-21 13:51:20 -0500'
categories:
- Web Design &amp; Development
- HTML5
- Mobile
tags:
- Web Design
- HTML5
- BestPractices
- mobile
- viewport
- target-densitydpi
comments:
- id: 4887
  author: William Donelson
  author_email: donelson52@gmail.com
  author_url: ''
  date: '2013-03-06 17:00:59 -0500'
  date_gmt: '2013-03-06 22:00:59 -0500'
  content: Doesn’t work on Nexus 7 Chrome. I have a 1024 x 768 fixed size HTML5 page,
    which simply will not display full width properly on that device. The edges are
    cropped.
- id: 4889
  author: Fred
  author_email: freddy.wang@me.com
  author_url: http://twitter.com/freddywang
  date: '2013-03-11 00:40:23 -0400'
  date_gmt: '2013-03-11 04:40:23 -0400'
  content: I tried on Nexus 7, latest build 25.0.x and above doesn't honor target-densitydpi
    at all. We couldn't achieve those crisp UI anymore without being able to control
    the density scaling.
- id: 5033
  author: Rex
  author_email: lisa@tonytonytony.com
  author_url: ''
  date: '2013-07-23 19:24:51 -0400'
  date_gmt: '2013-07-23 23:24:51 -0400'
  content: Does anyone know how to tell when this will effect the Android WebView?
- id: 5040
  author: Pete
  author_email: pete.lepage@pobox.com
  author_url: http://petelepage.com
  date: '2013-07-27 11:05:55 -0400'
  date_gmt: '2013-07-27 15:05:55 -0400'
  content: For the time being, this won't affect the WebView, it will only affect
    users who are using Chrome for Android instead of the Android Browser.
- id: 5060
  author: Rex
  author_email: pasopaso@gmail.com
  author_url: ''
  date: '2013-08-27 12:33:06 -0400'
  date_gmt: '2013-08-27 16:33:06 -0400'
  content: "Do you know if there will be any way to programmatically detect from within
    the webpage when this feature is deprecated or removed?\r\n\r\nI'm having a hard
    time finding information on this, other than it's being removed.\r\n\r\nThanks
    for any insight."
- id: 5095
  author: Jo
  author_email: marekgubala@atlas.cz
  author_url: ''
  date: '2013-12-13 11:52:41 -0500'
  date_gmt: '2013-12-13 16:52:41 -0500'
  content: An easy quick fix? <b>Really?! I don't think so!</b> With target-densitydpi
    I was able to set up image to be 2 inches wide. I see <b>no easy fix</b> without
    this setting.
- id: 5101
  author: Correct viewport setup for KendoUI Mobile &amp; Cordova | Andrew Smith
  author_email: ''
  author_url: http://emertechie.com/correct-viewport-setup-for-kendoui-mobile-cordova/
  date: '2014-04-06 18:18:39 -0400'
  date_gmt: '2014-04-06 22:18:39 -0400'
  content: '[&#8230;] control was too wide on some devices. (Sidenote: I initially
    thought it was due to the use of the now-deprecated target-densitydpi but it wasn&#8217;t
    and according to the comments on this JIRA issue, it will still be needed for
    [&#8230;]'
---
<p>Support for <code>target-densitydpi</code> in the <code>viewport</code> meta tag was recently <a href="http://trac.webkit.org/changeset/119527" target="_blank">removed from WebKit</a> and with Chrome for Android moving forward to current revisions on WebKit, this change is now rolling out in Android. This change affects only a small number of sites because of the limited implementation of the <code>target-densitydpi</code> attribute. It brings Chrome and other WebKit based browsers in compliance with the <a href="http://dev.w3.org/csswg/css-device-adapt/#viewport-meta" target="_blank">specification</a> and matches the behavior of other modern mobile browsers.</p>
<p>In order to to best understand what’s changed, you need to remember that a device pixel is not the same as a CSS pixel (see <a href="http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/" target="_blank">CSS Pixels</a>), and that high DPI displays are able to create crisper and sharper images by fitting more device pixels into a smaller space. This means that in order for content to appear at a normal size, the browser treats each CSS pixel as multiple device pixels and the browser scaled up assets and images to fit within the correct number of CSS pixels.</p>
<p>In Android browser and early versions of Chrome for Android, developers could use <code>target-densitydpi=device-dpi</code> viewport value to force the browser to make a CSS pixel the same size as a device pixel, which may cause content to appear incorrectly scaled on screen (as seen in figure 1).</p>
<p>[caption id="attachment_2839" align="aligncenter" width="520"]<a href="http://petelepage.com/blog/wp-content/uploads/2013/02/targetdensitydpi.png"><img class=" wp-image-2839 " alt="Effects of target-densitydpi" src="http://petelepage.com/blog/wp-content/uploads/2013/02/targetdensitydpi.png" width="520" height="434" /></a> Figure 1 - The effects of <code>target-densitydpi</code><br /><code>&lt;meta name="viewport" content="width=device-width, target-densitydpi=device-dpi"&gt;</code><br />Left: Android Browser respects the <code>target-densitydpi</code> setting and causes content to be improperly scaled.<br />Right: Chrome for Android ignores the <code>target-densitydpi</code> setting.[/caption]</p>
<h2>An Easy, Quick Fix</h2>
<p>In most cases, if your site is affected by this change you can fix it easily by serving the same mark-up (including viewport) to Chrome for Android as you serve to mobile Safari (which never supported <code>target-densitydpi</code>).</p>
<h2>Best Practices for Modern Mobile Web Sites</h2>
<p>When designing a new mobile site, or updating existing pages, you should use modern techniques for dealing with high DPI displays; including always using <code>&lt;meta name="viewport" content="width=device-width"&gt;</code> and a flexible layout for mobile sites. Remember, device sizes, orientations and pixel ratios vary which means that your site may be displayed on a screen ranging from 320 to over 600 CSS pixels wide.</p>
<p>For more information about best practices for building websites that work well on high DPI displays, check out <a href="https://twitter.com/kaishin" target="_blank">Reda Lemeden’s</a> <a href="http://coding.smashingmagazine.com/2012/08/20/towards-retina-web/" target="_blank">Towards a Rentina Web</a> article on Smashing Magazine.</p>
<h2>One Other Little Note</h2>
<p>While writing up this post, I accidentally did a search for sites that used <code>target-density</code> instead of <code>target-density<strong>dpi</strong></code> and I came across quite a few of them.  If you’re using <code>target-density</code> (without the dpi at the end), you can just remove it, it wasn’t doing anything!</p>
