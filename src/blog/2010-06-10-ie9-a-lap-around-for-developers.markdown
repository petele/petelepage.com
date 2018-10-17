---
layout: post
title: 'IE9: A Lap Around For Developers'
date: '2010-06-10 19:23:00 -0400'
categories: blog
tags:
- IE9
- TechEd
- HTML5
- PP2
- ForMSDNIEDC
comments:
- id: 1693
  date: '2010-06-15 14:27:30 -0400'
  content: Hi, I am running the IE9 preview maximized and my screen resolution is
    1200px wide, but I'm still getting the message that tells me that I need to resize
    my browser.
- id: 1696
  date: '2010-06-16 12:10:33 -0400'
  content: "<blockquote>\r\n<a href=\"#comment-1693\" rel=\"nofollow\">\r\n<strong><em>Eric:</em></strong>\r\n</a>\r\n
    <p>Hi, I am running the IE9 preview maximized and my screen resolution is 1200px
    wide, but I’m still getting the message that tells me that I need to resize my
    browser.</p></blockquote>\r\n\r\nHey Eric!\r\n\r\nI made a small change to the
    page today so it now shows you the screen width of the browser window, so you
    can see what the size is.  My guess is that because of the borders on the browser
    window, it's not showing up properly."
---

_<font color="#ff0000">First, a disclaimer:</font> The code in the slides for this demo isn’t perfect, in fact, it’s a little messy, but I wanted to get the information that I shared with folks out as quickly as I could, and that means I haven’t cleaned it up, or used any kind of best practices to get it to look nice! Like the _[_IE Test Drive_](http://ietestdrive.com)_ site, it’s more meant to show some neat stuff off, instead of provide coding best practices._

TechEd 2010 in New Orleans is almost a wrap, I think all that’s left is the attendee party (and that’s taking place right now), the last session are over, the TLC stations are closed and folks are starting to head home. My flight leaving in just over 12 hours – 6 hours of flying and time to get caught up on email. It was awesome to meet so many new folks and see the excitement around Internet Explorer 9. 

One of the sessions I presented at TechEd this year was the IE9: A Lap Around For Developers. It was an overview of all the new features and support that we’ve announced and lots of live demos. In fact, it was entirely a demo. I created a simple AJAX application that filled in a DIV with “slides” that were actually HTML snippets. 

I focused on three areas in my presentation…

*   **Performance**

    *   Performance improvements across all systems, not just the JavaScript engine. 
    *   The new JavaScript engine 

*   **Same Mark Up**

    *   How the team engineering team designs, develops and tests the browser 
    *   How the team works with the W3C to ensure that the same mark-up you write works in all browsers 
    *   The announced features, including demos and code (I didn’t announce anything, I’ll save that for the [IE Blog](http://blogs.msdn.com/ie)!) 

*   **GPU Accelerated HTML**

    *   Why acceleration matters, and what it's doing 
    *   How hardware acceleration will make your sites work better, without any changes to your code 

As part of one of the demos, I’m using CSS3 Media Queries and set the page to only display when the browser window is between 1200px and 1300px wide. If your browser window isn’t wide enough, it will show a different set of CSS that sets most of the content to display:none;.

You can find the deck online at [http://petelepage.com/presentations/teched2010/ie9pp2/](http://petelepage.com/presentations/teched2010/ie9pp2/ "http://petelepage.com/presentations/teched2010/ie9pp2/")

As I said above, the code isn’t perfect, and I haven’t tested it in other browsers. I’ll put money down that if things don’t work quite right,it a problem with my html.