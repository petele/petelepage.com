---
layout: post
status: publish
published: true
title: Setting X-UA-Compatible with ASP.NET Pages
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1287
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:9551011
date: '2009-04-15 11:47:00 -0400'
date_gmt: '2009-04-15 18:47:00 -0400'
categories:
- Web Design &amp; Development
tags:
- MSDNBlogPost
comments: []
---
<p>I got an email today asking about the best way to go about adding the X-UA-Compatible tags on ASP.NET pages where you’ve got a master page, and may want to over ride the X-UA-Compatible tag in some content pages, but not others.</p>
<p>After playing around with it in Visual Studio for a few minutes, I pulled together the following scenarios:</p>
<h2>Access To The Server</h2>
<p>The optimal way to do this, if you have server level access, is to add the IE=EmulateIE7 as an HTTP Response Header from the server. Then, any pages served from that server will be rendered in IE7 mode. If Internet Explorer finds the X-UA-Compatible tag in both the HTTP Response Header, and as a META tag, the META tag will win out. Thus, if you've added the IE=EmulateIE7 to the server, you can over ride it by using the following code snippet:</p>
<p><span style="font-family: Consolas;">protected void Page_Load(object sender, EventArgs e)<br />
{<br />
HtmlMeta xuac = new HtmlMeta();<br />
xuac.HttpEquiv = "X-UA-Compatible";<br />
xuac.Content = "IE=EmulateIE8";<br />
Header.Controls.AddAt(0, xuac);<br />
}</span></p>
<p>One quick note about the Page_Load method, you'll note I use the Header.Controls.AddAt(0, xuac) method. The X-UA-Compatible tag needs to occur BEFORE any code on the page is run, if it doesn't IE will ignore the X-UA-Compatible tag; so it's best to makes sure this is the first tag on the page.</p>
<h2>No Server Access</h2>
<p>If you don't have access to the server, and you want to put the X-UA-Compatible tag in the ASP.NET MASTER page, you could do something like this:</p>
<p>In the master page, I'd create a Content Place Holder:</p>
<p><span style="font-family: Consolas;">&lt;asp:ContentPlaceHolder ID="cphMeta" runat="server"&gt;<br />
&lt;meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" /&gt;<br />
&lt;/asp:ContentPlaceHolder&gt;</span></p>
<p>Then, in the individual pages, where you want to override, and go to IE8 standards, you'd insert</p>
<p><span style="font-family: Consolas;">&lt;asp:Content ID="Content1" ContentPlaceHolderID="cphMeta" runat="server"&gt;<br />
&lt;meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" /&gt;<br />
&lt;/asp:Content&gt;</span></p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=9551011" alt="" width="1" height="1" /></p>
