---
layout: post
title: Making Definition Lists Look Nice!
date: '2005-09-02 06:47:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

I've been out sick the last few days and haven't gotten to do much at work or at home, and being stuck at home can get pretty boring, I can only surf the internet for so long before I get pretty bored. Even watching all the Katrina stuff I was still pretty bored, and my heart does go out to them.

Seeing that I'm not going to get any automation done this week, I've started working on building the CTP drop that we release to a small group of people on a month basis. It's a bit of a long slow process, so I thought I'd update my blog while I was waiting.

**Definition Lists (&lt;dt&gt; &amp; &lt;dd&gt;)**

<dl>
<dt>Definition lists typically look pretty boring
<dd>They don't really show any kind of nice definition list, just a simple subject, and then the definition below it. Doesn't do much to spice up your website. </dd>
</dt>
</dl>

So, lets spice it up!

<dl>
<dt style="FONT-WEIGHT: bold">Lets make the term bold
<dd>Okay, thats a good start. We now now that we've got our term to stand out a bit more. But our description is still pretty boring </dd>
</dt>
</dl>

Thats a good start, but we're not done yet.

<dl>
<dt style="FONT-WEIGHT: bold">Bolded Term
<dd style="COLOR: #666666">Okay, so now we're making the definition a little bit different, a slightly lighter colo[u]r. Looks a little nicer, but I don't think I quite feel done with this yet. </dd>
</dt>
</dl>

Lets add an icon to the front of the term and the front of the description

<dl>
<dt style="PADDING-LEFT: 20px; FONT-WEIGHT: bold; BACKGROUND: url(http://blogs.msdn.com/Themes/default/images/Star1.gif) no-repeat 0px 2px; FONT-VARIANT: small-caps">Bolded Term
<dd style="PADDING-LEFT: 20px; BACKGROUND: url(http://blogs.msdn.com/Themes/default/images/Star1.gif) no-repeat 0px 2px; COLOR: #666666">Now we've tied it all together. We've got colo[u]r, bullets, and everything. Okay, I know the bullets aren't pretty, but I just wanted to grab something that was already up on the msdn site, and not have to upload my own thing. </dd>
</dt>
</dl>

So what does this all look like in CSS?

dt {
&nbsp;&nbsp;padding-left: 20px;
&nbsp;&nbsp;background: url(http://blogs.msdn.com/Themes/default/images/Star1.gif) no-repeat 0 0px;
&nbsp;&nbsp;font-variant: small-caps;
&nbsp;&nbsp;font-weight: bold;
}
dd {
&nbsp;&nbsp;padding-left: 20px; &nbsp;&nbsp;color: #666666;
&nbsp;&nbsp;background: url(http://blogs.msdn.com/Themes/default/images/Star1.gif) no repeat 0 0px;
}

Sample at [http://www.nocommonground.com/blogSamples/deflist.htm](http://www.nocommonground.com/blogSamples/deflist.htm)