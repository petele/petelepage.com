---
layout: post
title: Tracking Mysterious Bugs
date: '2005-06-30 03:53:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

The new MSDN feedback system has been a great thing for connecting our team with our user and finding some great bugs that we haven't found yet, or maybe wouldn't have found.&nbsp; But there is one class of bugs that usually drive me (and I file them too) a bit batty.&nbsp; They're the not repro bugs.&nbsp; You KNOW when you file a bug that something wasn't working right.&nbsp; You think you get the repro steps all down and you're good to go.&nbsp; You file the bug, and a few days later, it comes back from the dev as not repro.&nbsp; You try again, and bamo, not repro for you either.&nbsp; You know the bug happened. You saw it not work.&nbsp; What the hell happened.

Lately, we've been getting a number of MSDN feedback bugs about the designer closing the file that you're working on after renaming a control.&nbsp; I've seen 4 or 5 of them filed.&nbsp; If it had been one&nbsp;maybe two, I'd think either user error or install problem, but at this point, the hairs on the back of my neck are up.&nbsp; And I can't get a repro to work on any of my installs. I've tried VSTS, I've tried Express, and it just won't happen.

If you've seen this, please either file a bug with the MSDN feedback, or contact me directly.&nbsp; I really want to track this sucker down!