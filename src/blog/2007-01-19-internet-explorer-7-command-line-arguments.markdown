---
layout: post
title: Internet Explorer 7 Command Line Arguments
date: '2007-01-19 15:47:34 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I got a question last night about the command line arguments for IE7, I tried searching for it, and only came up with information about IE4, or about installing IE7, both of which don't really answer the question I was looking for.

Thanks to John Sudds (one of the great programming writers for IE), he sent me a list of the command lines arguments for starting IE7:

<dl>
<dt>-k </dt>
<dd>Kiosk Mode </dd>
<dt>-extoff </dt>
<dd>No Add-ons Mode </dd>
<dt>-nohome </dt>
<dd>Skip display of home page (best used with URI argument) </dd>
<dt>[URI] </dt>
<dd>Resource location as folder path or Web address </dd>
</dl>

The following aren't typically used by except when starting IE under some kind of automation (by IE or the COMServer)

<dl>
<dt>-embedding </dt>
<dd>Application started via OLE Automation, causes IE to start with no chrome or any other UI. </dd>
<dt>-restart </dt>
<dd>Application is restarting after crash (informational only).  Starts IE normally </dd>
<dt>-brokerredirect </dt>
<dd>Application started by user broker (informational only).  Starts IE normally</dd>
</dl>

The following legacy arguments are completely ignored:

*   -eval
*   -new
*   -nowait
*   -e

![](http://blogs.msdn.com/aggbug.aspx?PostID=1494383)