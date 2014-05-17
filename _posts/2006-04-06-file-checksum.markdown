---
layout: post
status: publish
published: true
title: File Checksum
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1820
wordpress_url: http://petelepage.com/blog/2006/04/file-checksum/
date: '2006-04-06 12:37:00 -0400'
date_gmt: '2006-04-06 19:37:00 -0400'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>I brought a neat idea to my lead earlier this week, and lo and behold, he started working on it!&nbsp; He got the hard part done one morning when he was in before everyone else, but now I get to implement this idea.</p>
<p>With the new designer&nbsp;surface, I wanted to create a test bed that used a known set of HTML and ASPX files and checked their design time rendering.&nbsp; The idea being that we'd have a set of "golden" images, and would run our test bed against these golden images.&nbsp; If anything changed, we'd fail that test and could look at the image to find out what had changed in the rendering and figure out if its a bug or an actual planned change.&nbsp; I've got a collection of about 600+ web sites, and I wanted this test to be pretty dynamic, so adding new tests took next to no work, or pulling them out was next to no work.&nbsp; </p>
<p>John got the first part done this week, the designer surface image capture, and he also created an image comparer.&nbsp; It looks at the two bitmaps, and compares them pixel by pixel.&nbsp; If they're different, it creates a new file with the different pixels highlighed in lime green.&nbsp; As I was working on it today, I decided that I don't want to compare every pixel, as more often than not, the pixels will be the same, so instead, I wanted to find a way to create a checksum of the file, and only compare if the check sums are different. I did a bit of searching online, and came up with the following code.</p>
<p>
<pre>    Function GetChecksum(ByVal file As String) As Byte()        Dim md5 As New System.Security.Cryptography.MD5CryptoServiceProvider()        Using fStream As New System.IO.FileStream(file, IO.FileMode.Open)            Dim bytes() As Byte = md5.ComputeHash(fStream)            fStream.Close()            Return bytes        End Using    End Function    Function ToHexString(ByVal bytes() As Byte) As String        Dim hexStr As New System.Text.StringBuilder()        Dim i As Integer        For i = 0 To bytes.Length - 1            hexStr.Append(Hex(bytes(i)))        Next i        Return hexStr.ToString()    End Function</pre></p>
<p>Super Sweet! You feed in the file and it feeds out an array of bytes.&nbsp; For ease of comparison and human reading, I'm having the tool convert the bytes to hex so that I've got something that I can see and compare.</p>
<p>This thing saved me about 8 minutes for only 6 sites.&nbsp; I went from comparing 6 sites in about 10 minutes to 6 sites in less than 2 minutes!&nbsp;</p>
