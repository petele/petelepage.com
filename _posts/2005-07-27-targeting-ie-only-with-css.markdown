---
layout: post
title: Targeting IE only with CSS
date: '2005-07-27 05:17:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I got a question from Jeff yesterday asking me about a CSS tag that he'd never seen before, and in fact, neither had I.&nbsp; 

What he saw was this:

> *html someclassname
> {
> &nbsp;&nbsp;&nbsp;properties in here
> }
> *html Anotherclassname
> {
> &nbsp;&nbsp;&nbsp;properties in here
> }</p>

I started to do some investigation and see what I could find out.&nbsp; I checked one of my favourite CSS Books (Web Standards Solutions: The Markup and Style Handbook), nothing, I tried to search on [http://search.msn.com](http://search.msn.com) and [http://www.google.com](http://www.google.com) and nothing.&nbsp; (It is kind of hard to search for *html when you actually want * not the wildcard!)

I emailed Dan Cederholm (the author of the book above) and he graciously replied with the answer this morning.&nbsp; It's a way of targeting CSS to only Windows IE.&nbsp; IE believes that there is a wrapper element around the HTML block, and thus applies these rules to the block.&nbsp; Great if you need to fix a CSS rendering issue in Windows IE.

I've also posted some new Night photos at [http://www.bigbackpack.ca/ngallery/albums/Night+and+Low+Light+(July+21%2c+2005).aspx](http://www.bigbackpack.ca/ngallery/albums/Night+and+Low+Light+(July+21%2c+2005).aspx)&nbsp;