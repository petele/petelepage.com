---
layout: post
title: 'How To: Create or Edit SVG Graphics'
date: '2010-06-03 09:01:51 -0400'
categories: blog
tags:
- SVG
- ForMSDNIEDC
comments:
- id: 1665
  date: '2010-06-03 10:00:35 -0400'
  content: Looks like you are not up-to-date wrt SVG tools.  The obvious choice for
    most people would be Inkscape http://www.inkscape.org/ , because it's both free
    and in widespread use.  (That said, its UI is IMHO ugly).
---

One of the cool new features of Internet Explorer 9 is support for [SVG 1.1 Second Edition](http://dev.w3.org/SVG/profiles/1.1F2/publish/), Full.  A bit of a mouthful but cool none the less.

### A Quick Intro To Graphics Types

There are two different types of graphics vector graphics and rasterized graphics.  I’m sure there’s an official definition on Wikipedia or other place online, but the best way to think about them is that rasterized images are those that define pixels, and not how they relate to one-another.  For example a photograph or image that has a lot of intricate detail and few hard, solid lines optimally would be a rasterized image.  Vector graphics define images based on lines and shapes, where different items are related to one another based on size, shape and location.  Vector images work really well for images that are more line based, like logos, organizational charts, and drawings that don’t have very complex textures, backgrounds and so forth.

Another important difference is that vector graphics are typically described via a plain-text XML description.  If you were to try to open a rasterized image in a text editor, all you’d see is jibberish.

### How To Create or Edit SVG Graphics

There are several tools available that can help you create or edit SVG images.  Since it’s just XML content you could easily create it in a text editor like notepad, vim or your editor of choice.  The [Visual Web Developer Tools team created a schema](http://blogs.msdn.com/b/webdevtools/archive/2009/10/06/working-with-svg-files-in-visual-studio-and-visual-web-developer.aspx) that you can add to Visual Studio 2010 that will make things a bit easier if you want to hand edit your SVG.  Maybe not the most fun way of doing it but certainly one way.

#### Installing the Visual Studio 2010 SVG Schema

1.  Download the [SVG.XSD](/assets/svg.xsd) file
2.  Create Schemas folder in your Web site or Web Application project root.
3.  Place downloaded _[SVG.XSD](/assets/svg.xsd)_ in the Schemas folder.
4.  Create a new XML file and save it with SVG extension, such as _svg-test.svg_.
5.  Add basic SVG content and save the file, for example

    _<span style="font-family: Consolas;">&lt;svg xmlns="http://www.w3.org/2000/svg” width="500" height="500"&gt;

    &lt;rect x="100" y="100" width="300" height="300" /&gt;

    &lt;/svg&gt;</span> _
6.  Add new HTML file (say, svg-test.htm) in the root folder and add

    _&lt;object data="svg-test.svg" type="image/svg+xml" width="500" height="500" /&gt;

    _to the _&lt;body&gt;_ element. You can also use existing HTML or ASPX page.
7.  Right-click on the svg-test.htm file in Solution Explorer and choose Browse With....
8.  Pick an SVG-enabled browser (like IE9PP1 or greater) and click OK. You should see SVG content rendered as below:

    [![svg_in_ie9pp2](/assets/svg_in_ie9pp2_thumb.png "svg_in_ie9pp2")](/assets/svg_in_ie9pp2.png)
9.  Now try typing &lt; in the SVG file. XML editor should now provide you wil intellisense for SVG elements and atributes:

    [![svg_in_vs2010](/assets/svg_in_vs2010_thumb.jpg "svg_in_vs2010")](/assets/svg_in_vs2010.jpg)

#### Using Adobe Illustrator To Create SVG Files

Another option is to use Adobe Illustrator to create SVG images.  Once you’ve created your vector drawing in Illustrator you can do a File, Export and save the image as a vector drawing!

#### Other Tools

While I was surfing around, I found a few online tools that would convert rasterized images to vector images.  They seemed to do a decent job, nothing great ,but enough to get me started.  Unfortunately, I don’t remember what they were now, and I haven’t been able to find them  again ![Sad smile](/assets/wlEmoticonsadsmile.png)

What do you use for creating and editing vector graphics?

[Q8UBWMA4HVM8]