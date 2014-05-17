---
layout: post
status: publish
published: true
title: Styling Links - Making the Mundane Somewhat More Interesting
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1865
wordpress_url: http://petelepage.com/blog/2005/11/styling-links-making-the-mundane-somewhat-more-interesting/
date: '2005-11-04 03:28:00 -0500'
date_gmt: '2005-11-04 10:28:00 -0500'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>It's been a while since I've done a CSS style post, so I figure its about time, and today I want to touch on something pretty simple, the &lt;a&gt; anchor tag.&nbsp; Most anchors are pretty boring, some blue text that is simply underlined.&nbsp; Some people go a bit beyond and make it change colours when you hover and such, and I'll look at that, but I want to take this a step further.</p>
<p>The Boring Normal Anchor
<ul>
<li><a href="http://www.microsoft.com/">www.microsoft.com</a></li>
</ul>
<p>Lets add a tool tip to our hyperlink</p>
<ul>
<li><a title="This link will take you to the Microsoft web site" href="http://www.microsoft.com/">www.microsoft.com</a></li>
<li>To do this, we simply add a title attribute to the hyperlink tag</li>
<li>&lt;<span style="COLOR: maroon">a</span> <span style="COLOR: red">href</span>=<span style="COLOR: blue">"http://www.microsoft.com"</span> <span style="COLOR: red">title</span>=<span style="COLOR: blue">"This link will take you to the Microsoft web site"</span>&gt;www.microsoft.com&lt;<span style="COLOR: maroon">/a</span>&gt; </li>
</ul>
<p>Lets get rid of the underline, and make the color different</p>
<ul>
<li><a style="COLOR: aquamarine; TEXT-DECORATION: none" href="http://www.microsoft.com/">www.microsoft.com</a></li>
<li>To do this, we simply set the text decoration to none, and add a color to the tag</li>
<li>&lt;<span style="COLOR: maroon">a</span> <span style="COLOR: red">href</span>=<span style="COLOR: blue">"http://www.microsoft.com"</span>&gt;www.microsoft.com&lt;<span style="COLOR: maroon">/a</span>&gt;</li>
<li>
<pre>    a    {        text-decoration: none;        color: aquamarine;    }        </pre>
</li>
</ul>
<p>Instead of an underline, lets have a dashed line, or something else kind of fun</p>
<ul>
<li><a style="BORDER-BOTTOM: red 1px dashed; TEXT-DECORATION: none" href="http://www.microsoft.com/">www.microsoft.com</a></li>
<li>To do this, we turned off the text-decoration, and added a border on the bottom that we set to be 1px dashed red, giving us the red dashed line</li>
<li>&lt;<span style="COLOR: maroon">a</span> <span style="COLOR: red">href</span>=<span style="COLOR: blue">"http://www.microsoft.com"</span>&gt;www.microsoft.com&lt;<span style="COLOR: maroon">/a</span>&gt; </li>
<li>
<pre>    a    {        text-decoration: none;        border-bottom: 1px dashed red;    }        </pre>
</li>
</ul>
<p>Lets add some kind of image to our link, indicating it's an XML item.&nbsp; You can alternatively use some other image indicating this is a link</p>
<ul>
<li><a style="PADDING-RIGHT: 20px; BACKGROUND: url(http://www.nocommonground.com/blogSamples/link.jpg) no-repeat right 50%" href="http://www.microsoft.com/">www.microsoft.com</a></li>
<li>To do this, we add a background to the image, and add some padding on the right&nbsp;</li>
<li>&lt;<span style="COLOR: maroon">a</span> <span style="COLOR: red">href</span>=<span style="COLOR: blue">"http://www.microsoft.com"</span>&gt;www.microsoft.com&lt;<span style="COLOR: maroon">/a</span>&gt; </li>
<li>
<pre>    a    {        padding-right: 20px;        background: url(http://www.nocommonground.com/blogSamples/link.jpg) no-repeat right;    }</pre>
</li>
</ul>
<p>There are lots of other things you can do with links, such as defining partial styles for thinks like active, hover visited and non-visited links, but I'll get into that later.&nbsp; It's a little bit more difficult to demo here because I can't easily embed a CSS file in my blog, so I'll have to prepare it separatly, and then just link to it from here.</p>
