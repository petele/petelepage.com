---
layout: post
status: publish
published: true
title: DOCType? Why do I need that?
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1673
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:601147
date: '2006-05-18 13:33:00 -0400'
date_gmt: '2006-05-18 20:33:00 -0400'
categories:
- Web Design &amp; Development
tags:
- MSDNBlogPost
comments: []
---
<p>I got a comment on my last post (<a id="bp___v___r___postlist___EntryItems__ctl1_PostTitle" href="/petel/archive/2006/05/15/598491.aspx">CSS Positioning: Margin, Border, and Padding</a>) that was rather blut, telling me to pull it down, as it was confusing and IE rendered things incorrectly.  I did a little checking into things and s/he was partially correct.</p>
<p>In all ASP.NET and HTML page templates that are supplied by VWD, they all include a DOCTYPE at the top of the page.</p>
<p><span style="color: #0000ff; font-size: x-small;"> </span></p>
<p><span style="color: #0000ff; font-size: x-small;">&lt;!</p>
<p></span></p>
<p><span style="color: #800000; font-size: x-small;">DOCTYPE</span><span style="font-size: x-small;"> </span><span style="color: #ff0000; font-size: x-small;">html</span><span style="font-size: x-small;"> </span><span style="color: #ff0000; font-size: x-small;">PUBLIC</span><span style="font-size: x-small;"> </span><span style="color: #0000ff; font-size: x-small;">"-//W3C//DTD XHTML 1.0 Transitional//EN"</span><span style="font-size: x-small;"> </span><span style="color: #0000ff; font-size: x-small;">"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;</span></p>
<p>You've likely seen it on all kinds of pages.  The interesting thing about including this DOCTYPE in your page, is that it causes IE to render in a more standard, and acceptable way.  When it's not there, IE renders in what is called "quirks" mode.  For example, without it, IE counts the width of the DIV as the content, plus the padding and border width!  So suddenly, your 500px DIV is no longer 500px, but 500px minus the width of your border (for each side) and minus the width of your padding.</p>
<p><img src="/photos/petel/images/601144/425x290.aspx" alt="" /></p>
<p>And that is why you should always include the DOCTYPE line, in your page.  It'll make sure that IE behaves itself, and doesn't get all "quirky".  It's also why my fine art photo website doesn't render properly!  I took it out not realizing it.  Oops!  That's also why this page doesn't render quite correctly, the blog software use doesn't have the correct DOCTYPE line in it, so things render in quirks mode.</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=601147" alt="" width="1" height="1" /></p>
