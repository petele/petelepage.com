---
layout: post
status: publish
published: true
title: Internet Explorer 7 Command Line Arguments
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1456
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:1494383
date: '2007-01-19 15:47:34 -0500'
date_gmt: '2007-01-19 22:47:34 -0500'
categories:
- Web Design &amp; Development
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<p>I got a question last night about the command line arguments for IE7, I tried searching for it, and only came up with information about IE4, or about installing IE7, both of which don't really answer the question I was looking for.</p>
<p>Thanks to John Sudds (one of the great programming writers for IE), he sent me a list of the command lines arguments for starting IE7:</p>
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
<p>The following aren't typically used by except when starting IE under some kind of automation (by IE or the COMServer)</p>
<dl>
<dt>-embedding </dt>
<dd>Application started via OLE Automation, causes IE to start with no chrome or any other UI. </dd>
<dt>-restart </dt>
<dd>Application is restarting after crash (informational only).  Starts IE normally </dd>
<dt>-brokerredirect </dt>
<dd>Application started by user broker (informational only).  Starts IE normally</dd>
</dl>
<p>The following legacy arguments are completely ignored:</p>
<ul>
<li>-eval</li>
<li>-new</li>
<li>-nowait</li>
<li>-e</li>
</ul>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=1494383" alt="" width="1" height="1" /></p>
