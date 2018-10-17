---
layout: post
title: IE6 VPC A Success &amp; Web Design World
date: '2006-12-07 15:59:32 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

## <span style="line-height: 19px; font-size: 13px;">I can't believe how much of a success shipping the [IE6 VPC image](http://blogs.msdn.com/ie/archive/2006/11/30/ie6-and-ie7-running-on-a-single-machine.aspx) was!  The fact that we got [Slashdotted](http://slashdot.org/article.pl?sid=06/12/01/153240), picked up by [TechMeme](http://www.techmeme.com/061201/p37#a061201p37), [Mary Jo Foley](http://blogs.zdnet.com/microsoft/?p=125) and several other big publications, and big blogs was fantastic.  Beyond what I would have expected.  And with few exceptions, the feedback has been positive.  Without a doubt, we're going to be continuing this process.  The images will stay relatively the same, we'll just push out the time bombing date each time.  To date, we've had almost 60,000 downloads! </span>

Several of you have asked why the image doesn't pass WGA, preventing you from installing IE7 on it.  In order to release a VPC like this, we to deactivate the product key we use to create the image.  If we didn't, it would be possible to extract the PID, and then use that to activate other copies of Windows XP.  The deactivation of the PID, also seems to make it think that the version of Windows in not genuine.  We understand the need for those who can't install IE7 on their box to be able to test against it, and its a tough place to be.

The other one that people have been asking about is IE5 or IE5.5.  After we got the IE6 image out, I started investigating IE5 and IE5.5.  I was a little surprised at the low share of IE5.x!  It has been dropping much more quickly than I ever would have expected, and today, it's less than 1%.  At less than 1%, I can't really justify shipping a VPC image that would affect a small subset of people.

Web Design World

I'm off to Web Design World next week in Boston.  <span style="text-decoration: line-through;">Being from Canada, and going to school in Ottawa, I grew up with cold, but after being in Seattle for the last 5+ years, I've gotten rid of pretty much all my cold weather clothes, and gotten used to "warm" winters.  In Ottawa in December, 0°F is not an unheard of temperature.  Seattle on the other hand, winter seems to stick around 35°F.</span> :) I just went to look up the temperature in Boston next week, as everyone I've talked to has told me it's going to be COLD.  It's going to be warmer than Seattle next week, in the low 50°s!  Sweet!

The conference should be really interesting!  Eric Meyer is doing some really great sessions, and there are quite a number of exciting speakers.  In fact, this will be my speaking debut.  I'll be doing two sessions "_Internet Explorer 7 from CSS to RSS: How to Take Full Advantage_", and helping out with "_Head To Head: How Expression Web and Visual Studio Work Together_".  There may be one more in there that we're just trying to figure out right now, but we'll see.  Drop me a note if you're going to be there!

PS: If you're a C++ programmer, don't forget about the [IE AddOn Contest](http://msdn2.microsoft.com/en-us/ie/aa904644.aspx)!

![](http://blogs.msdn.com/aggbug.aspx?PostID=1234028)