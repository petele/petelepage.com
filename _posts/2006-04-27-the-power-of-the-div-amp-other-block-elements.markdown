---
layout: post
title: The Power of the DIV &amp;amp; other BLOCK elements
date: '2006-04-27 07:09:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

The DIV tag is one of my most hated and most loved tags in HTML.&nbsp; It allows you to do so much, but at the same time, can cause some headaches when things aren't lining up, or because of their block nature, finding each new div on a new line.

This morning, [Danny](/dannychen/) came into my office to ask how to make the ANCHOR tag maintain it's size, so that you can click on it whether you're on the text or not.&nbsp; For example, the following anchor:

[The entire blue background is clickable](http://www.microsoft.com/)

To do that, we set the width on the control, but that by itself wasn't enough, you also need to add "display: block".&nbsp; So the above hyperlink looks like:

<font color="#0000ff" size="2">
<p>&lt;

</font><font color="#800000" size="2">a</font><font size="2"> </font><font color="#ff0000" size="2">href</font><font color="#0000ff" size="2">="http://www.microsoft.com"</font><font size="2"> </font><font color="#ff0000" size="2">target</font><font color="#0000ff" size="2">="_blank"</font><font size="2"> </font><font color="#ff0000" size="2">style</font><font color="#0000ff" size="2">="width: 450px; display: block;background-color: Blue; color: White;"&gt;</font><font size="2">The entire blue background is clickable</font><font color="#0000ff" size="2">&lt;/</font><font color="#800000" size="2">a</font><font color="#0000ff" size="2">&gt;

</font>
<p>One of the other cool things I like about DIV's and block elements, is their ability to "contain" their size and information, so you get scroll bars in your page.&nbsp; While this isn't a great example here, I'm using it on my [fine art photography website](http://www.bbpphoto.com/links.aspx) [yes, it looks AWEFUL in FireFox, I need to fix that].&nbsp; For example, you could have something like this box below:

<div style="BORDER-RIGHT: black 2px solid; BORDER-TOP: black 2px solid; OVERFLOW: auto; BORDER-LEFT: black 2px solid; WIDTH: 300px; BORDER-BOTTOM: black 2px solid; HEIGHT: 100px">
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec dolor velit, pulvinar in, sagittis non, volutpat sed, dolor. Cras in risus. Sed pede lacus, eleifend id, porttitor sit amet, fermentum faucibus, felis. Ut blandit, orci at laoreet malesuada, ante nulla elementum dui, vel molestie tellus tortor eu metus. Maecenas venenatis, lorem blandit tempus tempus, erat tellus ultricies purus, ut eleifend ipsum sem id erat. Sed aliquet, odio sed nonummy volutpat, ligula purus hendrerit lorem, ac pharetra dui est non magna. Morbi faucibus ante a ligula. Ut ac nisi vel velit imperdiet nonummy. Proin feugiat, nisl nec dapibus consequat, lacus augue placerat turpis, nec venenatis libero justo ut pede. Ut eget felis. Maecenas id lacus. Praesent nec elit tincidunt odio consequat elementum. Nulla dolor tellus, egestas vitae, hendrerit id, commodo quis, mi. Ut congue. 

Pellentesque in elit. In porttitor, lorem non bibendum varius, libero nulla tempus sapien, vitae pretium neque metus faucibus odio. Nullam eleifend, quam non tincidunt molestie, ligula neque sagittis arcu, sit amet iaculis tellus dolor id lacus. Sed pretium neque a dui. Suspendisse purus felis, ullamcorper id, hendrerit vitae, nonummy non, velit. Nulla nisl. Nunc tellus dui, interdum ut, malesuada id, faucibus ac, sapien. Morbi felis nibh, rutrum a, dictum ac, volutpat quis, ipsum. In iaculis porttitor ante. Morbi sed arcu vel urna tincidunt suscipit. Duis interdum lacinia nibh. Nunc eleifend scelerisque mauris. Ut cursus molestie tellus. Duis ut nisi non lacus rutrum egestas. In ullamcorper nulla eget mauris. Nunc augue. Aliquam consectetuer. Nulla eu nisi convallis odio condimentum aliquet. 

Curabitur sit amet urna a urna nonummy feugiat. Donec hendrerit rhoncus augue. Vestibulum in nibh non lorem malesuada euismod. Donec erat leo, auctor at, iaculis sit amet, sodales a, metus. Sed volutpat leo vitae arcu. Sed facilisis enim non ligula. Donec consectetuer nonummy sapien. Aliquam et augue ac leo mattis sodales. Pellentesque quis magna vitae elit porta suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Morbi enim mauris, blandit vitae, interdum quis, dictum vitae, ipsum. In magna erat, elementum consectetuer, aliquam mollis, consectetuer sit amet, tortor. Duis a nulla. 

Nullam at tortor. Suspendisse eget velit eu elit mattis consequat. Cras non mauris. Suspendisse purus elit, tempor sit amet, fringilla id, convallis ut, justo. Donec sit amet mauris vitae risus pulvinar tristique. Maecenas ipsum. Cras vulputate, libero vitae vehicula lacinia, ante eros blandit erat, nec egestas massa felis non odio. Donec mi lacus, pulvinar eu, dignissim quis, egestas at, lorem. Vivamus vehicula, turpis non imperdiet eleifend, velit quam congue libero, accumsan imperdiet arcu libero et velit. Suspendisse justo. 

Pellentesque ornare mattis sem. Nulla facilisi. Etiam bibendum pharetra est. Sed mi risus, porta ac, venenatis in, pulvinar ac, eros. Phasellus laoreet erat. Vivamus sollicitudin hendrerit urna. Curabitur sed odio. Quisque vitae lacus et velit egestas tempor. Nulla feugiat lacus nec elit. Aliquam lacus. Morbi malesuada pulvinar lectus. Aliquam aliquet fringilla nisi. Morbi at libero. 

</div>

<font color="#0000ff" size="2">&lt;</font><font color="#800000" size="2">div</font><font size="2"> </font><font color="#ff0000" size="2">style</font><font color="#0000ff" size="2">="border: solid 2px black; height: 100px; width: 300px; overflow: auto;"&gt;
&nbsp;&nbsp;&nbsp;&nbsp; </font><font color="#000000">put content in here...</font>
<font color="#0000ff" size="2"></font><font color="#0000ff" size="2">&lt;/</font><font color="#800000" size="2">div</font><font color="#0000ff" size="2">&gt;

</font>
</p>

I did that by using setting a defined height and width in the div, and setting the overflow on the div to auto.&nbsp; Using auto gives only gives you scroll bars when needed, so if your control is dynamically filled, they won't show up until needed.&nbsp; You could also do this with an ASP:Panel and get the same look and feel, but be easily able to dynamically update the content of the control:

<font color="#0000ff" size="2">
<p>&lt;

</font><font color="#800000" size="2">asp</font><font color="#0000ff" size="2">:</font><font color="#800000" size="2">Panel</font><font size="2"> </font><font color="#ff0000" size="2">ID</font><font color="#0000ff" size="2">="Panel1"</font><font size="2"> </font><font color="#ff0000" size="2">runat</font><font color="#0000ff" size="2">="server"</font><font size="2"> </font><font color="#ff0000" size="2">Height</font><font color="#0000ff" size="2">="100px"</font><font size="2"> </font><font color="#ff0000" size="2">Width</font><font color="#0000ff" size="2">="300px"</font><font size="2"> </font><font color="#ff0000" size="2">Style</font><font color="#0000ff" size="2">="border: solid 2px black;overflow: auto;"&gt;
</font><font color="#000000">&nbsp;put content here
</font><font color="#0000ff" size="2">&lt;/</font><font color="#800000" size="2">asp</font><font color="#0000ff" size="2">:</font><font color="#800000" size="2">Panel</font><font color="#0000ff" size="2">&gt;</font>