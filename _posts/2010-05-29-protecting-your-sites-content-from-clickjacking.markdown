---
layout: post
status: publish
published: true
title: Protecting Your Sites &amp; Content From ClickJacking
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2157
wordpress_url: http://petelepage.com/blog/2010/05/protecting-your-sites-content-from-clickjacking/
date: '2010-05-29 19:34:23 -0400'
date_gmt: '2010-05-30 02:34:23 -0400'
categories:
- Web Design &amp; Development
tags:
- ClickJacking
- ForMSDNIEDC
comments: []
---
<p>I was talking with a few friends the other day about content online, using iFrames to show other peoples content on what looks like another site.&#160; For the bad guy, it’s basically “stealing” content and putting your ads and materials around it, so they get the money from the ads.&#160; </p>
<p>One way to protect your content or your website from this type of stealing of content is to use ClickJacking protection.&#160; ClickJacking protection is primarily meant to protect from ClickJacking attacks, but can also be useful in this case.&#160; By turning on ClickJacking protection, you prevent your site from being loaded in a frame/iFrame.&#160; It’s built into Internet Explorer 8+, Chrome, Safari.&#160; Firefox requires the NoScript add-on, though it needs to be enabled on a per site basis by the site/page owner.</p>
<p>To turn on ClickJacking protection, you need to add an HTTP response header to add responses.&#160; If you have access to your server, you can do it at the server level, but if you don’t have server level access, you can easily add the header via server side code.</p>
<p><strong>Via PHP:</strong> <em>header('X-Frame-Options: DENY');</em>    <br /><strong>Via ASP.NET:</strong> <em>Response.Headers.Add(&quot;X-Frame-Options&quot;, &quot;DENY&quot;);</em></p>
<p><strong>X-Frame-Options: SAMEORIGIN</strong> – prevents the page from being loaded in a frame unless the frame is loading from the same top level domain.    <br /><strong>X-Frame-Options: DENY</strong> – prevents your site from being loaded in a frame in any case    </p>
<p>You can find some good ClickJacking resources on the <a href="http://blogs.msdn.com/b/ie/archive/2009/01/27/ie8-security-part-vii-clickjacking-defenses.aspx">Internet Explorer team blog</a>.</p>
