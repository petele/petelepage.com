---
layout: post
status: publish
published: true
title: Using the WebAdmin tool via IIS
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1854
wordpress_url: http://petelepage.com/blog/2005/12/using-the-webadmin-tool-via-iis/
date: '2005-12-06 05:06:00 -0500'
date_gmt: '2005-12-06 12:06:00 -0500'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>This is not an officially supported scenario, but does work, and may be useful for some of you who don't have the resources to create user administration tools right off the bat.&nbsp; There are security implications when doing this, so you need to verify that this is a valid scenario, and that there are no other work arounds available to you.</p>
<ol>
<li>Create you web application in IIS</li>
<li>Create a virtual directory in the web application called SiteAdministration (or something of your choosing).&nbsp; The path to the vdir should be <em>%windir%\Microsoft.NET\Framework\v2.0.50727\ASP.NETAdminFiles</em></li>
<li>Make the vdir an application</li>
<li>Browse to <a href="http://localhost/application/SiteAdministration/default.aspx?applicationPhysicalPath=d:\inetpub\wwwroot\application&amp;applicationUrl=/application">http://localhost/application/SiteAdministration/default.aspx?applicationPhysicalPath=d:\inetpub\wwwroot\application&amp;applicationUrl=/application</a> (you'll have to change that to work for your paths and application names, but you get the idea).</li>
</ol>
<p>The biggest problem that I ran into when trying to set this up on my system was file locking.&nbsp; I copied the mdf file over to the wwwroot dir, and it was still locked when I did that, so things didn't work right.&nbsp; Once I got the locking issues taken care of, I was golden!</p>
<p>&nbsp;</p>
