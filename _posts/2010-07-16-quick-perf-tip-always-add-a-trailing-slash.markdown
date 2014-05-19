---
layout: post
status: publish
published: true
title: 'Quick Perf Tip: Always Add A Trailing Slash'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2506
wordpress_url: http://petelepage.com/blog/2010/07/quick-perf-tip-always-add-a-trailing-slash/
date: '2010-07-16 08:44:31 -0400'
date_gmt: '2010-07-16 15:44:31 -0400'
categories: blog
tags:
- HTML
- Performance
- TipsAndTricks
- ForMSDNIEDC
comments:
- id: 1828
  author: Mathias Bynens
  author_email: mathias@qiwi.be
  author_url: http://mathiasbynens.be/
  date: '2010-07-17 02:46:41 -0400'
  date_gmt: '2010-07-17 09:46:41 -0400'
  content: "I agree, but you could’ve given a better example. \n\nPlease, <strong>do</strong>
    link to http://petelepage.com/ but not to http://petelepage.com (without trailing
    slash) to save an unnecessary redirect. <strong>This applies to all sites and
    domains.</strong>\n\nThe fact that http://petelepage.com/blog/ requires a trailing
    slash is site-specific and based on the site author's personal preference. There
    are other sites that rely on the trailing slash being omitted. So you certainly
    don’t need to trailing slash every URL you ever encounter :)\n\nJust my € 0.02."
- id: 1876
  author: steve
  author_email: stephen.cunliffe@gmail.com
  author_url: http://Website
  date: '2010-07-23 11:49:46 -0400'
  date_gmt: '2010-07-23 18:49:46 -0400'
  content: I agree with Mathias, unless your actual web app requires the slash delimiter
    it isn't an issue.  However as noted for linking to an external domain, the slash
    is preferred.
- id: 2249
  author: What is site specific with blog/ ?
  author_email: ddddd@email.nl
  author_url: http://Website
  date: '2010-10-01 00:24:40 -0400'
  date_gmt: '2010-10-01 07:24:40 -0400'
  content: What do You two mean saying http://petelepage.com/blog/ is site specific?  It
    works with and without trailing slash. But version without it is slower and users
    redirect.
- id: 2313
  author: Scott
  author_email: scott@fletchcorp.com
  author_url: http://www.yreceipts.com
  date: '2010-10-21 01:00:24 -0400'
  date_gmt: '2010-10-21 08:00:24 -0400'
  content: "Hey mate, \n\nDoes this matter with pages? This may be a stupid question,
    but www.yreceipts.com/ and www.yreceipts.com/home.html/ ?\n\nI am going through
    our site putting on the trailing links, and my thoughts are that you would not
    put a slash after an html page, but thought I would ask. \n\nCheers\nSCott"
---
Here’s a quick performance tip for your Friday (or Saturday for those of you across the date line) – when linking to a directory, be sure to add the trailing slash to the directory name, otherwise, it causes a redirect from the server, thus adds a bit of time to your page load!

## <span class="text-success">Do</span>

`<a href=”http://petelepage.com/blog/”>Pete’s Blog</a>

## <span class="text-danger">Don’t</span>

<a href=”http://petelepage.com/blog”>Pete’s Blog</a>

## What’s going on?

When the browser makes a web request for a page without the slash, it responds with a 301 redirect response, which then causes the browser to make a second request for almost the exact same page, except it asks for it with the trailing slash! On a client with a slow network connection, that’s going to be really painful! Even if it’s not a slow connection, it is going to add some extra time to your page load!
