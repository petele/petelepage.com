---
layout: post
status: publish
published: true
title: 'How To: Create or Edit SVG Graphics'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2166
wordpress_url: http://petelepage.com/blog/2010/06/how-to-create-or-edit-svg-graphics/
date: '2010-06-03 09:01:51 -0400'
date_gmt: '2010-06-03 16:01:51 -0400'
categories:
- Web Design &amp; Development
tags:
- SVG
- ForMSDNIEDC
comments:
- id: 1665
  author: ◇
  author_email: anonymous@nowhere.invalid
  author_url: ''
  date: '2010-06-03 10:00:35 -0400'
  date_gmt: '2010-06-03 17:00:35 -0400'
  content: Looks like you are not up-to-date wrt SVG tools.  The obvious choice for
    most people would be Inkscape http://www.inkscape.org/ , because it's both free
    and in widespread use.  (That said, its UI is IMHO ugly).
---
<p>One of the cool new features of Internet Explorer 9 is support for <a href="http://dev.w3.org/SVG/profiles/1.1F2/publish/">SVG 1.1 Second Edition</a>, Full.  A bit of a mouthful but cool none the less.</p>
<h3>A Quick Intro To Graphics Types</h3>
<p>There are two different types of graphics vector graphics and rasterized graphics.  I’m sure there’s an official definition on Wikipedia or other place online, but the best way to think about them is that rasterized images are those that define pixels, and not how they relate to one-another.  For example a photograph or image that has a lot of intricate detail and few hard, solid lines optimally would be a rasterized image.  Vector graphics define images based on lines and shapes, where different items are related to one another based on size, shape and location.  Vector images work really well for images that are more line based, like logos, organizational charts, and drawings that don’t have very complex textures, backgrounds and so forth.</p>
<p>Another important difference is that vector graphics are typically described via a plain-text XML description.  If you were to try to open a rasterized image in a text editor, all you’d see is jibberish.</p>
<h3>How To Create or Edit SVG Graphics</h3>
<p>There are several tools available that can help you create or edit SVG images.  Since it’s just XML content you could easily create it in a text editor like notepad, vim or your editor of choice.  The <a href="http://blogs.msdn.com/b/webdevtools/archive/2009/10/06/working-with-svg-files-in-visual-studio-and-visual-web-developer.aspx">Visual Web Developer Tools team created a schema</a> that you can add to Visual Studio 2010 that will make things a bit easier if you want to hand edit your SVG.  Maybe not the most fun way of doing it but certainly one way.</p>
<h4>Installing the Visual Studio 2010 SVG Schema</h4>
<ol>
<li>Download the <a href="http://petelepage.com/blog/wp-content/uploads/2010/06/svg.xsd">SVG.XSD</a> file</li>
<li>Create Schemas folder in your Web site or Web Application project root.</li>
<li>Place downloaded <em><a href="http://petelepage.com/blog/wp-content/uploads/2010/06/svg.xsd">SVG.XSD</a></em> in the Schemas folder.</li>
<li>Create a new XML file and save it with SVG extension, such as <em>svg-test.svg</em>.</li>
<li>Add basic SVG content and save the file, for example<br />
<em><span style="font-family: Consolas;">&lt;svg xmlns="http://www.w3.org/2000/svg” width="500" height="500"&gt;<br />
&lt;rect x="100" y="100" width="300" height="300" /&gt;<br />
&lt;/svg&gt;</span> </em></li>
<li>Add new HTML file (say, svg-test.htm) in the root folder and add<br />
<em>&lt;object data="svg-test.svg" type="image/svg+xml" width="500" height="500" /&gt;<br />
</em>to the <em>&lt;body&gt;</em> element. You can also use existing HTML or ASPX page.</li>
<li>Right-click on the svg-test.htm file in Solution Explorer and choose Browse With....</li>
<li>Pick an SVG-enabled browser (like IE9PP1 or greater) and click OK. You should see SVG content rendered as below:<br />
<a href="http://petelepage.com/blog/wp-content/uploads/2010/06/svg_in_ie9pp2.png"><img class="wlDisabledImage" style="display: inline; border: 0px;" title="svg_in_ie9pp2" src="http://petelepage.com/blog/wp-content/uploads/2010/06/svg_in_ie9pp2_thumb.png" border="0" alt="svg_in_ie9pp2" width="644" height="484" /></a></li>
<li>Now try typing &lt; in the SVG file. XML editor should now provide you wil intellisense for SVG elements and atributes:<br />
<a href="http://petelepage.com/blog/wp-content/uploads/2010/06/svg_in_vs2010.jpg"><img class="wlDisabledImage" style="display: inline; border: 0px;" title="svg_in_vs2010" src="http://petelepage.com/blog/wp-content/uploads/2010/06/svg_in_vs2010_thumb.jpg" border="0" alt="svg_in_vs2010" width="644" height="399" /></a></li>
</ol>
<h4>Using Adobe Illustrator To Create SVG Files</h4>
<p>Another option is to use Adobe Illustrator to create SVG images.  Once you’ve created your vector drawing in Illustrator you can do a File, Export and save the image as a vector drawing!</p>
<h4>Other Tools</h4>
<p>While I was surfing around, I found a few online tools that would convert rasterized images to vector images.  They seemed to do a decent job, nothing great ,but enough to get me started.  Unfortunately, I don’t remember what they were now, and I haven’t been able to find them  again <img class="wlEmoticon wlEmoticon-sadsmile" style="border-style: none;" src="http://petelepage.com/blog/wp-content/uploads/2010/06/wlEmoticonsadsmile.png" alt="Sad smile" /></p>
<p>What do you use for creating and editing vector graphics?</p>
<p>[Q8UBWMA4HVM8]</p>
