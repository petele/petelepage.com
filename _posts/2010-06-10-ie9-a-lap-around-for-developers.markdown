---
layout: post
status: publish
published: true
title: 'IE9: A Lap Around For Developers'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2187
wordpress_url: http://petelepage.com/blog/2010/06/ie9-a-lap-around-for-developers/
date: '2010-06-10 19:23:00 -0400'
date_gmt: '2010-06-11 02:23:00 -0400'
categories:
- Web Design &amp; Development
- Microsoft
- Internet Explorer
tags:
- IE9
- TechEd
- HTML5
- PP2
- ForMSDNIEDC
comments:
- id: 1693
  author: Eric
  author_email: webmaster@ruskin.com
  author_url: ''
  date: '2010-06-15 14:27:30 -0400'
  date_gmt: '2010-06-15 21:27:30 -0400'
  content: Hi, I am running the IE9 preview maximized and my screen resolution is
    1200px wide, but I'm still getting the message that tells me that I need to resize
    my browser.
- id: 1696
  author: Pete
  author_email: pete.lepage@pobox.com
  author_url: http://petelepage.com
  date: '2010-06-16 12:10:33 -0400'
  date_gmt: '2010-06-16 19:10:33 -0400'
  content: "<blockquote>\r\n<a href=\"#comment-1693\" rel=\"nofollow\">\r\n<strong><em>Eric:</em></strong>\r\n</a>\r\n
    <p>Hi, I am running the IE9 preview maximized and my screen resolution is 1200px
    wide, but I’m still getting the message that tells me that I need to resize my
    browser.</p></blockquote>\r\n\r\nHey Eric!\r\n\r\nI made a small change to the
    page today so it now shows you the screen width of the browser window, so you
    can see what the size is.  My guess is that because of the borders on the browser
    window, it's not showing up properly."
---
<p style="border-bottom: black 1px solid; border-left: black 1px solid; padding-bottom: 5px; margin: 10px; padding-left: 5px; padding-right: 5px; border-top: black 1px solid; border-right: black 1px solid; padding-top: 5px"><em><font color="#ff0000">First, a disclaimer:</font> The code in the slides for this demo isn’t perfect, in fact, it’s a little messy, but I wanted to get the information that I shared with folks out as quickly as I could, and that means I haven’t cleaned it up, or used any kind of best practices to get it to look nice!&#160; Like the </em><a href="http://ietestdrive.com"><em>IE Test Drive</em></a><em> site, it’s more meant to show some neat stuff off, instead of provide coding best practices.</em></p>
<p>TechEd 2010 in New Orleans is almost a wrap, I think all that’s left is the attendee party (and that’s taking place right now), the last session are over, the TLC stations are closed and folks are starting to head home.&#160; My flight leaving in just over 12 hours – 6 hours of flying and time to get caught up on email.&#160; It was awesome to meet so many new folks and see the excitement around Internet Explorer 9.&#160; </p>
<p>One of the sessions I presented at TechEd this year was the IE9: A Lap Around For Developers.&#160; It was an overview of all the new features and support that we’ve announced and lots of live demos.&#160; In fact, it was entirely a demo.&#160; I created a simple AJAX application that filled in a DIV with “slides” that were actually HTML snippets.&#160; </p>
<p>I focused on three areas in my presentation…</p>
<ul>
<li><b>Performance</b>
<ul>
<li>Performance improvements across all systems, not just the JavaScript engine. </li>
<li>The new JavaScript engine </li>
</ul>
</li>
<li><b>Same Mark Up</b>
<ul>
<li>How the team engineering team designs, develops and tests the browser </li>
<li>How the team works with the W3C to ensure that the same mark-up you write works in all browsers </li>
<li>The announced features, including demos and code (I didn’t announce anything, I’ll save that for the <a href="http://blogs.msdn.com/ie">IE Blog</a>!) </li>
</ul>
</li>
<li><b>GPU Accelerated HTML</b>
<ul>
<li>Why acceleration matters, and what it's doing </li>
<li>How hardware acceleration will make your sites work better, without any changes to your code </li>
</ul>
</li>
</ul>
<p>As part of one of the demos, I’m using CSS3 Media Queries and set the page to only display when the browser window is between 1200px and 1300px wide.&#160; If your browser window isn’t wide enough, it will show a different set of CSS that sets most of the content to display:none;.</p>
<p>You can find the deck online at <a title="http://petelepage.com/presentations/teched2010/ie9pp2/" href="http://petelepage.com/presentations/teched2010/ie9pp2/">http://petelepage.com/presentations/teched2010/ie9pp2/</a></p>
<p>As I said above, the code isn’t perfect, and I haven’t tested it in other browsers.&#160; I’ll put money down that if things don’t work quite right,it a problem with my html.</p>
