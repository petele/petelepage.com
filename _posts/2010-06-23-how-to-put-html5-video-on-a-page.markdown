---
layout: post
title: 'How To: Put HTML5 &lt;video&gt; On A Page'
date: '2010-06-23 23:41:42 -0400'
categories: blog
tags:
- IE9
- Web Design
- CodeSample
- HTML5
- HowTo
- xWeb
- video
- h264
- encode
- PP3
- ForMSDNIEDC
comments:
- id: 1722
  date: '2010-06-24 03:13:37 -0400'
  content: "Hi Pete, nice article.\r\n\r\nYou've not mentioned the <code>source</code>
    element that can be a child of . You can take the pointer to the video out of
    the <code>video</code> element (so just <code>&lt;video controls&gt;</code>) and
    have two child <code>source</code> elements:\r\n\r\n<code>&lt;source src=skydive.mp4
    type=video/mp4&gt;</code> for IE9, Safari and Chrome and\r\n\r\n<code>&lt;source
    src=skydive.ogv type=video/ogg&gt;</code> to point to a royalty-free Ogg video
    for Opera, Firefox and Chrome (Chrome supports royalty-free and royalty-encumbered
    codecs).\r\n\r\nOr, to be up with the real cool kids, you could use the .webM
    container and codecs that Google open-sourced last month, which has similar quality
    to the h.264 standard but has no royalties associated with it. (See www.webmproject.org
    for more info),\r\n\r\nThat way, your same markup will deliver the videos to all
    browsers that support native HTML5 video.\r\n\r\nHope this helps."
- id: 1724
  date: '2010-06-24 11:01:07 -0400'
  content: "Hey Bruce!\n\nThanks for calling this out!  The video tag is pretty cool
    in that you can provide lots of different fall backs, and different sources!  I'm
    looking forward to playing with this a lot more!  \n\nAnd one of these days, we
    need to get an H264 and OGG video of you and I out drinking - it's been too long!
    :)"
- id: 1725
  date: '2010-06-24 11:13:57 -0400'
  content: it's a deal, Pete. I fear that, as both of us are diminuitive gentlemen
    are in the "lover not a fighter" category, whatever format the video in, it'll
    be about 1 minute long.
- id: 1730
  date: '2010-06-26 21:30:52 -0400'
  content: "Oh man these videos are way better than yet another Big Buck Bunny or
    Sintel trailer. \n\nVery nice, Pete."
- id: 4197
  date: '2011-07-10 23:37:23 -0400'
  content: |-
    Hey Pete,

    I was going through the post and the sad panda notification appeared but when I click the video it started the video. Can you pls. explain why the notification shows up when html5 video is supported and i am using Chrome (12.0.742.112) as browser.

    Another thing I noticed about html5 videos generally is that html5 video when clicked doesn't start immediately and when we use the video scrubber it starts. Can you pls. explain that too.

    Thanks &amp; Regards,
    Sagar S. Ranpise
- id: 4198
  date: '2011-07-11 00:06:11 -0400'
  content: Just Saw your REMEMBER Notification so got answer to my first question
    but still not able to understand why it doesn't start immediately when clicked
    even locally
- id: 4201
  date: '2011-07-11 07:24:18 -0400'
  content: "<blockquote>\n<a href=\"#comment-4197\" rel=\"nofollow\">\n<strong><em>Sagar
    Ranpise:</em></strong>\n</a>\n Another thing I noticed about html5 videos generally
    is that html5 video when clicked doesn’t start immediately and when we use the
    video scrubber it starts. Can you pls. explain that too.Thanks &amp; Regards,
    Sagar S. Ranpise</blockquote>\n\nHey Sagar,\n\nTo get the video able to start
    more quickly, the easiest thing to do is add the preload=\"auto\" attribute to
    the video tag.  In my examples, I set the preload to none which prevents the browser
    from preloading the video.  That's helpful when (for example on a blog), you aren't
    positive that people are going to want to watch the video and want to be respectful
    of bandwidth.  \n\nHope that helps!\nPEte"
---

This week has been kind of fun, we’ve been getting ready for the release of IE9 Platform Preview 3, and around 2pm PST today – it was released!  The reception has been awesome so far!  This is the build that supports &lt;video&gt;, &lt;audio&gt; and uber cool – &lt;canvas&gt;!

I’m going to save &lt;canvas&gt; for another post but wanted to get a post out tonight about some quick ways to try out the &lt;video&gt; tag and ways to encode H.264 video.

<div style="padding:5px;border: 1px solid red;">
**REMEMBER**: This is still an early preview release and there may be some fun issues...  For example, in my demos below, IE9 is showing both the video and the non-video content, it should only be showing the video.  That's why these are platform previews! :)
</div>

## Putting &lt;video&gt; on your page is EASY!

{% highlight html %}

    &lt;video poster=&quot;http://www2.petelepage.com/videos/poster.jpg&quot; src=&quot;http://www2.petelepage.com/videos/skydive.mp4&quot; preload=&quot;none&quot; controls style=&quot;border-radius: 10px; border: 5px solid black;&quot;&gt;

        &lt;div style=&quot;margin:5px;padding:5px;border:1px solid black;&quot;&gt;

            &lt;h2&gt;Sad Panda: HTML5 Video Not Supported&lt;/h2&gt;

            &lt;p&gt;This browser doesn't support HTML5 video with the H.264 video codec, so instead, you get the generic fall back.&lt;/p&gt;

            &lt;p&gt;You could install the &lt;a href=&quot;http://ietestdrive.com&quot;&gt;IE9 Platform Preview&lt;/a&gt;&lt;/p&gt;

            &lt;p&gt;In reality, you should probably put a Flash or Silverlight fall back here, 'cause not everyone will install a new browser just to see my/your video!&lt;/p&gt;

        &lt;/div&gt;

    &lt;/video&gt;

{% endhighlight %}

### Results In...

    <video poster="http://www2.petelepage.com/videos/poster.jpg" src="http://www2.petelepage.com/videos/skydive.mp4" preload="none" controls style="border-radius: 10px; border: 5px solid black;">

<div style="margin:5px;padding:5px;border:1px solid black;">

## Sad Panda: HTML5 Video Not Supported

This browser doesn't support HTML5 video with the H.264 video codec, so instead, you get the generic fall back.

You could install the [IE9 Platform Preview](http://ietestdrive.com)

In reality, you should probably put a Flash or Silverlight fall back here, 'cause not everyone will install a new browser just to see my/your video! :)

</p></div>

    </video>

The video above was shot while I was in Australia earlier this year, a bunch of my friends and I went sky diving just outside of Sydney to celebrate Christian’s birthday.  Eric (the second one) compiled all of our videos together into one single video, put a sound track to it, and made this great video!  It’s about 35 megs for the 5:30 minutes worth of video. It won't start until you hit play, so it shouldn't cause stuff to start playing without your input!

### So What Does Everything Mean?

*   _**preload="none"**_ tells the browser not to preload the video file unless the user hit's the play button - saves on bandwidth.
*   _**poster=""**_ indicated where the browser should load the poster file from, that's the image the browser shows until you hit play, or it finishes loading the video file
*   _**src=""**_ - well, that one's pretty obvious, it's the video you're trying to load
*   _**controls**_ - tells the browser to show the video controls. In IE9 PP3, if the video width is less than about 400px, it won't show the controls because the image is too small, I fought with that one for more than a few minutes! Grrr! Also, I'm using the more relaxed HTML5 syntax here, and not giving the attribute a value, you could do controls="controls" if you want to make sure your code validates as expected.

You could also add...

*   _**autoplay**_ - plays the video without the user having to click the play button.
*   _**loop**_ - loops the video infinitely, or until the user hits the stop button, or navigates away from the page.
*   _**width** _or_ **height**_ - sets the width and height of the video element.

## Encoding Videos

Getting the &lt;video&gt; element on your page is the easiest part! How big is the video, both from a screen size perspective, and from a file download size is the more challenging part! Is it encoded with the right encoder? Some point and shoot cameras record in H.264 mode, some (like my Canon SD780 IS) don’t ![Sad smile](/assets/wlEmoticonsadsmile1.png).  Encoding the video is likely the most difficult!

So how what’s the best way to resize and encode your video? There are a bunch of tools available today, some free, some paid. Sadly, the free Windows Live Movie Maker won’t encode videos with the H.264 encoder . I’m going to walk through how to do this with [Expression Encoder 4 Pro](http://www.microsoft.com/expression/products/EncoderPro_Overview.aspx). It’s part of the Expression Studio set of tools. If you’re an MSDN subscriber, you can download it as part of your MSDN subscription. Otherwise, you can download the 60 day free trial from the [Expression Site](http://www.microsoft.com/expression/products/Purchase.aspx), after that you’ll need to purchase a license for it.

For the rest of the walk through, I’m going to assume you’ve already got Expression Encoder 4 Pro installed, and you’ve got the video file that you want to encode ready to go.

1.  Start Expression Media Encoder, when it starts, it’ll prompt you with a “Load A New Project” dialog box.  Since we’re going to put our video online with the HTML5 video tag, not Silverlight, you want to create a new Transcoding Project.

    [![xmedia1](/assets/xmedia1_thumb.jpg "xmedia1")](/assets/xmedia1.jpg)
2.  Now that we’re in Expression Media Encoder, we need to import the video file that we want to encode.  Under the _File_ menu, choose _Import_ and find the file that you want to encode.  It’ll take a second to analyze and for Expression Encoder to read the file completely (especially if it’s a big file you want to encode).

    [![XE1](/assets/XE1_thumb1.jpg "XE1")](/assets/XE11.jpg)
3.  Now we need to chose our output encoding settings, thankfully Encoder 4 Pro makes that pretty easy for us.  [![xmedia-encoding-settings](/assets/xmediaencodingsettings_thumb.png "xmedia-encoding-settings")](/assets/xmediaencodingsettings.png)In the _Presets_ box in the left, there are a bunch of pre-configured settings you can choose from.  Video can get really big, depending on the quality and length of video, so unless I need super high quality, I typically choose one of the _Encoding For Online Services_ profiles, and from there I usually use an standard def profile, but again, you’ll want to experiment with this depending on your needs and the bandwidth of your users and your server.  For this example, I chose the “_H.264 YouTube SD_” profile, which results in a file that’s about 4megs per minute of video.  Be sure to click _Apply_ once you’ve chosen your profile to apply the settings.  You’ll notice that the area in red now defines the output format, and other information.  You can go in and expand out any of those tabs to change how the video is encoded. The video that I’m encoding is 16:9, but you’ll notice the output format is 4:3.  Because of that, Expression Encoder will automatically add the black bars above and below the video, and give me a letter box look.
4.  [![xmedia-output](/assets/xmediaoutput_thumb.png "xmedia-output")](/assets/xmediaoutput.png)The other important tab you’ll want to make sure you’ve got set up how you want it is the _Output_ tab – this is where Expression Web will save file that it just encoded. I change the output directory from my user folder to the web folder that I’m working on, and also turn off the _Sub-folder by Job ID_ check box.  I don’t use Job ID’s, so there’s no need for that.
5.  We’re now ready to encode!  Push the _Encode_ button on the bottom left part of the screen and Expression Encoder 4 Pro will start it’s magic…  After a couple of minutes, you’re file will be done and ready to go!

## Other Resources

There’s a fantastic post on [DiveIntoHTML5.org](http://diveintohtml5.org/) with some really great info about the video tag and how to use it that I’d highly recommend checking out at [http://diveintohtml5.org/video.html](http://diveintohtml5.org/video.html "http://diveintohtml5.org/video.html").  On there, he also talks about other encoders that you can use (including some of the free ones), and also the different issues surrounding codecs.

## Some Other Fun Videos

I shot these videos last January while I was in [St. Maarten](http://www.pjiae.com/).  If you’re an airplane buff like I am, it’s a place you HAVE to go at some point, watching a 747-400 land or take off less than 100 feet from you is AMAZING!  I never knew a Dash-8-Q400 could give such a good exfoliation when standing behind it ![Smile](/assets/wlEmoticonsmile2.png)

    <video src="http://www2.petelepage.com/videos/landing.mp4" controls preload="none">

<div style="margin:5px;padding:5px;border:1px solid black;">

## Sad Panda: HTML5 Video Not Supported

This browser doesn't support HTML5 video with the H.264 video codec, so instead, you get the generic fall back.

</p></div>

    </video>

    <video src="http://www2.petelepage.com/videos/q400_to.mp4" controls preload="none">

<div style="margin:5px;padding:5px;border:1px solid black;">

## Sad Panda: HTML5 Video Not Supported

This browser doesn't support HTML5 video with the H.264 video codec, so instead, you get the generic fall back.

</p></div>

    </video>

Enjoy!

PEte

**PS:** I tested these links and videos in Internet Explorer 9 Platform Preview 3, and Chrome 5.

**[UPDATE 6/24/2010 @ 3:42PM PST]** I added the preload="none" attribute to all the videos so browsers that do support video don't download the videos unless you ask for them.