---
layout: post
status: publish
published: true
title: Simple File Handler for ASP.NET 2.0
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1856
wordpress_url: http://petelepage.com/blog/2005/12/simple-file-handler-for-asp-net-2-0/
date: '2005-12-01 09:04:00 -0500'
date_gmt: '2005-12-01 16:04:00 -0500'
categories:
- General
tags:
- MSDNBlogPost
comments:
- id: 4318
  author: rtpHarry
  author_email: rtpharry@hotmail.com
  author_url: http://Website
  date: '2011-07-22 00:25:07 -0400'
  date_gmt: '2011-07-22 07:25:07 -0400'
  content: Pete, I have been sending people to this page in forum replies for a long
    time now as its a great example of a simple httphandler. It seems that since you
    moved domains the code on this page has turned into an unreadable blob :) Is there
    anything you can do to return it to its former glory?
- id: 4343
  author: Pete
  author_email: pete.lepage@pobox.com
  author_url: http://petelepage.com
  date: '2011-07-22 07:44:33 -0400'
  date_gmt: '2011-07-22 14:44:33 -0400'
  content: |-
    <blockquote>
    <a href="#comment-4318" rel="nofollow">
    <strong><em>rtpHarry:</em></strong>
    </a>
     <p>Pete, I have been sending people to this page in forum replies for a long time now as its a great example of a simple httphandler. It seems that since you moved domains the code on this page has turned into an unreadable blob <img src="http://petelepage.com/blog/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley"/> Is there anything you can do to return it to its former glory?</p></blockquote>

    You're right - ouch.  I just tried to look at the mark it, and it's pretty ugly.  I'll try to get it fixed later today!
- id: 4805
  author: df
  author_email: dfg@fg.fgh
  author_url: ''
  date: '2012-01-04 23:18:38 -0500'
  date_gmt: '2012-01-05 07:18:38 -0500'
  content: ete, I have been sending people to this page in forum replies for a long
    time now as its a great example of a simple httphandler. It seems that since you
    moved domains the code on this page has turned into an unreadable blob :) Is there
    anything you can do to return it to its former glory?
- id: 4806
  author: df
  author_email: dfg@fg.fgh
  author_url: ''
  date: '2012-01-04 23:19:55 -0500'
  date_gmt: '2012-01-05 07:19:55 -0500'
  content: "<i>\r\n<a href=\"#comment-4805\" rel=\"nofollow\">\r\n<strong><em>df:</em></strong>\r\n</a>\r\n
    ete, I have been sending people to this page in forum replies for a long time
    now as its a great example of a simple httphandler. It seems that since you moved
    domains the code on this page has turned into an unreadable blob   Is there anything
    you can do to return it to its former glory?\r\n</i>"
- id: 4817
  author: fix_moeller
  author_email: julian.dinges@gmail.com
  author_url: ''
  date: '2012-03-01 01:16:24 -0500'
  date_gmt: '2012-03-01 09:16:24 -0500'
  content: "I've taken the liberty to reformat the code. :)\r\n\r\nhttp://pastebin.com/Ej9ZUm3b"
---
<p>Over the last couple of weeks, I've been looking at ways of distributing files to users in a somewhat secure method.  I want to be able to say user X can download file Y, but user Z cannot.  I wanted to do to this in a somewhat roles based method, and be able to track things like number of downloads, who is downloading what, etc.</p>
<p>Having never written an HTTP Handler before, I started playing, and found that what I wanted to do was really easy!  So, I thought I'd share my code with you all.</p>
<p>To get this to work correctly in IIS, you'll need to make sure that IIS handles the .exe extension, and any other extension that you want to serve out to the user.  My site is using Forms Auth to protect most things, and then this allows me to protect specific files.  Thus, a user can request <a href="http://myserver/files/filename.exe">http://myserver/files/filename.exe</a> and if they have permissions, it works, otherwise, it throws an error and they're denied.</p>
<h2>Web.Config</h2>
<p>[xml]<br />
&lt;configuration&gt;<br />
  &lt;system.web&gt;<br />
    &lt;httpHandlers&gt;<br />
      &lt;add verb=&quot;*&quot; path=&quot;*.*&quot; type=&quot;FileHandler&quot; /&gt;<br />
      &lt;add verb=&quot;*&quot; path=&quot;*&quot; type=&quot;FileHandler&quot; /&gt;<br />
    &lt;/httpHandlers&gt;<br />
  &lt;/system.web&gt;<br />
&lt;/configuration&gt;<br />
[/xml]</p>
<h2>FileHandler.cs</h2>
<p>[csharp title="FileHandler.cs"]<br />
using System;<br />
using System.Data;<br />
using System.Data.SqlClient;<br />
using System.Configuration;<br />
using System.Web;<br />
using System.Web.Security;<br />
using System.Web.UI;<br />
using System.Web.UI.WebControls;<br />
using System.Web.UI.WebControls.WebParts;<br />
using System.Web.UI.HtmlControls;</p>
<p>public class FileHandler : IHttpHandler {<br />
  public bool IsReusable {<br />
    get {<br />
      return true;<br />
    }<br />
  } </p>
<p>  public void ProcessRequest(HttpContext context) {<br />
    try {<br />
      // We need to get the file name that the user is requesting.<br />
      string requestedFile = context.Request.Url.Segments[context.Request.Url.Segments.Length - 1];<br />
      // If the user has permission, send the file, else throw an exception<br />
      if (HasPermission(context, requestedFile)) {<br />
        // Set the content type<br />
        context.Response.ContentType = ContentType(requestedFile);<br />
        // Get the file path<br />
        string file = ConfigurationManager.AppSettings[&quot;DownloadFilePath&quot;] + requestedFile;<br />
        // Send the file using transmit, this way it’s not read into memory. We can send up to<br />
        // a 2 gig file.<br />
        context.Response.TransmitFile(file);<br />
        // Increment the file counter<br />
        IncrementFileCounter(requestedFile, context.User.Identity.Name);<br />
      } else {<br />
        throw new UnauthorizedAccessException(“User does not have permission to access this file.”);<br />
      }<br />
    } catch (Exception ex) {<br />
      System.Diagnostics.Debug.WriteLine(ex.ToString());<br />
      throw;<br />
    }<br />
  } </p>
<p>  private bool HasPermission(HttpContext context, string Filename) {<br />
    try {<br />
      if (!context.User.Identity.IsAuthenticated) {<br />
        return false;<br />
      }<br />
      // Determine if the user has permissions here<br />
      if (true == true) {<br />
        return true;<br />
      } else {<br />
        return false;<br />
      }<br />
    } catch (Exception ex) {<br />
      return false;<br />
    }<br />
  } </p>
<p>  private string ContentType(string Filename) {<br />
    if (Filename.IndexOf(“.”) == -1) {<br />
      return“text/plain”;<br />
    } else {<br />
      string extension = Filename.Substring(Filename.IndexOf(“.”));<br />
      if (extension == “.exe”) {<br />
        return “application/octet-stream”;<br />
      } else if (extension == “.txt”) {<br />
        return “text/plain”;<br />
      } else {<br />
        throw new NotSupportedException(“Unknown extension”);<br />
      }<br />
    }<br />
  }</p>
<p>  private void IncrementFileCounter(string Filename, string Username) {<br />
    try {<br />
      // Increment the file counter here<br />
    } catch (Exception ex) {<br />
      System.Diagnostics.Debug.WriteLine(ex);<br />
      throw;<br />
    }<br />
  }<br />
}<br />
[/csharp]</p>
