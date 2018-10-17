---
layout: post
title: CSS Style In Web Controls
date: '2005-07-25 08:19:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I was assigning out some MSDN bugs this afternoon when I came across an interesting one.&nbsp; I enjoy reading the MSDN feedback bugs, there are some in there that we've argued about for months, there are new bugs, and there are some that we just don't quite understand what the bug is about.&nbsp; 

This afternoons [interesting bug](http://lab.msdn.microsoft.com/ProductFeedback/viewFeedback.aspx?feedbackid=7ab74b9b-7a7e-4015-8975-e3e473b8ac7e) was someone who wanted to have the text in his ASP:TextBox centered instead of left justified.&nbsp; Well, the bug was resolved this morning as by design, along with the comment that this was not possible to do due to HTML limitations.&nbsp; I was pretty sure I'd seen it done before, so I popped over to my dev box and gave it a try, first with an html text box.&nbsp; And I managed to get this: PPP 

<textarea id="TextArea1" style="VERTICAL-ALIGN: middle; WIDTH: 427px; HEIGHT: 213px; TEXT-ALIGN: center">this is the meaning of life</textarea> 

Knowing that I could get it to work in HTML, I figured I would try an ASP control.&nbsp; Sure enough, I pasted the style="vertical-align: middle; text-align: center;" into the control, and bamo, it worked as expected.&nbsp; But then I noticed something else, you don't get intellisense on style for some ASP control.&nbsp; So if you try to type "style" in to an ASP:TextBox, you don't get intellisense until after you hit "=" and then you get it.&nbsp; 

I've updated the bug with the code for this guy, so hopefully this'll get him going.&nbsp; As long as the message pump doesn't take too long to get it from ProductStudio out to the web site!

**EDIT:** Several of you have pointed out that the text is centered but not middle'ed. So that may not be possible.