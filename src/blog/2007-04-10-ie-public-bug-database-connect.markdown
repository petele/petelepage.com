---
layout: post
title: IE Public Bug Database - Connect
date: '2007-04-10 00:10:27 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I've been following the comments over on the IE blog about Molly's post, particularly the comments of Chris Beall, thacker and steve_web, and I figured I'd post a bit of a follow up to what they were saying and ask for feedback from the community.

In the IE7 timeframe, with the connect database open, we took in close to 10,000 bugs.  I don't remember the exact number, but it was closer to 10,000 than 5,000.  Yes, you read that right.  The problem is that realistically, the number of real customer bugs out of that 10,000 submitted was tiny.  I'm talking fractionally tiny.

So what makes a bad bug.  We got bugs that basically said "IE sucks".  That was it. No more detail than that.  Every bug like that, takes time for someone to look at, triage, resolve, close, and so forth.  It's not a short process.  For each bug that we outright close, it's probably about 3 minutes work.

Then there are the bugs that say something like "x does not work."  Great, so the bug gets handed off to a developer or a tester and asked to see if they can repro the problem.  They'll likely spend 10-15 minutes on it.  If they can get a good repro back to triage it goes with comments.  If they can't, it still goes back to triage, where someone will end up closing it.

Then there are the diamonds.  The great bug reports.  Someone who includes a HTML and CSS snippet, an screen shot from IE and a screen shot from another browser.  In cases like these, triage looks at the bug, makes a decision on how serious the problem is, how many users it will affect to fix it, what the implications are to fix it, and then either assign it to a developer, or reject it.

But wait, there is still another category, and this one is the most trouble some.  Duplicate bugs.  Say Chris Beall files a bug, and then thacker files another bug that but because of the way Chris filed his bug, and thacker filed his bug, don't find each other.  Well, now, we've got two bugs filed for the same issue.  Now triage looks at those two bugs, and tries to figure out if they're the same.  Most likely, they'll assign them to a tester or developer to see if they are or not.

So what is the solution for today and the next version of IE?  There are people on the IE team who are very much opposed to opening connect again.  Primarily because we can't handle the volume of feedback that you have to give.  Outside of Windows, I'd be willing to guess we've got the largest user base of ANY application.  I think to not reopen it is not the best decision, but I completely understand the cost involved in reopening it.

I'm about to present a proposal to the IE management team (shh, don't tell them, I haven't told them yet ;)).  Instead of opening Connect to every single web developer and web designer in the world, we open it to a select group of people.  Those who have proven themselves to file good bugs and understand the problems that we've faced in the past.  They need to be completely connected to the web world, and know and understand that the bugs we're looking at can't just be "IE SUCKZ!!!!111OMGBBQ!!!!111!!!1!"  (and yes, we did get a bug similar to that).  We need to find a way to make them accessible to you, so that you can tell them about your bugs, and they can look at it.

And finally, and I think more importantly, we need to find a way to make our bug tracking system more transparent to you.  Let you know if we know about a particular bug, and if we're going to fix it in the next version, if we're punting it, or what not.  I don't know today how we do this, but this is the thing that I'm trying to find the answer to today.

This post turned into one MUCH longer than I was expecting.  Hopefully I'm coherent enough to have made some things clear and explained the difficulties faced by the IE team, and why the Connect database isn't open today.  We need to find a good solution that works for all of us soon, and I'm working on it.

![](http://blogs.msdn.com/aggbug.aspx?PostID=2067660)