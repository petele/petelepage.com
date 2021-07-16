---
layout: post
title: The Anatomy of a Great Chrome Web Store Listing (Updated)
date: 2011-09-29
category: web development
tags:
- Web Design
- HowTo
- TipsAndTricks
- Chrome Web Store
- BestPractices
- Web App
---
[![Chrome Web Store - Shopping Bag](/assets/cws-bag.png "Chrome Web Store")](/assets/cws-bag.png)

A couple of months ago, I blogged about the [anatomy of a great Chrome Web Store listing](/blog/2011/06/the-anatomy-of-a-great-chrome-web-store-listing.html) - and it looks like it's time to do an update. A couple of weeks ago, we changed the UI on the developer dashboard and started asking for new screen shots, and promotion images. Not only is the new UI a little easier to use and understand, but soon we'll be launching a new user experience for consumers - which will require new assets from you. I'd strongly recommend updating your assets sooner than later to make sure that when we do roll out the new UI, you're ready for it, and are looking great.

Since the consumer UI will change in the near future, I've listed my suggestions in the order that they appear within the Developer Dashboard and included screenshots from both the [Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) and the current consumer UI. I'll update the screenshots when the new UI launches.

## Let's dive in

Your first chance to make a great impression with a new user is often on your application listing page in the [Chrome Web Store](https://chrome.google.com/webstore). People will make a split second decision whether to install your application based on what you put on there, so it's important to make a great first impression. Let's take a look at what makes a great Chrome Web Store application listing. This updated guide highlights a couple key components of a great Chrome Web Store listing. I tried not to repeat content from the documentation, but instead tease out the important parts or best practices. Be sure to follow the links for additional resources or details.

## A Couple Quick Examples

[![](/assets/tweetdeck-300x214.png "TweetDeck listing")](/assets/tweetdeck.png)[![](/assets/goog-maps-300x208.png "Google Maps listing")](/assets/goog-maps.png)

I think both [TweetDeck](http://bit.ly/oPfKaI) and [Google Maps](http://bit.ly/oEYMpj) do a great job of providing a compelling, and interesting listing, so we'll use those as our primary examples.

## Application Name and Short Description

[![](/assets/appname-300x96.png "Google Maps CWS Header")](/assets/appname.png)The application manifest file ([manifest.json](http://bit.ly/oxope3)) has a property for a short description of your application. Use this to tell users about what your application does and why they should get excited and care about it. It's limited to 132 characters, and cannot include any HTML. For example, the description for Angry Birds is simply "Birds! Slingshots! Destruction! Feathers! Fun!" For Gmail, it's "Fast, searchable email with less spam."

You must also specify the application name within the manifest file - be sure to specify only the name and not any taglines or things that would be more appropriate for the short description.  In the current UI, the +1 button will also be displayed in this section, another reason to not include tag lines or other stuff in your application name.

One other good tip - try to use 'simple' characters in your application name, and don't get too fancy including special unicode characters.  For example, if your app is named App<sup>2</sup>, use App2 instead of App<sup>2</sup>.  Currently search sees those two as different app names, and if you search for App2, you won't find App<sup>2</sup>.

## Detailed Description

Beyond the concise description set in the manifest file, a detailed description can be provided via the Chrome Web Store Developer Dashboard. This is your space to really excite your potential users about your application and convince them to install or buy it. If you've already built a landing page on your web site, you can likely leverage what you've already written here.[![](/assets/description-300x136.png "Chrome Web Store App Description")](/assets/description.png)

You should provide a detailed description of your application, including it's features, quotes from great reviews, information about recent updates, and any other information that might be relevant to potential users. If your application has a freemium or free trial, be sure to tell users the differences between the paid and free experience so they're not surprised or disappointed by functionality that they might not have access to.

Remember, this description will be searchable, so be sure to use any key words in your description that might help users to find your application if they try searching for it without knowing the name of it.

If your product is compatible with a Google product, make reference to that Google product by using the text "for", "for use with", or "compatible with", and be sure to include the ™ symbol with the Google trademark. Example: "for Google Chrome™". For other third party products, be sure to check any requirements that they may have when describing your application.

I also recommend including a short description of things that have changed since the last update, including any major bug fixes and such. This helps keep the user informed and tells them that you're invested in the app and listening to their feedback.

## Supplying Icons

[![](/assets/maps-icon.png "Google Maps application icon")](/assets/maps-icon.png)When you package and upload your application to the Chrome Web Store, it needs to include at least the manifest file, and an application icon. The icon that you include in the ZIP file is the icon that is used on the new tab page in Chrome after the application has been installed. Your icon should be eye catching and representative of your application. You also need to supply a second icon that is uploaded via the Developer Dashboard. This icon is the one that is shown in the Chrome Web Store - through search, browse and currently on you application listing page.

Personally, I would use the same icon in both places because otherwise it I think it gets confusing for users, they see one icon when they install your application and then can't find it in their new tab page because you've used a different icon!

Remember, the icons are pretty small, so you can't be too complex or detailed. If your icon is not circular, we recommend you try to keep it within a 96x96 pixels box, with a 16 pixel per side transparent border. For circular icons, you can go up to 112x112 pixels. It's generally a good idea to avoid words or text because it makes localization difficult and often becomes difficult to read. One exception to this is that if your app name or company name is part of your logo, then it's probably okay to use.

Here are a couple of my favorite icons

[![](/assets/music.png "music")](/assets/music.png)[![](/assets/goodfood.png "goodfood")](/assets/goodfood.png)[![](/assets/word2.png "word2")](/assets/word2.png)

Check out the [Supplying Images](http://bit.ly/poes2F) of the Chrome Web Store docs for more info.

## Screenshots &amp; Promotional Images

[![](/assets/images-300x98.png "images")](/assets/images.png)We've done some work to increase the quality and provide you with more space to show off what your app does with the new screenshots and promotional images. The old images were simply too small to be able to really be useful or exciting for consumers. We've also done away with the customized header background.

Screenshots can be one of the most compelling factors in a user's decision to install or buy an application, so it's important to provide at least four or five screen shots that give a user a sense for how your application works, some of the features it offers and an idea of the different elements. You should always start with a beautiful screen shot that provides a detailed overview of the application experience first, and then drill into the additional elements. Make sure the screenshots show your application in use, so that users can see how the application works, and how they might use it. If you're displaying any kind of data from the user, be sure to use safe or sample data in the screenshots instead of blurring things out or accidentally sharing personally identifiable information.

Screen shots should be full bleed images with square corners that are 1280x800 pixels. Since not every user has a 30" display, you can count on these images being scaled smaller to fit within the Chrome Web Store UI, and the user's screen. With such large images, it's important to show your app both at a high level, but also include images of your app in detail. Be sure to not over-compress or scale images so that you can't see any of the detail. Further details about supplying screenshots are available in the Chrome Web Store documentation under Supplying Images. You can also provide locale specific screenshots if your app supports multiple locales.

### YouTube Videos &amp; Google Docs Presentations

A picture may be worth 1000 words, but video is worth many more. The Chrome Web Store allows you to add a YouTube video to the screen shot collection, allowing you to provide a richer way to show people your application, and convince them to install or buy it. Keep in mind that in many cases, people haven't yet made the decision to install or buy your application, and likely won't be willing to invest a lot of time, so optimize for a short, high quality overview that highlights the main features and will encourage people to try it.

### Promotional Images

We're always on the lookout for great web applications to feature throughout the Chrome Web Store. When we find them we use the promotional images, but if you don't have promotional images, we can't promote you! Also in the new UI, the small and large tiles will be featured more prominently across the site for all applications. Only the small marquee is required, but I'd strongly recommend providing all three.

All three promotional images should use the same branding and identity as the rest of the images that you supplied, and have a dark or medium background with light text and avoid any white or very light elements along the edges of the images. The small tile should be 440x280 pixels, the large tile 920x680 pixels, and a marquee tile that's 1400x560 pixels. All of the tiles should have square corners and with no padding. It's also a good idea to Additional details on [promotional images](http://bit.ly/plBiS9) can be found in the Chrome Web Store documentation.

## Verified Domain

[![](/assets/gojee-300x69.png "gojee")](/assets/gojee.png)

Verifying your domain via the [Google Webmaster Tools](http://bit.ly/qcybxL) is like adding a certificate of authenticity to something that you're going to buy in the store. A verified application tells potential users they're about the install a genuine, user experience from your site-and that they're not getting a cheap, or potentially unsafe knock-off. Also, be sure the domain name that you've verified and are using makes sense, and isn't a development or staging domain; which may scare away your users.

### Additional Links

[![](/assets/morelinks.png "morelinks")](/assets/morelinks.png)You can also provide your potential customers with additional resources that are on your site. Providing the URLs for description and support pages can improve your users' experience and help make this item's ratings and comments more meaningful. The "Link to website for your item" should point to the landing page of your website. You can also provide a link to the help or support section of your site via the "Link to support &amp; FAQ for your item"

## Categories

[![](/assets/category.png "TweetDeck Category Listing")](/assets/category.png)Putting your application into the most appropriate category will make it easy for users to find your application when they browse the store. You can choose up to two categories that are most appropriate for your application. You can find a [list](http://bit.ly/qDDFUS) of the different categories as well as a description and examples for each in the Chrome Web Store developer documentation.

Even though you can choose up to two categories, and your application will be listed under both, it will only show one category on the navigation breadcrumb when you view it in the [Chrome Web Store](http://bit.ly/qiYc9d).

## Other Helpful Components

### Version Number &amp; Last Updated

[![](/assets/morelinks.png "morelinks")](/assets/morelinks.png)One of the great features of web applications is the ease at which we can add new features, fix bugs and enhance the overall user experience. It's strongly recommended that you increment the version number in your manifest file and re-upload it to the Chrome Web Store any time you provide significant updates or bug fixes to your application. This ensures that the version number and last updated field on your application listing stay up to date, and users know that you're application is fresh, and that you're constantly working to make it better.

Also, when choosing a version number, it's a good idea to start at 1.0, or as close to it as you can so that people know your application is ready for real world use and that you're not something that's still in beta or may not work as expected. If you're not ready to be out of beta yet, that's okay, but provide a realistic version number that indicates how close you are to being out of beta. And be sure to stay away from version numbers like 0.0.0.1.

### Mature Content

If your application isn't very child friendly, then marking it as Mature Content is probably a good idea. For example, some first person shooter games may not be appropriate for children. When considering whether your application should be marked as mature or not, evaluate your entire application, including any user generated content that may appear. There's more info about ratings in the Ratings Guidelines section.

### Analytics

While providing your Google analytics token won't directly make the user experience any better, it will provide you with lots of data that you can use to understand who's using your app, how many people are installing it and more detailed information than is available through the number of users or the number of weekly installs.

<span class="Apple-style-span" style="font-size: 20px; line-height: normal;">Using the Chrome Web Store Badge</span>

[![](/assets/ChromeWebStore_Badge_v2_206x58.png "ChromeWebStore_Badge_v2_206x58")](/assets/ChromeWebStore_Badge_v2_206x58.png)On your application home page, you can let others know that your app is available in the Chrome Web Store by using the "[Available in the Chrome Web Store](http://bit.ly/qiBe4t)" badge on your site and even going so far as to do browser sniffing to provide Chrome users with additional messaging.

## Conclusion

There's a lot you can do to make sure that you make a great first impression with your Chrome Web Store listing that encourages users to buy or install your application. Good luck, and let's go build some cool web apps!  And of course, I'd be remiss if I didn't include a link to [@sethladd](http://bit.ly/nZ08Sd)'s [blog post](http://bit.ly/nfA6G9) about 13 great tips!
