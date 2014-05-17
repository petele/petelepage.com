---
layout: post
status: publish
published: true
title: 'CSS Positioning: Margin, Border, and Padding'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1675
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:598491
date: '2006-05-15 20:42:00 -0400'
date_gmt: '2006-05-16 03:42:00 -0400'
categories:
- Web Design &amp; Development
tags:
- MSDNBlogPost
comments: []
---
<p><strong>UPDATE: </strong>After reading this post, read the important addendum I added with the post titled <a id="bp___v___r___postlist___EntryItems__ctl0_PostTitle" href="/petel/archive/2006/05/18/601147.aspx">DOCType? Why do I need that?</a></p>
<p>I've always had an issue with trying to remember in which order the margin, border, and padding items filled in an element in HTML and I came across some things that helped clairify it for me today, so I thought I'd share.</p>
<p><img src="http://petelepage.com/blog/wp-content/uploads/2006/05/CSS1.jpg" alt="" title="CSS Box Model - v1" width="350" height="399" /></p>
<p>There you have it, on a div, button, etc, the white content is the contents of the tag, the blue is padding, then comes the border and finally the margin.</p>
<h2>Default Display</h2>
<p>This is what a DIV tag would look like with nothing (other than a border) set would look like:</p>
<div style="width: 500px; border: black 1px solid;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean consequat erat vitae nunc. Maecenas consequat magna sed turpis. Sed vitae justo. Sed facilisis. Vestibulum porttitor. Nunc sapien augue, placerat ut, pharetra at, laoreet nec, nisl. Integer posuere, ipsum quis sagittis ultricies, erat nibh gravida nisl, sit amet tincidunt leo mi vitae neque. Cras faucibus dui nec urna. Sed mattis pretium sapien. Vestibulum iaculis dapibus sapien. Nam ipsum. Vivamus vel ligula rutrum risus euismod auctor. Suspendisse potenti. Mauris sit amet enim. Proin lacus. Cras libero lacus, rhoncus vel, scelerisque ut, tempor vitae, purus. Cras facilisis magna. Suspendisse sit amet purus id lacus commodo egestas. Quisque justo.</div>
<p><span style="color: #0000ff; font-size: x-small;"> </span></p>
<p><span style="color: #0000ff; font-size: x-small;">&lt;</span><span style="color: #800000; font-size: x-small;">div</span><span style="font-size: x-small;"> </span><span style="color: #ff0000; font-size: x-small;">style</span><span style="color: #0000ff; font-size: x-small;">="width:500px; border: solid 1px black;"&gt;...</span><span style="color: #0000ff; font-size: x-small;">&lt;/</span><span style="color: #800000; font-size: x-small;">div</span><span style="color: #0000ff; font-size: x-small;">&gt;</span></p>
<h2>Padding</h2>
<p>The following example has a 1px border so you can see where things fit, but also has a 25px padding around the inside:</p>
<div style="width: 500px; border: black 1px solid; padding: 25px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean consequat erat vitae nunc. Maecenas consequat magna sed turpis. Sed vitae justo. Sed facilisis. Vestibulum porttitor. Nunc sapien augue, placerat ut, pharetra at, laoreet nec, nisl. Integer posuere, ipsum quis sagittis ultricies, erat nibh gravida nisl, sit amet tincidunt leo mi vitae neque. Cras faucibus dui nec urna. Sed mattis pretium sapien. Vestibulum iaculis dapibus sapien. Nam ipsum. Vivamus vel ligula rutrum risus euismod auctor. Suspendisse potenti. Mauris sit amet enim. Proin lacus. Cras libero lacus, rhoncus vel, scelerisque ut, tempor vitae, purus. Cras facilisis magna. Suspendisse sit amet purus id lacus commodo egestas. Quisque justo.</div>
<p><span style="color: #0000ff; font-size: x-small;"> </span></p>
<p><span style="color: #0000ff; font-size: x-small;">&lt;</span><span style="color: #800000; font-size: x-small;">div</span><span style="font-size: x-small;"> </span><span style="color: #ff0000; font-size: x-small;">style</span><span style="color: #0000ff; font-size: x-small;">="width:500px; padding:25px; border: solid 1px black;"&gt;...</span><span style="color: #0000ff; font-size: x-small;">&lt;/</span><span style="color: #800000; font-size: x-small;">div</span><span style="color: #0000ff; font-size: x-small;">&gt;</span></p>
<h2>Margin</h2>
<p>This example shows using both margin and padding.</p>
<div style="margin: 25px; width: 500px; border: black 1px solid; padding: 25px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean consequat erat vitae nunc. Maecenas consequat magna sed turpis. Sed vitae justo. Sed facilisis. Vestibulum porttitor. Nunc sapien augue, placerat ut, pharetra at, laoreet nec, nisl. Integer posuere, ipsum quis sagittis ultricies, erat nibh gravida nisl, sit amet tincidunt leo mi vitae neque. Cras faucibus dui nec urna. Sed mattis pretium sapien. Vestibulum iaculis dapibus sapien. Nam ipsum. Vivamus vel ligula rutrum risus euismod auctor. Suspendisse potenti. Mauris sit amet enim. Proin lacus. Cras libero lacus, rhoncus vel, scelerisque ut, tempor vitae, purus. Cras facilisis magna. Suspendisse sit amet purus id lacus commodo egestas. Quisque justo.</div>
<p><span style="color: #0000ff; font-size: x-small;">&lt;</span><span style="color: #800000; font-size: x-small;">div</span><span style="font-size: x-small;"> </span><span style="color: #ff0000; font-size: x-small;">style</span><span style="color: #0000ff; font-size: x-small;">="width:500px; padding:25px; margin: 25px; border: solid 1px black;"&gt;...</span><span style="color: #0000ff; font-size: x-small;">&lt;/</span><span style="color: #800000; font-size: x-small;">div</span><span style="color: #0000ff; font-size: x-small;">&gt;</span></p>
<p>There you go</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=598491" alt="" width="1" height="1" /></p>
