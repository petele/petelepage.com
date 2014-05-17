---
layout: post
status: publish
published: true
title: Making Definition Lists Look Nice!
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1879
wordpress_url: http://petelepage.com/blog/2005/09/making-definition-lists-look-nice/
date: '2005-09-02 06:47:00 -0400'
date_gmt: '2005-09-02 13:47:00 -0400'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>I've been out sick the last few days and haven't gotten to do much at work or at home, and being stuck at home can get pretty boring, I can only surf the internet for so long before I get pretty bored. Even watching all the Katrina stuff I was still pretty bored, and my heart does go out to them.</p>
<p>Seeing that I'm not going to get any automation done this week, I've started working on building the CTP drop that we release to a small group of people on a month basis. It's a bit of a long slow process, so I thought I'd update my blog while I was waiting.</p>
<p><strong>Definition Lists (&lt;dt&gt; &amp; &lt;dd&gt;)</strong></p>
<dl>
<dt>Definition lists typically look pretty boring
<dd>They don't really show any kind of nice definition list, just a simple subject, and then the definition below it. Doesn't do much to spice up your website. </dd>
</dt>
</dl>
<p>So, lets spice it up!</p>
<dl>
<dt style="FONT-WEIGHT: bold">Lets make the term bold
<dd>Okay, thats a good start. We now now that we've got our term to stand out a bit more. But our description is still pretty boring </dd>
</dt>
</dl>
<p>Thats a good start, but we're not done yet.</p>
<dl>
<dt style="FONT-WEIGHT: bold">Bolded Term
<dd style="COLOR: #666666">Okay, so now we're making the definition a little bit different, a slightly lighter colo[u]r. Looks a little nicer, but I don't think I quite feel done with this yet. </dd>
</dt>
</dl>
<p>Lets add an icon to the front of the term and the front of the description</p>
<dl>
<dt style="PADDING-LEFT: 20px; FONT-WEIGHT: bold; BACKGROUND: url(http://blogs.msdn.com/Themes/default/images/Star1.gif) no-repeat 0px 2px; FONT-VARIANT: small-caps">Bolded Term
<dd style="PADDING-LEFT: 20px; BACKGROUND: url(http://blogs.msdn.com/Themes/default/images/Star1.gif) no-repeat 0px 2px; COLOR: #666666">Now we've tied it all together. We've got colo[u]r, bullets, and everything. Okay, I know the bullets aren't pretty, but I just wanted to grab something that was already up on the msdn site, and not have to upload my own thing. </dd>
</dt>
</dl>
<p>So what does this all look like in CSS?</p>
<p>dt {<br />&nbsp;&nbsp;padding-left: 20px;<br />&nbsp;&nbsp;background: url(http://blogs.msdn.com/Themes/default/images/Star1.gif) no-repeat 0 0px;<br />&nbsp;&nbsp;font-variant: small-caps;<br />&nbsp;&nbsp;font-weight: bold;<br />}<br />dd {<br />&nbsp;&nbsp;padding-left: 20px; &nbsp;&nbsp;color: #666666;<br />&nbsp;&nbsp;background: url(http://blogs.msdn.com/Themes/default/images/Star1.gif) no repeat 0 0px;<br />}</p>
<p>Sample at <a href="http://www.nocommonground.com/blogSamples/deflist.htm">http://www.nocommonground.com/blogSamples/deflist.htm</a></p>
