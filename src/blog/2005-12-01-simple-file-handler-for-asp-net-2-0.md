---
layout: post
title: Simple File Handler for ASP.NET 2.0
date: '2005-12-01 09:04:00 -0500'
categories: blog
tags:
- MSDNBlogPost
comments:
- id: 4318
  date: '2011-07-22 00:25:07 -0400'
  content: Pete, I have been sending people to this page in forum replies for a long
    time now as its a great example of a simple httphandler. It seems that since you
    moved domains the code on this page has turned into an unreadable blob :) Is there
    anything you can do to return it to its former glory?
- id: 4343
  date: '2011-07-22 07:44:33 -0400'
  content: |-
    <blockquote>
    <a href="#comment-4318" rel="nofollow">
    <strong><em>rtpHarry:</em></strong>
    </a>
     <p>Pete, I have been sending people to this page in forum replies for a long time now as its a great example of a simple httphandler. It seems that since you moved domains the code on this page has turned into an unreadable blob <img src="http://petelepage.com/blog/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley"/> Is there anything you can do to return it to its former glory?</p></blockquote>

    You're right - ouch.  I just tried to look at the mark it, and it's pretty ugly.  I'll try to get it fixed later today!
- id: 4805
  date: '2012-01-04 23:18:38 -0500'
  content: ete, I have been sending people to this page in forum replies for a long
    time now as its a great example of a simple httphandler. It seems that since you
    moved domains the code on this page has turned into an unreadable blob :) Is there
    anything you can do to return it to its former glory?
- id: 4806
  date: '2012-01-04 23:19:55 -0500'
  content: "<i>\r\n<a href=\"#comment-4805\" rel=\"nofollow\">\r\n<strong><em>df:</em></strong>\r\n</a>\r\n
    ete, I have been sending people to this page in forum replies for a long time
    now as its a great example of a simple httphandler. It seems that since you moved
    domains the code on this page has turned into an unreadable blob   Is there anything
    you can do to return it to its former glory?\r\n</i>"
- id: 4817
  date: '2012-03-01 01:16:24 -0500'
  content: "I've taken the liberty to reformat the code. :)\r\n\r\nhttp://pastebin.com/Ej9ZUm3b"
---

Over the last couple of weeks, I've been looking at ways of distributing files to users in a somewhat secure method.  I want to be able to say user X can download file Y, but user Z cannot.  I wanted to do to this in a somewhat roles based method, and be able to track things like number of downloads, who is downloading what, etc.

Having never written an HTTP Handler before, I started playing, and found that what I wanted to do was really easy!  So, I thought I'd share my code with you all.

To get this to work correctly in IIS, you'll need to make sure that IIS handles the .exe extension, and any other extension that you want to serve out to the user.  My site is using Forms Auth to protect most things, and then this allows me to protect specific files.  Thus, a user can request [http://myserver/files/filename.exe](http://myserver/files/filename.exe) and if they have permissions, it works, otherwise, it throws an error and they're denied.

## Web.Config

{% highlight html %}

&lt;configuration&gt;

  &lt;system.web&gt;

    &lt;httpHandlers&gt;

      &lt;add verb=&quot;*&quot; path=&quot;*.*&quot; type=&quot;FileHandler&quot; /&gt;

      &lt;add verb=&quot;*&quot; path=&quot;*&quot; type=&quot;FileHandler&quot; /&gt;

    &lt;/httpHandlers&gt;

  &lt;/system.web&gt;

&lt;/configuration&gt;

{% endhighlight %}

## FileHandler.cs

[csharp title="FileHandler.cs"]

using System;

using System.Data;

using System.Data.SqlClient;

using System.Configuration;

using System.Web;

using System.Web.Security;

using System.Web.UI;

using System.Web.UI.WebControls;

using System.Web.UI.WebControls.WebParts;

using System.Web.UI.HtmlControls;

public class FileHandler : IHttpHandler {

  public bool IsReusable {

    get {

      return true;

    }

  } 

  public void ProcessRequest(HttpContext context) {

    try {

      // We need to get the file name that the user is requesting.

      string requestedFile = context.Request.Url.Segments[context.Request.Url.Segments.Length - 1];

      // If the user has permission, send the file, else throw an exception

      if (HasPermission(context, requestedFile)) {

        // Set the content type

        context.Response.ContentType = ContentType(requestedFile);

        // Get the file path

        string file = ConfigurationManager.AppSettings[&quot;DownloadFilePath&quot;] + requestedFile;

        // Send the file using transmit, this way it’s not read into memory. We can send up to

        // a 2 gig file.

        context.Response.TransmitFile(file);

        // Increment the file counter

        IncrementFileCounter(requestedFile, context.User.Identity.Name);

      } else {

        throw new UnauthorizedAccessException(“User does not have permission to access this file.”);

      }

    } catch (Exception ex) {

      System.Diagnostics.Debug.WriteLine(ex.ToString());

      throw;

    }

  } 

  private bool HasPermission(HttpContext context, string Filename) {

    try {

      if (!context.User.Identity.IsAuthenticated) {

        return false;

      }

      // Determine if the user has permissions here

      if (true == true) {

        return true;

      } else {

        return false;

      }

    } catch (Exception ex) {

      return false;

    }

  } 

  private string ContentType(string Filename) {

    if (Filename.IndexOf(“.”) == -1) {

      return“text/plain”;

    } else {

      string extension = Filename.Substring(Filename.IndexOf(“.”));

      if (extension == “.exe”) {

        return “application/octet-stream”;

      } else if (extension == “.txt”) {

        return “text/plain”;

      } else {

        throw new NotSupportedException(“Unknown extension”);

      }

    }

  }

  private void IncrementFileCounter(string Filename, string Username) {

    try {

      // Increment the file counter here

    } catch (Exception ex) {

      System.Diagnostics.Debug.WriteLine(ex);

      throw;

    }

  }

}

[/csharp]