---
layout: post
status: publish
published: true
title: IE7 Slow To Load Site Sometimes? A Fix!
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1414
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:1889048
date: '2007-03-15 14:58:28 -0400'
date_gmt: '2007-03-15 21:58:28 -0400'
categories:
- Web Design &amp; Development
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<p>Every once in a while, when I've typed "blogs.msdn.com/petel" into my address bar, I find IE7 a little slow to load the site.  Especially after I've gotten home and am no longer on the corporate network.  As it turns out, Vista (and Windows XP), is actually checking my local network connections (mapped drives, etc) for a machine named blogs.msdn.com before it goes out to the internet to find the site.</p>
<p>The easy work around for this, always type http:// before your web request, and it'll always use http instead of checking for local file system, networked file systems and such!</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=1889048" alt="" width="1" height="1" /></p>
