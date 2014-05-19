---
layout: post
title: Protecting Your Sites &amp; Content From ClickJacking
date: '2010-05-29 19:34:23 -0400'
categories: blog
tags:
- ClickJacking
- ForMSDNIEDC
comments: []
---

I was talking with a few friends the other day about content online, using iFrames to show other peoples content on what looks like another site. For the bad guy, it’s basically “stealing” content and putting your ads and materials around it, so they get the money from the ads. 

One way to protect your content or your website from this type of stealing of content is to use ClickJacking protection. ClickJacking protection is primarily meant to protect from ClickJacking attacks, but can also be useful in this case. By turning on ClickJacking protection, you prevent your site from being loaded in a frame/iFrame. It’s built into Internet Explorer 8+, Chrome, Safari. Firefox requires the NoScript add-on, though it needs to be enabled on a per site basis by the site/page owner.

To turn on ClickJacking protection, you need to add an HTTP response header to add responses. If you have access to your server, you can do it at the server level, but if you don’t have server level access, you can easily add the header via server side code.

**Via PHP:** _header('X-Frame-Options: DENY');_    
**Via ASP.NET:** _Response.Headers.Add(&quot;X-Frame-Options&quot;, &quot;DENY&quot;);_

**X-Frame-Options: SAMEORIGIN** – prevents the page from being loaded in a frame unless the frame is loading from the same top level domain.    
**X-Frame-Options: DENY** – prevents your site from being loaded in a frame in any case    

You can find some good ClickJacking resources on the [Internet Explorer team blog](http://blogs.msdn.com/b/ie/archive/2009/01/27/ie8-security-part-vii-clickjacking-defenses.aspx).