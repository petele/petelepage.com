---
layout: post
status: publish
published: true
title: The Anatomy of a Great Chrome Web Store Listing
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2581
wordpress_url: http://petelepage.com/blog/?p=2581
date: '2011-06-14 09:37:43 -0400'
date_gmt: '2011-06-14 16:37:43 -0400'
categories: blog
tags:
- Web Design
- HowTo
- Chrome Web Store
- ChromeWebStore
- BestPractices
- Web App
comments:
- id: 3950
  author: Great Web Apps &laquo; Ido&#039;s Blog
  author_email: ''
  author_url: http://greenido.wordpress.com/2011/06/17/great-web-apps/
  date: '2011-06-17 14:57:22 -0400'
  date_gmt: '2011-06-17 21:57:22 -0400'
  content: '[...] The Anatomy of a Great Chrome Web Store Listing [...]'
- id: 4702
  author: Ido
  author_email: greenido@gmail.com
  author_url: http://greenido.wordpress.com/
  date: '2011-09-10 11:20:41 -0400'
  date_gmt: '2011-09-10 18:20:41 -0400'
  content: "Thanks Pete!\r\nNow that I saw this post - I have a great location to
    point people at... specially, after long meetings with partners :)"
---
Your first chance to make a great impression with a new user is often on your application listing page in the [Chrome Web Store](https://chrome.google.com/webstore).  People will make a split second decision whether to install your application based on what you put on there, so it’s important to make a great first impression.  Let’s take a look at what makes a great Chrome Web Store application listing.  This guide highlights a couple key components of a great Chrome Web Store listing.  I tried not to repeat content from the documentation, but instead tease out the important parts or best practices.  Be sure to follow the links for additional resources or details.

## TweetDeck &amp; Google Maps

[![](/assets/tweetdeck-300x214.png "TweetDeck listing")](/assets/tweetdeck.png)

[![](/assets/goog-maps-300x208.png "Google Maps listing")](/assets/goog-maps.png)

I think both [TweetDeck](https://chrome.google.com/webstore/detail/hbdpomandigafcibbmofojjchbcdagbl) and [Google Maps](https://chrome.google.com/webstore/detail/lneaknkopdijkpnocmklfnjbeapigfbh) do a great job of providing a compelling, and interesting listing, so we'll use those as our primary examples.

## Category

[![](/assets/category.png "TweetDeck Category Listing")](/assets/category.png)Putting your application in to the most appropriate category will make it easy for users to find your application when they browse the store.  You can choose up to two categories that are most appropriate for your application.  You can find a [list](http://code.google.com/chrome/webstore/docs/best_practices.html#categories) of the different categories as well as a description and examples for each in the [Chrome Web Store developer documentation](http://code.google.com/chrome/webstore/docs/).

Even though you can choose up to two categories, and your application will be listed under both, it will only show one category on the navigation breadcrumb when you view it in the Chrome Web Store.  Unfortunately at this time there is no way to change which one is listed when you link directly to the page.

## Header Details

### Screen Shots and Video

[![](/assets/uploaded-screenshot-300x206.png "uploaded screenshot")](/assets/uploaded-screenshot.png)Screen shots can be one of the most compelling factors in a user's decision to install or buy an application, so it’s important to provide at least four or five screen shots that give a user a sense for how your application works, some of the features it offers and an idea of the different elements.  You should always start with a beautiful screen shot that provides a detailed overview of the application experience first, and then drill into the additional elements.  Make sure the screen shots show your application in use, so that users can see how the application works, and how they might use it.  If you're displaying any kind of data from the user, be sure to use safe or sample data in the screen shots instead of blurring things out or accidentally sharing personally identifiable information.

Screen shots should be full bleed images with square corners that are 400x275 pixels.  Very few applications will actually fit within those dimensions, which means you may have to do some creative scaling, or cropping to provide appropriate screenshots.  Be sure to not over-compress or scale images so that you can’t see any of the detail.   Further details about supplying screen shots are available in the Chrome Web Store documentation under [Supplying Images](http://code.google.com/chrome/webstore/docs/images.html#screenshots).

A picture may be worth 1000 words, but video is worth many more.  The Chrome Web Store allows you to add a YouTube video to the screen shot collection, allowing you to provide a richer way to show people your application, and convince them to install or buy it.  Keep in mind that in many cases, people haven’t yet made the decision to install or buy your application, and likely won’t be willing to invest a lot of time, so optimize for a short, high quality overview that highlights the main features and will encourage people to try it.

### Icon

[![](/assets/maps-icon.png "Google Maps application icon")](/assets/maps-icon.png)Your application’s icon represents identity of your application, and is an important part of the overall brand.  The icon should be professional, and appropriately sized so that it’s not pixelated or skewed. The icon file should be a 128x128 pixel PNG, where the actual icon size should be 96x96 (for square icons); an additional 16 pixels per side should be transparent padding, adding up to 128x128 total image size.  Additional details about icons can be found in the [Supplying Images](http://code.google.com/chrome/webstore/docs/images.html#icons) section of the Chrome Web Store documentation.

### Verified Domain

[![](/assets/verified.png "verified")](/assets/verified.png)Verifying your domain via the [Google Webmaster Tools](http://www.google.com/webmasters/) is like adding a certificate of authenticity to something that you’re going to buy in the store.  A verified application tells potential users they’re about the install a genuine, user experience from your site - and that they’re not getting a cheap, or potentially unsafe knock-off.  Also, be sure the domain name that you’ve verified and are using makes sense, and isn't a development or staging domain; which may scare away your users.

### Short Description

The application manifest file ([manifest.json](http://code.google.com/chrome/extensions/manifest.html)) has a property for a short description of your application.  Use this to tell users about what your application does and why they should get excited and care about it.  It’s limited to 132 characters, and cannot include any HTML.  For example, the description for Angry Birds is simply “Birds! Slingshots! Destruction! Feathers! Fun!”  For Gmail, it’s “Fast, searchable email with less spam.”

### Customized Header Background

[![](/assets/header-background-image-150x150.png "Sample header background image")](/assets/header-background-image.png)You can supply a customized background for the header description that appears on the right side of the header in your application’s store listing.  The header background allows you to enhance the identity and branding elements on your listing page.  When supplying the background image, make sure your app's title and description are still readable and that the background elements don’t distract from the overall listing.

The header background image should fill the entire 570x275 pixel canvas, though don’t put anything important in the bottom 60px as those are reserved for the rating, buy or install buttons.  Be sure to choose a background color that will provide the appropriate contrast with either white, or black text, though a dark or medium background color is recommended, like in this [example](http://petelepage.com/blog/wp-content/uploads/2011/06/header-in-store-screenshot.png).  Additional details can be found in the [Header background](http://code.google.com/chrome/webstore/docs/images.html#bg) section of the Chrome Web Store documentation.

## Full Description

Beyond the concise description set in the manifest file, a detailed description can be provided via the Chrome Web Store Developer Dashboard. This is your space to really excite your potential users about your application and convince them to install or buy it.  If you’ve already built a landing page on your web site, you can likely leverage what you’ve already written here.

You should provide a detailed description of your application, including it’s features, quotes from great reviews, information about recent updates, and any other information that might be relevant to potential users.  If your application has a freemium or free trial, be sure to tell users the differences between the paid and free experience so they’re not surprised or disappointed by functionality that they might not have access to.

Remember, this description will be searchable, so be sure to use any key words in your description that might help users to find your application if they try searching for it without knowing the name of it.

If your product is compatible with a Google product, make reference to that Google product by using the text "for", "for use with", or "compatible with", and be sure to include the ™ symbol with the Google trademark. Example: "for Google Chrome™".  For other third party products, be sure to check any requirements that they may have when describing your application.

## Other Helpful Components

### Version Number &amp; Last Updated

[![](/assets/last-updated.png "Last Updated Field")](/assets/last-updated.png)One of the great features of web applications is the ease at which we can add new features, fix bugs and enhance the overall user experience.  It’s strongly recommended that you increment the version number in your manifest file and re-upload it to the Chrome Web Store any time you provide significant updates or bug fixes to your application.  This ensures that the version number and last updated field on your application listing stay up to date, and users know that you’re application is fresh, and that you’re constantly working to make it better.

Also, when choosing a version number, it’s a good idea to start at 1.0, or as close to it as you can so that people know your application is ready for real world use and that you’re not something that’s still in beta or may not work as expected.  If you’re not ready to be out of beta yet, that’s okay, but provide a realistic version number that indicates how close you are to being out of beta.  And be sure to stay away from version numbers like 0.0.0.1.

### Promotional Images

[![](/assets/small-promo-image.png "Small Promotional Image")](/assets/small-promo-image.png)It’s always a good idea to provide a [small](/assets/small-promo-image.png) and [large](/assets/large-promo-image.png) promotional images; in case your application is chosen to be featured in one of the many featured application listings.  If it doesn’t have at least one promotional image, it there’s little chance of it being chosen as a feature application!  Both images should use the same branding and identity as the rest of the images that you supplied, and have a dark or medium background with light text.  The small image should be 210x140 pixels and the large 585x220 pixels, both with square corners and no padding.  Additional details on [promotional images](http://code.google.com/chrome/webstore/docs/images.html#promo) can be found in the Chrome Web Store documentation.

### Using the Chrome Web Store badge

[![](/assets/ChromeWebStore_Badge_v2_206x58.png "ChromeWebStore_Badge_v2_206x58")](/assets/ChromeWebStore_Badge_v2_206x58.png)On your application home page, you can let others know that your app is available in the Chrome Web Store by using the "[Available in the Chrome Web Store](http://code.google.com/chrome/webstore/branding.html#badge)" badge on your site and even going so far as to do browser sniffing to provide Chrome users with additional messaging. Be sure to check out

## Conclusion

There’s a lot you can do to make sure that you make a great first impression with your Chrome Web Store listing that encourages users to buy or install your application.  Good luck, and let’s go build some cool web apps!

**[Update]** - thanks to [@mikewest](http://twitter.com/mikewest) for pointing out a few grammatical and other mistakes!

**[Update2]** - [@sethladd](http://twitter.com/sethladd) reminded me that he's got a great blog post titled [13 Tips for a Great Chrome Web Store Listing Page](http://blog.sethladd.com/2010/11/12-tips-for-great-chrome-web-store.html)
