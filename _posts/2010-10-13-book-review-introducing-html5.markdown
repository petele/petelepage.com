---
layout: post
title: 'Book Review: Introducing HTML5'
date: '2010-10-13 10:25:44 -0400'
categories: blog
tags:
- Web Design
- HTML
- HTML5
- ForMSDNIEDC
- Book Review
- Introducing HTML5
comments:
- id: 2257
  date: '2010-10-14 00:16:04 -0400'
  content: '[...] This post was mentioned on Twitter by bruce lawson and Mazharul
    Anwar, mattur. mattur said: @brucel &quot;Introducing HTML5 is filled with lots
    of good examples, some you’d show to your Mom, a few that you wouldn’t&quot; http://bit.ly/9q1LOd
    [...]'
- id: 2258
  date: '2010-10-14 00:27:48 -0400'
  content: Thanks Pete! You, sir, deserve a jolly good bottle of &lt;i lang=fr&gt;vin
    rouge&lt;/i&gt; and I shall present you with one when we next meet.
---
[![introinghtml5](/assets/introinghtml5_thumb.jpg "introinghtml5")](/assets/introinghtml5.jpg)

> Introducing HTML5 by [Bruce Lawson](http://twitter.com/brucel) and [Remy Sharp](http://twitter.com/rem)
> Published By: [New Riders](http://www.newriders.com)
> Available From: [Amazon](http://www.amazon.com/gp/product/0321687299?ie=UTF8&amp;tag=petecom-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=0321687299) or Your Local Book Store
> ISBN: 978-0-321-68729-6

It’s taken me a little longer than it should have to write the review of this book, and I’ll blame the fact that, oh I don’t know, we had a beta to get out the door, but now that that’s done – I’ve got a few minutes in my day again. And I did promise Bruce that I’d write a review of the book, so here it is.

**The short review** – lots of great content, and even more puns and bad jokes!

**The long review…**

**Topics Covered**

*   Their definition of HTML5 and it’s history
*   The new structural elements of HTML5
*   How the new structural can be used when creating pages
*   The new HTML5 form elements
*   Audio, Video, Codecs and Backwards Compatibility
*   Canvas, from basic stuff all the way to playing with video
*   Data Storage methods
*   Off-Line Applications
*   Drag and Drop
*   GeoLocation
*   Messages, Web Workers and Web Sockets

One of the most important things that HTML5 books can do these days is be up-front about how they’re defining HTML5 – what’s in and what’s not, because it can be somewhat confusing unless you’re really plugged in. Bruce and Remy do this within the first few pages of their book, and while I don’t agree with their definition of HTML5, I see where they’re coming from. In their book, the specs that they’re talking about are “HTML5 and the related specifications that came from the WHATWG.” I tend to think about HTML5 as the specifications that come out of the W3C, and while the specs are very close, there are some things that the W3C hasn’t looked at or even talked about at this point. The upside of having a book from the WHATWG perspective though is that you can see and hear things from a different perspective.

One of the things that impressed me the most about the book was the neutrality that the authors took – when something wasn’t implemented in one of the browsers, they didn’t call them out or make any of the oft easy jokes that can be made about certain legacy browsers. Instead of saying “browser X doesn’t do Y”, they provided some really good work-arounds and even tips for helping bring legacy browsers up to snuff! For example, in IE8 and below, if you specify a CSS style on an element that the browser doesn’t know about, it won’t style that element. Bruce provides a great tip and some best practices for enabling the new elements in IE8 and below.

The book is filled with lots of good examples, some of which you’d probably show your Mom, and a few that you wouldn’t show your Mom. In fact, I strongly encourage you to read the content of the samples, in addition to looking at them for what they’re trying to show.

For example

> The &lt;i&gt; element “represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, a thought, a ship name, or some other prose whose typical typographic presentation is italicized.”

And the examples they use:

> &lt;p&gt;The design needs a bit more &lt;i lang=fr&gt;ooh la la&lt;/i&gt;.&lt;/p&gt;
> &lt;p&gt;You, sir, deserve a jolly good kick up the &lt;i&gt;gluteus maximus&lt;/i&gt;!&lt;/p&gt;

As I mentioned earlier, there are a few things they talk about that aren’t in the HTML5 spec and a few that aren’t really widely implemented, like Web SQL Databases, GeoLocation, Web Workers and Web Sockets. I wish they had been a bit more clear here that these things are still pretty cutting edge and likely to change. For example Web SQL gets about 1/2 a chapter, but it feels to me like it’s likely to die a slow painful death to be replaced by the Indexed Database API. Sure it’ll work now, and if you’re building prototypes or using libraries to abstract that kind of stuff – no big deal, but if you’re trying plan a long term strategy around this, it’s not super clear what the status of it is.

Still reading? Glad to hear! :) I think my favorite chapter of the book was the canvas section. Canvas is one of those things that I think we’ve only really seen a scratch on the surface of what it’s capable of. While in theory it seems pretty simple (it reminds me a lot of logo), when you start to see the cool stuff folks do with it, you realize it’s much more complex than it appears on the surface. Remy does a really good job of laying out not only the basics, but also taking us a step further into some of the more fun, neat and complex things – like using video in canvas and the cool things that you can do with your videos when put inside canvas.

I’m really glad I got the book – it was worth my time to read it, and it’s not a complex or long read, though it’s certainly longer and goes into more depth than [HTML5 For Web Designers](http://petelepage.com/blog/2010/07/book-review-html5-for-web-designers/) does. In fact, I’d suggest that book is great for PHB’s and folks who might write some HTML5 markup, but more than likely just want to be educated on the subject. This is a book that does a good job for those of us who want to know what’s going on, and how we can start playing with it today.