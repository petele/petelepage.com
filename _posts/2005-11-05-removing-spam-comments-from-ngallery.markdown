---
layout: post
title: Removing Spam Comments from nGallery
date: '2005-11-05 09:47:00 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Well, I guess one advantage of getting popular is that people seem to like to put spam on your website.  I had a commenting enabled on my nGallery web pages, allowing my friends to comment on pictures that I had posted. I noticed this afternoon though that a bunch of people had decided to post lots of spam comments, linking to spam website on my comments :(

To combat this, I turned commenting off, which is unfortunate, since I like the ability for my friends to comment, but there isn't much I can do right now until I get some time to modify nGallery to allow only authenticated comments.  

Rather than manually deleting the 2500+ comments from the website, I decided to modify the datafile programatically.  I figured I'd [share the code](http://www.nocommonground.com/blogsamples/ngalclean.txt) with others in case anyone else has had similar problems.  You can find it on my website n the blog samples section.

Damn spammers!