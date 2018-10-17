---
layout: post
title: 'Top 10 Design Mistakes: #7'
date: '2010-07-06 09:47:29 -0400'
categories: blog
tags:
- Web Design
- HTML
- ForMSDNIEDC
comments: []
---

I hope everyone had a fantastic weekend, other than the weather I had a really great one – Seattle has had one of the crappiest starts to summer that I can remember in my 9 years of living here! It’s like summer just wouldn’t come; but it looks like it arrived this morning and is supposed to stay through the week – finally! But enough with idle chit-chat, time for number seven in the 10 Things I Hate About Your Website series!

# #7 – SEO: Isn’t Just For Highly Paid Consultants!

As web developers, we sometimes forget that tags are often more than just a way of styling text, they’re meant to provide some semantic meaning to the content that you’re putting on a page. For example, some people think that an &lt;h1&gt; tag means that the text inside it is really large, instead of its true meaning of the primary heading for a page.

Search Engine Optimization or SEO is important to many, but not all sites, if all of your traffic is intranet and you only have one site, you probably don’t need to worry about it. But, with more and more content appearing online, in the corporate intranet, the corporate extranet or the internet, it’s getting harder and harder to organically find content and search is becoming super important. I remember a couple of years ago when the Microsoft Origami project name was leaked, and I wanted to know what it was – search made it possible, but because of poor SEO, it was more difficult than it should have been. As you’re building out your site, you need to consider how folks will get to it, and what you want them to do once they get there.

One of the easiest ways to find some tips and tricks for search engine optimization is to just search for SEO Tips, either on [Google](http://www.google.com/search?q=seo+tips) or [Bing](http://www.bing.com/search?q=seo+tips), though some of them are complete bunk – my favorite so far has been “become a foreigner”. One of the most important tips that I can recommend and that I’ve seen on other sites, is that content is king! If the quality of your content is good, then you’ll likely have a better chance of ranking higher in search results.

After spending a significant amount of time reading and researching, here are my top 8 suggestions that will carry the most impact when coding your site:

## 8 Tips &amp; Tricks for SEO

1.  Title &amp; Meta Tags – ensure every page has a unique and relevant title set, and that you’re using meta tags to provide descriptions and keywords about the content on the page. Make sure that the keywords are relevant to the copy on the page – if they’re not, search engines will likely discount them, and rank your page lower. 
2.  Write copy for SEO – Search engines look at many parts of your page, looking for keywords, copy, how &lt;h?&gt; tags are used and so on. It’s important to keep the use of the &lt;h?&gt; tags to relevant headings and other appropriate parts. Think about how a search engine sees your page, it doesn’t execute JavaScript so make sure you content is accessible if JavaScript is turned off. 
3.  Provide a sitemap.xml file – there are several tools that will help create these, or you can hand code it (though it’s a bit of a pain). I host most of my sites on GoDaddy, and they have a built in tool for creating sitemaps.xml file for me. Site maps make it super easy for search engines to look at your site and determine the content and what you have without them having to do any work. Oh, and don’t forget if you block access to your site by turning off spiders in the robots.txt file, search engines will not be able to access your site! 
4.  alt <strike>Tags</strike> attributes – search engines are really good at being able to “see” and understand text, but they cannot see images, or photos or graphics – so be sure to include alt attributes on all of your images. And don’t include your content in images! Check out one of the sites below for my favorite site that’s guilty of this one! 
5.  If you’re using Flash, Silverlight, or other rich media on your site, be sure that you supplement it with HTML content. Search engines aren’t able to truly understand rich media and so finding the content in there will be almost impossible for them! 
6.  Verify internal links – when you’re providing links within your site to the default page, are you linking to http://site.com/index.htm or are you linking to http://site.com/ or http://site.com? Each one of those may be seen as a link to a different page, and cause complexities for search engines. 
7.  Make Links Easy – when coding your site, if the content is going to be dynamic or accessible via URLs, make the URLs easy to read and understand. The MSDN website is an AWESOME example of how NOT do to this. For example, check out the URL [http://msdn.microsoft.com/en-us/ie/cc405106.aspx](http://msdn.microsoft.com/en-us/ie/cc405106.aspx "http://msdn.microsoft.com/en-us/ie/cc405106.aspx") – do you have any idea where it goes or what might be contained within that URL? Instead use something more friendly – that URL can also be accessed via [http://msdn.com/iecompat](http://msdn.com/iecompat), much easier to read and understand – you know what you’re going to get from just looking at the URL and so does a search engine! 
8.  Use search engines web master tools – Bing, Google, Yahoo, and most other search engines have an area where they have best practices and help for ensuring your website ranks well in search. I’ve listed a few of them below. 

## Useful Tools, Sites And Resources for SEO

### Google

*   [Google 101: How Google Craws, indexes and serves the web](http://www.google.com/support/webmasters/bin/answer.py?answer=70897) 
*   [Search Engine Optimization Help](http://www.google.com/support/webmasters/bin/answer.py?hl=en&amp;answer=35291) 
*   [Google Web Master Tools](https://www.google.com/webmasters/tools/home?hl=en) 
*   [Google Search Engine Optimization Starter Guide [PDF]](/assets/search-engine-optimization-starter-guide.pdf) 

### Bing

*   [SEO and SEM Basics](http://www.bing.com/toolbox/posts/archive/2009/12/01/seo-and-sem-basics.aspx) 
*   [Search Engine Optimizations for Bing](http://www.bing.com/community/blogs/webmaster/archive/2009/09/03/search-engine-optimization-for-bing.aspx) 
*   [Submit A Site [or page] To Bing](http://www.bing.com/webmaster/SubmitSitePage.aspx) 
*   [Using the IIS SEO Toolkit [Video]](http://www.microsoft.com/video/en/us/details/876f924a-7abf-4f49-9da4-fd8ee1498168) 

## Let’s see some examples!

[![neck_and_backPain](/assets/neck_and_backPain_thumb.png "neck_and_backPain")](/assets/neck_and_backPain.png)There is not a single word of text on this page, it’s all images! If you want to copy and paste the address into a mapping program, fail. Want the search engine to know more about these guys, nothing! Every single piece of content on this site is an image, and no signs of any alt tags. If you’re coming to this site with a screen reader, again, nothing. Sad panda!

[![x-ua-compat-search](/assets/xuacompatsearch_thumb.png "x-ua-compat-search")](/assets/xuacompatsearch.png) This is another favorite of mine, go to Bing and search for X-UA-Compatible – you’d think that a Microsoft site would be the first link, in fact that we’d be the first couple of links. Nope, in fact we’re not there until the third link. A List Apart (which is fantastic, don’t get me wrong), is the first link!

## Best Practice Suggestions

*   <div style="clear: left">Review and use the tips and techniques provided by the search engines themselves, they’re more likely to work than some of the fun stuff you’ll find on the internet.</div>

*   <div style="clear: left">Don’t use link farms – they’ll often result in lower results.</div>

**Don’t Forget:** If I pick on your website, I apologize! It’s meant as a learning opportunity for both of us, and I’m happy to help you move from my offending list, to my best practices list! I’ve only shared a few of my favorites in this blog post, and there are plenty more out there! What are some of your favorites? Leave your favorite offending sites in the your comments! For designers who may be reading, I’d love to hear your thoughts and comments! What bugs you, what makes your life hard when working with web developers?

**Update:** [@pornelski](http://twitter.com/pornelski) tweeted me and said he thought my first tip on using keywords was wrong, and linked to a [Google webmaster blog post](http://googlewebmastercentral.blogspot.com/2009/09/google-does-not-use-keywords-meta-tag.html) where they explicitly say they don't use keywords.  I generally think it's still worthwhile because it's possible that other search engines do use it.

He also added the clarification, that the alt attribute (which I incorrectly mentioned as a tag), shouldn't literally describe the image, but instead provide an alternative description of the image.