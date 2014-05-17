---
layout: post
status: publish
published: true
title: Targeting IE only with CSS
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1889
wordpress_url: http://petelepage.com/blog/2005/07/targeting-ie-only-with-css/
date: '2005-07-27 05:17:00 -0400'
date_gmt: '2005-07-27 12:17:00 -0400'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>I got a question from Jeff yesterday asking me about a CSS tag that he'd never seen before, and in fact, neither had I.&nbsp; </p>
<p>What he saw was this:<br />
<blockquote>*html someclassname<br />{<br />&nbsp;&nbsp;&nbsp;properties in here<br />}<br />*html Anotherclassname<br />{<br />&nbsp;&nbsp;&nbsp;properties in here<br />}</p></blockquote></p>
<p>I started to do some investigation and see what I could find out.&nbsp; I checked one of my favourite CSS Books (Web Standards Solutions: The Markup and Style Handbook), nothing, I tried to search on <a href="http://search.msn.com">http://search.msn.com</a> and <a href="http://www.google.com">http://www.google.com</a> and nothing.&nbsp; (It is kind of hard to search for *html when you actually want * not the wildcard!)</p>
<p>I emailed Dan Cederholm (the author of the book above) and he graciously replied with the answer this morning.&nbsp; It's a way of targeting CSS to only Windows IE.&nbsp; IE believes that there is a wrapper element around the HTML block, and thus applies these rules to the block.&nbsp; Great if you need to fix a CSS rendering issue in Windows IE.</p>
<p>I've also posted some new Night photos at <a href="http://www.bigbackpack.ca/ngallery/albums/Night+and+Low+Light+(July+21%2c+2005).aspx">http://www.bigbackpack.ca/ngallery/albums/Night+and+Low+Light+(July+21%2c+2005).aspx</a>&nbsp;</p>
