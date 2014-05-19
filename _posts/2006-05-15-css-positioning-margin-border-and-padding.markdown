---
layout: post
title: 'CSS Positioning: Margin, Border, and Padding'
date: '2006-05-15 20:42:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

**UPDATE: **After reading this post, read the important addendum I added with the post titled [DOCType? Why do I need that?](/petel/archive/2006/05/18/601147.aspx)

I've always had an issue with trying to remember in which order the margin, border, and padding items filled in an element in HTML and I came across some things that helped clairify it for me today, so I thought I'd share.

![](/assets/CSS1.jpg "CSS Box Model - v1")

There you have it, on a div, button, etc, the white content is the contents of the tag, the blue is padding, then comes the border and finally the margin.

## Default Display

This is what a DIV tag would look like with nothing (other than a border) set would look like:

<div style="width: 500px; border: black 1px solid;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean consequat erat vitae nunc. Maecenas consequat magna sed turpis. Sed vitae justo. Sed facilisis. Vestibulum porttitor. Nunc sapien augue, placerat ut, pharetra at, laoreet nec, nisl. Integer posuere, ipsum quis sagittis ultricies, erat nibh gravida nisl, sit amet tincidunt leo mi vitae neque. Cras faucibus dui nec urna. Sed mattis pretium sapien. Vestibulum iaculis dapibus sapien. Nam ipsum. Vivamus vel ligula rutrum risus euismod auctor. Suspendisse potenti. Mauris sit amet enim. Proin lacus. Cras libero lacus, rhoncus vel, scelerisque ut, tempor vitae, purus. Cras facilisis magna. Suspendisse sit amet purus id lacus commodo egestas. Quisque justo.</div>

<span style="color: #0000ff; font-size: x-small;"> </span>

<span style="color: #0000ff; font-size: x-small;">&lt;</span><span style="color: #800000; font-size: x-small;">div</span><span style="font-size: x-small;"> </span><span style="color: #ff0000; font-size: x-small;">style</span><span style="color: #0000ff; font-size: x-small;">="width:500px; border: solid 1px black;"&gt;...</span><span style="color: #0000ff; font-size: x-small;">&lt;/</span><span style="color: #800000; font-size: x-small;">div</span><span style="color: #0000ff; font-size: x-small;">&gt;</span>

## Padding

The following example has a 1px border so you can see where things fit, but also has a 25px padding around the inside:

<div style="width: 500px; border: black 1px solid; padding: 25px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean consequat erat vitae nunc. Maecenas consequat magna sed turpis. Sed vitae justo. Sed facilisis. Vestibulum porttitor. Nunc sapien augue, placerat ut, pharetra at, laoreet nec, nisl. Integer posuere, ipsum quis sagittis ultricies, erat nibh gravida nisl, sit amet tincidunt leo mi vitae neque. Cras faucibus dui nec urna. Sed mattis pretium sapien. Vestibulum iaculis dapibus sapien. Nam ipsum. Vivamus vel ligula rutrum risus euismod auctor. Suspendisse potenti. Mauris sit amet enim. Proin lacus. Cras libero lacus, rhoncus vel, scelerisque ut, tempor vitae, purus. Cras facilisis magna. Suspendisse sit amet purus id lacus commodo egestas. Quisque justo.</div>

<span style="color: #0000ff; font-size: x-small;"> </span>

<span style="color: #0000ff; font-size: x-small;">&lt;</span><span style="color: #800000; font-size: x-small;">div</span><span style="font-size: x-small;"> </span><span style="color: #ff0000; font-size: x-small;">style</span><span style="color: #0000ff; font-size: x-small;">="width:500px; padding:25px; border: solid 1px black;"&gt;...</span><span style="color: #0000ff; font-size: x-small;">&lt;/</span><span style="color: #800000; font-size: x-small;">div</span><span style="color: #0000ff; font-size: x-small;">&gt;</span>

## Margin

This example shows using both margin and padding.

<div style="margin: 25px; width: 500px; border: black 1px solid; padding: 25px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean consequat erat vitae nunc. Maecenas consequat magna sed turpis. Sed vitae justo. Sed facilisis. Vestibulum porttitor. Nunc sapien augue, placerat ut, pharetra at, laoreet nec, nisl. Integer posuere, ipsum quis sagittis ultricies, erat nibh gravida nisl, sit amet tincidunt leo mi vitae neque. Cras faucibus dui nec urna. Sed mattis pretium sapien. Vestibulum iaculis dapibus sapien. Nam ipsum. Vivamus vel ligula rutrum risus euismod auctor. Suspendisse potenti. Mauris sit amet enim. Proin lacus. Cras libero lacus, rhoncus vel, scelerisque ut, tempor vitae, purus. Cras facilisis magna. Suspendisse sit amet purus id lacus commodo egestas. Quisque justo.</div>

<span style="color: #0000ff; font-size: x-small;">&lt;</span><span style="color: #800000; font-size: x-small;">div</span><span style="font-size: x-small;"> </span><span style="color: #ff0000; font-size: x-small;">style</span><span style="color: #0000ff; font-size: x-small;">="width:500px; padding:25px; margin: 25px; border: solid 1px black;"&gt;...</span><span style="color: #0000ff; font-size: x-small;">&lt;/</span><span style="color: #800000; font-size: x-small;">div</span><span style="color: #0000ff; font-size: x-small;">&gt;</span>

There you go

![](http://blogs.msdn.com/aggbug.aspx?PostID=598491)