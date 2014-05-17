---
layout: post
status: publish
published: true
title: Generating OPML's with the RSS Platform
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1452
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:1691651
date: '2007-02-16 18:04:22 -0500'
date_gmt: '2007-02-17 01:04:22 -0500'
categories:
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<p>Just before I headed up to Web Directions North, I wrote a little chunk of code to help me do a system back up.  Enough people at work have been losing data on their hard disks, so I decided I wasn't going to have that happen to me.  I picked up a NAS storage device, 2 500gig hard drives, and got it all set up at home.  It works quite nicely.  I set up SyncToy to back up all the data that I find important, and run daily or weekly.</p>
<p>But one thing was not getting back up that I was a bit worried about.  My RSS feed list.  I couldn't find where the RSS platform stores the OPML list, or even if it does, so I figured, since it's an open platform, I'd just write a method that would create the OPML list for me!  Once I got the initial work done, it was really easy.</p>
<p>So, I figured I'd share the code.  This code will return a string, that is the OPML list of all the feeds that you've subscribed to using the RSS Platform.  Sure you can just go into IE, and choose File/Export, but that's a manual process, I wanted something automatic.</p>
<pre>using System;
using System.IO;
using System.Collections.Generic;
using System.Text;
using Microsoft.Feeds.Interop;
using System.Collections.Specialized;

namespace BackupHelper
{
    class OPMLBuilder
    {
        public string Result
        {
            get
            {
                return sbResult.ToString();
            }
        }

        StringBuilder sbResult;

        public OPMLBuilder()
        {
            sbResult = new StringBuilder();
            sbResult.Append("\r\n \r\n  \r\n \r\n \r\n");
            FeedsManager mgr = new FeedsManagerClass();
            IFeedFolder root = (IFeedFolder)mgr.RootFolder;
            BuildFeeds(root, 0);
            sbResult.Remove(sbResult.Length - 13, 13);
            sbResult.Append(" \r\n\r\n");

        }
        public bool WriteOPML(string filename)
        {
            try
            {
                //Pass the filepath and filename to the StreamWriter Constructor
                StreamWriter sw = new StreamWriter(filename);

                //Write a line of text
                sw.WriteLine(sbResult.ToString());

                //Close the file
                sw.Close();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        private void BuildFeeds(IFeedFolder parent, int n)
        {
            string spacing = new string(' ', n+1);
            if (n &gt; 0)
            {
                sbResult.Append(spacing + "\r\n");
            }

            foreach (IFeed feed in (IFeedsEnum)parent.Feeds)
            {
                sbResult.Append(spacing + " \r\n");
            }

            foreach (IFeedFolder folder in (IFeedsEnum)parent.Subfolders)
                BuildFeeds(folder, n + 1);

            sbResult.Append(spacing + "" + "\r\n");
        }
    }
}</pre>
<p>Hope some of you find that useful!</p>
<p>Sorry it's taken so long to get it up, after getting back from Web Directions North, I seem to have gotten hit with some kind of cold/flu or something that has knocked my on my butt.  I've been at home all week.  I've done about 30 emails all week, and usually I'm about 50-80 a day!  If that gives you any idea of how I've been feeling.  Today is the first day I've felt somewhat human again.</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=1691651" alt="" width="1" height="1" /></p>
