---
layout: post
status: publish
published: true
title: 20 Tips and Tricks For Writing Fast Web Applications
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2182
wordpress_url: http://petelepage.com/blog/2010/06/20-tips-and-tricks-for-writing-fast-web-applications/
date: '2010-06-10 11:30:00 -0400'
date_gmt: '2010-06-10 18:30:00 -0400'
categories:
- Web Design &amp; Development
- Internet Explorer
tags:
- TechEd
- JavaScript
- Performance
- Fast
- TipsAndTricks
- ForMSDNIEDC
comments:
- id: 1679
  author: Mark
  author_email: marking@microsoft.com
  author_url: ''
  date: '2010-06-11 07:53:55 -0400'
  date_gmt: '2010-06-11 14:53:55 -0400'
  content: At least IE is ignoring the BLINK tag in your bio :)
- id: 1691
  author: Russell
  author_email: RussellGove@gmail.com
  author_url: ''
  date: '2010-06-15 07:15:13 -0400'
  date_gmt: '2010-06-15 14:15:13 -0400'
  content: Hellp Pete, Great session. At the ssession I asked if you could provide
    us info on the tools you used to get  the stats on where the browser was spending
    its time. Can you provede this info?
- id: 1713
  author: Russell
  author_email: RussellGove@gmail.com
  author_url: ''
  date: '2010-06-22 06:07:56 -0400'
  date_gmt: '2010-06-22 13:07:56 -0400'
  content: "Hello again Pete\r\nYou mentioned at the session that you would provide
    us info on the tools you used to get the stats on where the browser was spending
    its time. Can you provide this info?"
- id: 1714
  author: Pete
  author_email: pete.lepage@pobox.com
  author_url: http://petelepage.com
  date: '2010-06-22 10:29:40 -0400'
  date_gmt: '2010-06-22 17:29:40 -0400'
  content: "It looks like the IE Engineering Blog beat me to the punch!  \n\n<a href=\"http://blogs.msdn.com/b/ie/archive/2010/06/21/measuring-browser-performance-with-the-windows-performance-tools.aspx\"
    rel=\"nofollow\">http://blogs.msdn.com/b/ie/archive/2010/06/21/measuring-browser-performance-with-the-windows-performance-tools.aspx</a>\n\nIt's
    a great post, with lots of detail and info!  I'll summarize later today, but wanted
    to share sooner than later!\n\nEnjoy!\nPEte"
---
<p>I’m about 30 minutes from walking on stage to present my last session here at <a href="http://northamerica.msteched.com">TechEd 2010 in New Orleans</a> and I wanted to share this presentation early, just in case the session room fills up and folks can’t make it in or for those of you who weren’t able to make it.  If you’re a TechEd attendee, the slides are up on the Schedule Builder, otherwise, you can find my deck <a href="http://petelepage.com/presentations/decks/TE2010-WEB05-INT.pptx">here</a> [8meg PPTX].</p>
<p>The Internet Explorer engineering team spends a lot of time working to understand what developers and doing when building their websites, where the bottle necks are (both in the browser and in the code that developers write).  With all of the information that they gathered, they built set of 20 tips and tricks that will help your site run faster, and more efficiently.  While the research they did used Internet Explorer as the base, almost all of these tips and tricks apply to all browsers.</p>
<p>Jason Weber presented these tips and tricks at MIX2010 this year – the session web page is at <a title="http://live.visitmix.com/MIX10/Sessions/CL29" href="http://live.visitmix.com/MIX10/Sessions/CL29">http://live.visitmix.com/MIX10/Sessions/CL29</a> and you can also download the <a href="http://ecn.channel9.msdn.com/o9/mix/10/pptx/CL29.pptx">slides</a>, or the video in <a href="http://ecn.channel9.msdn.com/o9/mix/10/mp4/CL29.mp4">MP4</a>, <a href="http://ecn.channel9.msdn.com/o9/mix/10/wmv/CL29.wmv">Windows Media Format</a> or <a href="http://ecn.channel9.msdn.com/o9/mix/10/wmv-hq/CL29.wmv">High Quality Windows Media Format</a>.  It runs about 80 minutes and should be required watching for every developer out there I think. I know I learned a few things and I think my site breaks some of the best practices that I’ve got listed below!  (I guess I’ve got some work to do! <img class="wlEmoticon wlEmoticon-smile" style="border-style: none;" src="http://petelepage.com/blog/wp-content/uploads/2010/06/wlEmoticonsmile.png" alt="Smile" />)</p>
<p>Without any further ado, I present to you…</p>
<h2>20 Tips &amp; Tricks To Improve Your Website Performance</h2>
<ol>
<li>Ensure server side compression is enabled on “text” like files</li>
<li>Use conditional requests</li>
<li>Provide cacheable content</li>
<li>Minify your JavaScript</li>
<li>Don’t scale images (I’m really guilty of this one)</li>
<li>Use image sprites</li>
<li>Link JavaScript at the bottom of your file, and avoid inline JavaScript</li>
<li>Add the “defer” tag when you have to link to JavaScript at the top of your page</li>
<li>Link Style Sheets at the top of your page</li>
<li>Avoid using @import</li>
<li>Minimize Walking Look Up Chain</li>
<li>Cache Function Pointers</li>
<li>Use the Native JSON object</li>
<li>Remove duplicate scripts</li>
<li>Minimize DOM interactions</li>
<li>Use efficient DOM Methods</li>
<li>Use querySelectorAll for groups</li>
<li>Only send required styles</li>
<li>Simplify your selectors</li>
<li>Minimize page layouts</li>
</ol>
<p>PS: If you want a little laugh, go to the <a href="http://northamerica.msteched.com">TechEd</a> site, and look at my <a href="http://NorthAmerica.MSTechEd.com/featuredspeakers?fbid=pfq8PhbInf4&amp;mtag=mbar&amp;site_id=email#Pete_LePage">bio</a> – it wasn’t quite supposed to read like that <img class="wlEmoticon wlEmoticon-smile" style="border-style: none;" src="http://petelepage.com/blog/wp-content/uploads/2010/06/wlEmoticonsmile.png" alt="Smile" /></p>
<p><strong>[UPDATED 6/10/10 1:25pm PST]</strong> Fixed the link to the slides, sorry about that!</p>
