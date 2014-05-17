---
layout: post
status: publish
published: true
title: Running Multiple Versions Of IE On The Same Box
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1286
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:9571189
date: '2009-04-27 12:27:50 -0400'
date_gmt: '2009-04-27 19:27:50 -0400'
categories:
- Web Design &amp; Development
tags:
- MSDNBlogPost
comments: []
---
<p>There are applications out there that will put IE4/5/6/7/8 on the same machine and let you switch between the different versions of IE, but there are a couple of problems with this.  I typically describe this type of situation as a Frankenbuild.  Any time you start messing with Windows core components, and changing OS level DLL’s, you’re setting yourself up for heartache.  You also don’t know if you’re replacing the whole set, or just a subset of the DLLs.  For example, if you’ve got IE8 installed on the box, and you put the IE6 rendering engine in, you have the IE6 rendering engine, the IE8 JavaScript engine and the IE8 networking stack.  Hmm, no real customer is ever going to see that.  You never know what the tool is replacing, if it’s the whole IE stack, or just the components.</p>
<p>Another example would be having IE8 installed, then putting the IE7 rendering and JavaScript components in.  Great, so you’ve got almost the whole stack, but we made significant changes to how the Phishing Filter works between 7 and 8.  What if what you’re looking at or testing will hit that, and you get a completely different behavior than what a real IE7 user would see.</p>
<p>There’s also a security issue there, who is to know if the DLL you just placed on your machine is a real IE5 component, or if it’s a Trojan that is going to send your browser sessions to some unknown host.  While I’d say this is unlikely, it’s not impossible.</p>
<p>We strongly recommend people use VPC images for testing different versions of IE, we even make those VPC’s available for people to download.  They’re time bombed, because we’re basically giving a copy of Windows away, but users can also build their own.</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=9571189" alt="" width="1" height="1" /></p>
