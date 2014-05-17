---
layout: post
status: publish
published: true
title: too short, too long, just right
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1848
wordpress_url: http://petelepage.com/blog/2006/01/too-short-too-long-just-right/
date: '2006-01-23 03:28:00 -0500'
date_gmt: '2006-01-23 10:28:00 -0500'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>One of the cool things I like about working at Microsoft is the diversity.&nbsp; There are so many smart, and diverse people here, it's fantastic.&nbsp; At the same time, it presents some interesting challenges within all the different orgs.</p>
<p>Sometimes, when we're heavily loaded, we'll often try to loadbalance some things.&nbsp; Last year, I needed some help on creating the test plans for Themes and StyleSheetThemes, so one of my coworkers stepped up and created the test plans for me.&nbsp; This was great, I was able to get the other stuff done that I needed to get done, but when it came time to automate those tests, they were mine to automate, which is fine.</p>
<p>Until I started looking at them more deeply.&nbsp; First thing I guess you should know about me, is that I like simplicity.&nbsp; I want things to be short, sweet and to the point.&nbsp; I would much rather have 100 tests that cover 50 items, than 25 tests that cover 2 items each.&nbsp; I like little overlap in my tests, thus if something breaks, it's easy to figure out exactly what it touches and get the repro steps down to as simple an idea as possible.</p>
<p>There is one problem with 100 tests vs 25 tests though.&nbsp; One of the metrics that our team often looks at is the number of tests remaining.&nbsp; And when you're numbers are significantly higher than anyone elses, you get called out.&nbsp; Why are your numbers so high?&nbsp; How are you going to address this?&nbsp; As SDE/T's, we're expected to automate an average of 2 tests per day on "hard core" automation days.&nbsp; Because I like short simple tests, I can often get 4-8 tests done in a single day, and 2-4 done on a non hard core day.&nbsp; But when you're looking at the average, this doesn't average out for the team.</p>
<p>There probably is a comprimise somewhere in the middle there, but I haven't found it, and I'm not sure I want to find it.&nbsp; I've consistently been able to complete my automation in the time perscribed, so I don't see a need in changing my plans.&nbsp; So is there a right way to create the test plans?&nbsp; I don't think so.&nbsp; I think doing what works for you, and that your area is getting the important coverage it needs, than you're all set.&nbsp; </p>
