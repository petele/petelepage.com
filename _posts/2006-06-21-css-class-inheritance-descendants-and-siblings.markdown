---
layout: post
status: publish
published: true
title: CSS Class Inheritance (Descendants and Siblings)
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1666
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:642088
date: '2006-06-21 18:17:00 -0400'
date_gmt: '2006-06-22 01:17:00 -0400'
categories:
- Web Design &amp; Development
tags:
- MSDNBlogPost
comments: []
---
<p>I got some great feedback on my last big CSS post, so I'm going to continue working through some neat and fun examples of CSS. I'm going to continue along the same path of applying CSS to pages as I think this is a really important area. There are so many ways to apply CSS, and so many funky ways to get things done. I've attached the file I wrote this up in as an attachement to this post, so if it doesn't appear properly in your browser, it may be because the blog software is eating my CSS.  In that case, just view the attached doc.</p>
<p>Using the same theory that I talked about last time, and derived CSS classes are really cool. For example, <span>this span looks pretty normal, except for this <strong>bold chunk</strong></span>. Notice the bold is bold and blue. To get that, I used a descendant selector. In my style sheet, I put: <span class="styleSample">span b { color: blue; }</span>. That applies the style to bold block that is within a span. Not a bad little trick if you want to do something specific on some HTML that will be within another block. <span>Obviously, you can get much deeper, such as in this <em><strong>case.</strong></em></span></p>
<p>Descendant selectors are cool, but might not always do what you want. What if you want to only apply some CSS style if an element is a child (direct descendant) of another element. Well, you can do that too! Instead of just separating the two with a space, you simply use the &gt; symbol. For example, above, I created a new item that will only affect em's that are direct descendants of spans. <span>That way, you get something <em>like this.</em></span>. The code I used for this was <span class="styleSample">span &gt; em</span> Sadly, this isn't something that is supported in IE6, but is properly supported in IE7.</p>
<p>But what about just hitting siblings? This is another one that IE6 doesn't properly support, but is supported in IE7. Say for example, you want to hit on tag that immediatly follows another. For example, this <strong>bold</strong><em> followed by italic</em>, should have the a chunk of the text in teal. If you use the + sign between CSS style attributes, you can express that the tag immediately following should also get the attributes that you specify. So above, I've got <span class="styleSample">b+i { color: teal; }</span></p>
<p><b>Want to see the sample in action: </b> <a href="/samples/inheritance.aspx">Click Here</a></p>
