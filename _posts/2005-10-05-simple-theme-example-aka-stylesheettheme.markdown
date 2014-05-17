---
layout: post
status: publish
published: true
title: Simple Theme Example (aka StyleSheetTheme)
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1872
wordpress_url: http://petelepage.com/blog/2005/10/simple-theme-example-aka-stylesheettheme/
date: '2005-10-05 07:25:00 -0400'
date_gmt: '2005-10-05 14:25:00 -0400'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>One of the little projects that I've been working on lately is theme's and trying to start building a theme library for controls.&nbsp; So, to start that, I've created the following theme that you can use as a starting point, and from here, can start building your own themes for your websites.&nbsp; Eventually, I'd like to build a community driven theme library, but thats a bit of a ways off yet.</p>
<p>So lets start.&nbsp; First, in our web application, we need to add a theme folder.&nbsp; You can do that by adding an "ASP.NET Folder", then Theme to your application.</p>
<p>Let's create a CSS style sheet first:</p>
<pre>body {    background-color: Blue;    color: Silver;}</pre>
<p>Notice, the css is pretty simple here, it'll just be imported by the stylesheet theme into the designer and in the run time.</p>
<p>Now, how about the skin file:</p>
<pre>&lt;asp:HyperLink runat="server" Font-Italic="True" Font-Names="Tahoma" Font-Underline="True" ForeColor="White" Text="DefaultLink" /&gt;&lt;asp:HyperLink SkinID="smallLink" Font-Size="XX-Small" runat="server" Font-Italic="True" Font-Names="Tahoma" Font-Underline="True" ForeColor="White" Text="SmallLink" /&gt;</pre>
<p>I've included two of the same control types.&nbsp; One has a SkinID attribute, and the other doesn't.&nbsp; If you don't include a SkinID in the control on the aspx page, it'll use the default one (without a SkinID), but you can also customize the control by using a SkinID.</p>
<p>And finally, the default.aspx:</p>
<pre>&lt;%@ Page StylesheetTheme="sampletheme" Language="C#"  %&gt;&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;&lt;head runat="server"&gt;    &lt;title&gt;Untitled Page&lt;/title&gt;&lt;/head&gt;&lt;body&gt;    &lt;form id="form1" runat="server"&gt;        &lt;div&gt;            &lt;asp:HyperLink ID="HyperLink1" runat="server" /&gt;            &lt;br /&gt;            &lt;br /&gt;            &lt;asp:HyperLink ID="HyperLink2" runat="server" SkinID="smallLink" /&gt;        &lt;/div&gt;    &lt;/form&gt;&lt;/body&gt;&lt;/html&gt;</pre>
<p>All I did was add a line in the page directive that says "StyleSheetTheme="SampleTheme"" and boom, everything works.</p>
