---
layout: post
title: Styling Links - Making the Mundane Somewhat More Interesting
date: '2005-11-04 03:28:00 -0500'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

It's been a while since I've done a CSS style post, so I figure its about time, and today I want to touch on something pretty simple, the &lt;a&gt; anchor tag.&nbsp; Most anchors are pretty boring, some blue text that is simply underlined.&nbsp; Some people go a bit beyond and make it change colours when you hover and such, and I'll look at that, but I want to take this a step further.

The Boring Normal Anchor

*   [www.microsoft.com](http://www.microsoft.com/)
<p>Lets add a tool tip to our hyperlink

*   [www.microsoft.com](http://www.microsoft.com/ "This link will take you to the Microsoft web site")
*   To do this, we simply add a title attribute to the hyperlink tag
*   &lt;<span style="COLOR: maroon">a</span> <span style="COLOR: red">href</span>=<span style="COLOR: blue">"http://www.microsoft.com"</span> <span style="COLOR: red">title</span>=<span style="COLOR: blue">"This link will take you to the Microsoft web site"</span>&gt;www.microsoft.com&lt;<span style="COLOR: maroon">/a</span>&gt; 

Lets get rid of the underline, and make the color different

*   [www.microsoft.com](http://www.microsoft.com/)
*   To do this, we simply set the text decoration to none, and add a color to the tag
*   &lt;<span style="COLOR: maroon">a</span> <span style="COLOR: red">href</span>=<span style="COLOR: blue">"http://www.microsoft.com"</span>&gt;www.microsoft.com&lt;<span style="COLOR: maroon">/a</span>&gt;
*   <pre>    a    {        text-decoration: none;        color: aquamarine;    }        </pre>

Instead of an underline, lets have a dashed line, or something else kind of fun

*   [www.microsoft.com](http://www.microsoft.com/)
*   To do this, we turned off the text-decoration, and added a border on the bottom that we set to be 1px dashed red, giving us the red dashed line
*   &lt;<span style="COLOR: maroon">a</span> <span style="COLOR: red">href</span>=<span style="COLOR: blue">"http://www.microsoft.com"</span>&gt;www.microsoft.com&lt;<span style="COLOR: maroon">/a</span>&gt; 
*   <pre>    a    {        text-decoration: none;        border-bottom: 1px dashed red;    }        </pre>

Lets add some kind of image to our link, indicating it's an XML item.&nbsp; You can alternatively use some other image indicating this is a link

*   [www.microsoft.com](http://www.microsoft.com/)
*   To do this, we add a background to the image, and add some padding on the right&nbsp;
*   &lt;<span style="COLOR: maroon">a</span> <span style="COLOR: red">href</span>=<span style="COLOR: blue">"http://www.microsoft.com"</span>&gt;www.microsoft.com&lt;<span style="COLOR: maroon">/a</span>&gt; 
*   <pre>    a    {        padding-right: 20px;        background: url(http://www.nocommonground.com/blogSamples/link.jpg) no-repeat right;    }</pre>

There are lots of other things you can do with links, such as defining partial styles for thinks like active, hover visited and non-visited links, but I'll get into that later.&nbsp; It's a little bit more difficult to demo here because I can't easily embed a CSS file in my blog, so I'll have to prepare it separatly, and then just link to it from here.