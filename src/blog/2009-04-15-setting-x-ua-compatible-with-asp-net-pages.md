---
layout: post
title: Setting X-UA-Compatible with ASP.NET Pages
date: '2009-04-15 11:47:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I got an email today asking about the best way to go about adding the X-UA-Compatible tags on ASP.NET pages where you’ve got a master page, and may want to over ride the X-UA-Compatible tag in some content pages, but not others.

After playing around with it in Visual Studio for a few minutes, I pulled together the following scenarios:

## Access To The Server

The optimal way to do this, if you have server level access, is to add the IE=EmulateIE7 as an HTTP Response Header from the server. Then, any pages served from that server will be rendered in IE7 mode. If Internet Explorer finds the X-UA-Compatible tag in both the HTTP Response Header, and as a META tag, the META tag will win out. Thus, if you've added the IE=EmulateIE7 to the server, you can over ride it by using the following code snippet:

<span style="font-family: Consolas;">protected void Page_Load(object sender, EventArgs e)

{

HtmlMeta xuac = new HtmlMeta();

xuac.HttpEquiv = "X-UA-Compatible";

xuac.Content = "IE=EmulateIE8";

Header.Controls.AddAt(0, xuac);

}</span>

One quick note about the Page_Load method, you'll note I use the Header.Controls.AddAt(0, xuac) method. The X-UA-Compatible tag needs to occur BEFORE any code on the page is run, if it doesn't IE will ignore the X-UA-Compatible tag; so it's best to makes sure this is the first tag on the page.

## No Server Access

If you don't have access to the server, and you want to put the X-UA-Compatible tag in the ASP.NET MASTER page, you could do something like this:

In the master page, I'd create a Content Place Holder:

<span style="font-family: Consolas;">&lt;asp:ContentPlaceHolder ID="cphMeta" runat="server"&gt;

&lt;meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" /&gt;

&lt;/asp:ContentPlaceHolder&gt;</span>

Then, in the individual pages, where you want to override, and go to IE8 standards, you'd insert

<span style="font-family: Consolas;">&lt;asp:Content ID="Content1" ContentPlaceHolderID="cphMeta" runat="server"&gt;

&lt;meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" /&gt;

&lt;/asp:Content&gt;</span>

![](http://blogs.msdn.com/aggbug.aspx?PostID=9551011)