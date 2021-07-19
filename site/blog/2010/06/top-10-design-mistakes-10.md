---
layout: post
title: 'Top 10 Design Mistakes: #10'
date: 2010-06-18
category: web development
tags:
- Web Design
- HTML
- ForMSDNIEDC
---

As promised, I'm going to start my series on (as my friend Sarah called it), &quot;10 Things I Hate About Your Website&quot;. And in reality, I admit to be guilty of many of these, so really I think I should call it &quot;10 Things I Hate About My Websites&quot;. This series is aimed at web developers who often find themselves having to do some design work, whether it's just that little bit here and there, or you're the only web person at your company this applies to you!

I consider myself a web developer - not a web designer. I know when a site on the web looks good, and I know when a site has kick butt usability. But, for me to accomplish both of those things on a website, probably not something I do well every time.

And with that, let's jump in to number 10...

## #10 - Word Writes Better Code Than Me

Yep! As web developers, sometimes we focus too much on getting the job done and adding that extra cool feature instead of focusing on the code and the usability. When we write non-web code, it has to be compiled, and there's a level of verification before it's run, but that's not the case for the web. You put in online, and the the browser runs it - even if there are errors in our code.

Sometimes, the errors in the code aren't our fault! When I present this session with a live audience, I always ask how many folks are using a content management system, and on average about 50% of people are. When that's the case, you can't guarantee how the code will be spit out? Did the person who last edited that one box close their tags right, did they use the rich editor, or did they hand code their HTML after reading HTML for Dummies?

Now, don't get me wrong - I personally don't believe that my code has to pass at 100% on any of the W3C validation suites. I do believe that it should be close - 1, 2, 3, maybe 5 errors; that I can deal with. If there are more than that, I have to ask myself what's wrong here? It's going to make dealing rendering issues a real pain in the butt!

## The Offenders

![Continental](/assets/Continental1.png "Continental")](http://continental.com)

**I'm a Continental flyer, I really love the airline and have had nothing but great experiences flying them, heck, I have often been known to fly out of my way to fly them! So, it kind of pains me to put them on my list of offenders, but hey, they're an airline, not a web design shop and I can't get too upset at them for their HTML. Their website from a design and UI perspective seems pretty good - it's super functional, I can find what I'm looking for, get done what I need to do, and do it all pretty quickly. Seems like a good site on the surface.

[![W3CContinental](/assets/W3CContinental_thumb1.png "W3CContinental")](/assets/W3CContinental1.png)But let's try running the [W3C HTML validator on the Continental web site](http://validator.w3.org/check?verbose=1&amp;uri=http%3a%2f%2fwww.continental.com%2fweb%2fen-US%2fdefault.aspx). Normally I can deal with a couple of errors, but as of the time I wrote this blog post, there are **2050 errors**, and if I refresh the site, the number changes!

That is absolutely going to make site maintenance very difficult, or trying to find out why my design isn't looking quite like I expect - almost impossible!

## Best Practice Suggestions

* Use the W3C Validators - [http://validator.w3c.org](http://validator.w3c.org) to see how your code it outputting and if it would pass a "compiler" if it existed on the web.
* If you've got non-web folk putting stuff online, get them trained, or put systems in place so that they can't edit the HTML and that the tools they're using are spitting out correct HTML
* Be aware of your surroundings! Where is your code going to go, and how is it going to get used? That snipped you just typed, do all the tags close? Is it going into a proper container type? How is it getting used?

## Summary

Keeping your code clean and professional is important - you may be the person who has to update this in 6, 12 or 18 months, but it may be someone else. Leave a legacy that you want someone to respect you for afterwards. Having messy code is going to make it maintenance near impossible! It may take some extra work in the short term, but will certainly pan out in the long term!

**PS:** If I pick on your website, I apologize! It's meant as a learning opportunity for both of us, and I'm happy to help you move from my offending list, to my best practices list! I've only shared a few of my favorites in this blog post, and there are plenty more out there! What are some of your favorites? Leave your favorite offending sites in the your comments! For designers who may be reading, I'd love to hear your thoughts and comments! What bugs you, what makes your life hard when working with web developers?
