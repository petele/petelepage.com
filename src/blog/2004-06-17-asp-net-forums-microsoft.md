---
layout: post
title: ASP.NET Forums @ Microsoft
date: '2004-06-17 11:00:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

If you've visited [http://www.asp.net/forums](http://www.asp.net/forums)&nbsp;you know about the ASP.NET forums.&nbsp; A pretty good little web forum application.&nbsp; For a v1 product, its pretty darn good, its stable, handles huge numbers of posts (close to 600,000 posts as of today), is easy to use, and is pretty darn quick.&nbsp; Not too shabby for a v1 app that we use to support people both inside and outside Microsoft. Internally, we've modified the forums to add a few new features, and use Windows authentication instead of using Forms Authentication.&nbsp; 

The more interesting project, was adding the new features.&nbsp; People at Microsoft love their email.&nbsp; But keeping an archive of old email is both expensive resource wise, and time wise.&nbsp; Why does everyone need to keep a copy of the same email.&nbsp; Think about that, DevDiv is about 5000 people.&nbsp; Lets say 1/4 are testers.&nbsp; Thats 1250 people, that means there will be about 1250 copies of all the Maui mails that would need to be kept.&nbsp; So the forums seemed like a natural way to do stuff.&nbsp; We could keep the archive there, people could post messages, but we were back to that old problem.&nbsp; People like email!

To accomodate this, I created a 'subscription' model for the forums.&nbsp; Forum members could go to a specific forum, and then subscribe to that forum, one of three different models.&nbsp; 

1.  No forum notification emails
2.  New forum&nbsp;threads only
3.  All forum posts

The first&nbsp;model is pretty obvious, the second one allows a user to only be told when a new thread is started.&nbsp; They won't receive all the subsequent posts to that forum, unless they go and subscribe to that particular thread.&nbsp; The third model, sends them all of the posts from a particular forum, new threads and replies to threads.&nbsp; 

We then removed all of the email lists that we had, and moved everyone to use the forums.&nbsp; Today, about 1.5 years into using the forums, we have just under 2000 internal users, 10,000+ posts and on average of 25 new posts per day.&nbsp; And thats just for one set of forums.&nbsp; We've (ask I've) successfully rolled the forums out to 15+ internal teams, and even managed to get feedback from VP's on how useful they are!

Using Windows Authentication over Forms Authentication was a basic requirement, and was a good way for me to dig my head into the forums.&nbsp; I unfortunately didn't have much to do with the original coding of the forums (though I've done some for vNext), so digging into v1 to make the change to Windows Auth took a bit of work.&nbsp; The code changes are actually pretty simple once I found them, it was a matter of just checking to see who was logged in, checking to see if they had an account and going from there.

I've got ideas where we go next with the Forums, I just need to find some time with which to do it...