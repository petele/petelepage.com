---
layout: post
status: publish
published: true
title: Cannot Create New Website In VS2005?
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1665
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:655422
date: '2006-07-03 14:23:00 -0400'
date_gmt: '2006-07-03 21:23:00 -0400'
categories:
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<p>[Cross posted to <a href="http://blogs.msdn.com/webdevtools/archive/2006/07/03/655420.aspx">WebDevTools blog</a>]</p>
<p>Over the last few months, I've seen a number of forum posts from people saying that when they choose "Create New Website", the dialog box that showed them the different types of websites they could create was completely horked.  For example, instead of showing this:</p>
<p><img src="http://blogs.msdn.com/photos/webdevtools/images/655408/original.aspx" alt="" /></p>
<p>it would instead show this:</p>
<p><img src="http://blogs.msdn.com/photos/webdevtools/images/655406/original.aspx" alt="" /></p>
<p>Often when we see bugs like this, it's very frustrating for us as testers, and even as a product group.  We know the bug exists.  You tell us it's there, you show us screen shots and everything, but not matter what we do, we are unable to repro the bug in house.</p>
<p>Well, I can say we have successfully tamed this bug.  It appears that this dialog gets screwed up by some third party registry cleaning tools. I was able to verify this by installing a clean copy of VS2005 on a clean Windows XP machine, and then running the registry cleaning tool.  After accepting the changes, things went down hill.  My copy of VS did exactly what people had been describing.</p>
<p>The question is how do you fix it.  So far, the only way we've found is to uninstall the web development components of Visual Studio and then reinstall them.</p>
<p>I'll work to see if I can find a better solution than reinstalling, but in the mean time, don't clean your registry.  I'll also try to work with the third party registry tools to find out how to fix this problem.</p>
<p>PEte</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=655422" alt="" width="1" height="1" /></p>
