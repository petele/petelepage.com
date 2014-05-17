---
layout: post
status: publish
published: true
title: TweeterFall - Web Workers
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2566
wordpress_url: http://petelepage.com/blog/?p=2566
date: '2011-05-20 10:29:12 -0400'
date_gmt: '2011-05-20 17:29:12 -0400'
categories:
- Web Design &amp; Development
- HTML5
tags:
- JavaScript
- CodeSample
- HTML5
- HowTo
- Web Workers
- Workers
- webWorker
comments:
- id: 4804
  author: Ciantic
  author_email: ciantic@oksidi.com
  author_url: ''
  date: '2012-01-03 08:17:50 -0500'
  date_gmt: '2012-01-03 16:17:50 -0500'
  content: "Great example. \r\n\r\nYou could explore the idea of <a href=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html#shared-state-using-a-shared-worker\"
    rel=\"nofollow\">shared workers</a>, with them single shared worker could provide
    tweets to all windows, with one update stream it would be smoother experience."
---
<p><img src="http://petelepage.com/blog/wp-content/uploads/2011/05/unresponsive-300x154.png" alt="" title="unresponsive" width="300" height="154" class="alignleft size-medium wp-image-2567" />How often have you seen this dialog, or something similar - telling you that some scripts on a page are taking too long while your browser has become completely unresponsive.  Because JavaScript runs in the same thread as the rest of the browser UI, we're often faced with the challenge of being unable to run any complex or long running JavaScript without the fear of blocking the browser.  That's where web workers come in.</p>
<p>Web Workers are part of the HTML5 specification and allow you to run scripts in the background, independently of the main browser thread. This means that you can do complex calculations or run scripts that may take a while to run without yielding to keep the page responsive.  The <a href="http://dev.w3.org/html5/workers/">W3C spec</a> has some great examples of use cases and other helpful descriptions that are worth reading for deeper details.  It also notes that workers are relatively heavy weight and are not intended to be used in large numbers.</p>
<p>In order to to maintain thread safety, workers run in an effective sandbox, which means they don't have access to the DOM or many other components.  To get information back and forth between the worker and the main application, we need to use the postMessage method and listen for message events.</p>
<p>In TweeterFall, we used a worker thread poll Twitter for new tweets and then we 'pushed' those new tweets to the main thread.  Let's have a look how we used workers.</p>
<h3>Starting &amp; Stopping the Worker</h3>
<p>We only ever have one working running in our application, and to maintain an easy handle to it, we defined it's variable in the global scope.  We then had two methods that would handle how the worker would behave - <code>startWorker()</code> and <code>stopWorker()</code>.  The <code>startWorker()</code> method takes a parameter that provides information about the username or list that we want to pull tweets from, how often we should poll Twitter and the ID of the last tweet we saw.</p>
<p>[javascript]<br />
var myWorker;</p>
<p>function startWorker(settings) {<br />
  settings.cmd = &quot;start&quot;;<br />
  settings.lastTweetID = lastTweetID();<br />
  console.log(&quot;WebWorker: Starting&quot;, settings);<br />
  myWorker = new Worker(&quot;scripts/worker.js&quot;);<br />
  myWorker.addEventListener(&quot;message&quot;, newTweetHandler, false);<br />
  myWorker.postMessage(settings);<br />
}</p>
<p>function stopWorker() {<br />
  if (myWorker != undefined) {<br />
    console.log(&quot;WebWorker: Terminating&quot;);<br />
    myWorker.terminate();<br />
    myWorker = null;<br />
  }<br />
}<br />
[/javascript]</p>
<p>In our <code>startWorker()</code> thread, we create the new worker with <code>myWorker = new Worker("scripts/worker.js");</code>, and then add an event listener and listen for any messages that the worker wants to pass back to us - this is the only way we're going to be able to communicate to the worker because it's working off in it's own little isolated world.  At this point, the worker exists, and if it wants to tell us anything, we're ready to listen, but now we need to tell it to do something, which is the <code>myWorker.postMessage(settings);</code>.</p>
<p>Stopping our worker is pretty similar, we check to make sure that we have a valid object, and as long as we do, <code>.terminate()</code> will immediately close the worker without giving it an opportunity to shut down properly or clean up after itself.  This works in our case because we don't have anything in memory and we're not doing any calculations of any kind.  If you may need to save state or want to clean up after yourself, the better way to shut down would be to send a stop message via <code>.postMessage()</code> and within your worker thread, shut down gracefully by calling <code>self.close();</code> after completing any clean up.</p>
<h3>The Worker Thread</h3>
<p>Inside our worker thread, we need to set up an event listener to listen for messages from our parent thread and any other code that we want to execute.</p>
<p>[javascript]<br />
self.addEventListener('message', function(e) {<br />
	var data = e.data;<br />
	switch (data.cmd) {<br />
		case 'start':<br />
		  self.postMessage(&quot;Worker: Starting&quot;);<br />
			setConfig(data);<br />
			readTweets();<br />
			break;<br />
		case 'stop':<br />
		  self.postMessage(&quot;Worker: Stopping&quot;);<br />
			self.close();<br />
			break;<br />
		default:<br />
		  self.postMessage(&quot;Worker: Error - Unknown Command&quot;);<br />
	};<br />
}, false);<br />
[/javascript]</p>
<p>Our event listener listens for messages from the parent and will start or stop the worker as necessary.  When we get the start command, we parse the settings data (<code>setConfig</code>), and then start reading tweets (<code>readTweets()</code>).  For sake of readability, I'll skip the code we used for <code>setConfig()</code>, but it's easy enough to find if you want it.</p>
<p>[javascript]<br />
function getURL() {<br />
  var sinceID = &quot;&quot;;<br />
  if (parseInt(lastKnownTweetID, 10) &gt; 0) {<br />
    sinceID = &quot;&amp;since_id=&quot; + lastKnownTweetID;<br />
  }<br />
  if (typeof userList === 'undefined') {<br />
    return 'http://twitter.com/statuses/user_timeline/' + twitterUser<br />
      + '.json?count=' + tweetCount+ '&amp;callback=processTweets' + sinceID;<br />
  } else {<br />
    //For a list<br />
    return 'http://api.twitter.com/1/' + twitterUser + '/lists/' +<br />
      userList + '/statuses.json?callback=processTweets' + sinceID;<br />
  }<br />
}</p>
<p>function readTweets() {<br />
  try {<br />
    var url = getURL();<br />
    self.postMessage(&quot;Worker: Attempting To Read Tweets From - &quot; + url);<br />
    importScripts(url);<br />
  }<br />
  catch (e) {<br />
    self.postMessage(&quot;Worker: Error - &quot; + e.message);<br />
    setTimeout(readTweets, 120000);<br />
  }<br />
}<br />
[/javascript]</p>
<p><code>readTweets()</code> is the function that does the dirty work, making a JSONP call to Twitter that requests the latest tweets.  We encapsulated the URL generation into it's own method so that we could use it even if we weren't using workers.  Because we don't have access to the DOM, we can't just insert a <code>&lt;script&gt;</code> block, so after getting the URL, we call <code>importScripts(url);</code>, which makes an synchronous call and injects the result into the worker.  If we run into any problems, like over capacity, not being able to reach Twitter or anything else, it's caught in the catch block, and we wait two minutes before trying again.  Here's the JSONP call we make <a href="http://api.twitter.com/1/petele/lists/chromedevrel-11/statuses.json?callBack=processTweets">http://api.twitter.com/1/petele/lists/chromedevrel-11/statuses.json?callBack=processTweets</a>.</p>
<p>The request we sent to Twitter includes <code>?callback=processTweets</code> in the query string which will cause <code>processTweets()</code> to be executed once we've pulled the new tweets from Twitter.</p>
<p>[javascript]<br />
function processTweets(data) {<br />
  var len = data.length;<br />
  for (var i = 0; i &lt; len; i++) {<br />
    if (data[i].id_str &gt;= lastKnownTweetID) {<br />
      lastKnownTweetID = data[i].id_str;<br />
    }<br />
  }<br />
  returnTweets(data);<br />
}</p>
<p>function returnTweets(data) {<br />
  if (data.length &gt; 0) {<br />
    self.postMessage(&quot;Worker: New Tweets - &quot; + data.length);<br />
    self.postMessage(data);<br />
  } else {<br />
    self.postMessage(&quot;Worker: New Tweets - 0&quot;);<br />
  }<br />
  setTimeout(readTweets, updateDelay);<br />
}<br />
[/javascript]</p>
<p><code>processTweets()</code> enumerates all of the tweets we got back to find the most recent tweet ID.  That way, when we ask Twitter again later for tweets, we're only asking for the ones that we haven't seen.  Once we've done that, we call <code>returnTweets()</code> to push the new tweets back to the application.  We could have merged <code>processTweets()</code> and <code>returnTweets()</code>, and I don't remember why I decided to do it as two separate methods.  Once we're returned the tweets via <code>returnTweets()</code> we use <code>setTimeout()</code> to call <code>readTweets()</code> again.  </p>
<h3>A couple of quick tips</h3>
<p>A couple things to remember about web workers, no DOM access means that you can't manipulate the DOM, so that means that if you want to create new UI components in threads, you can, but you need to do it in the thread, and then pass that back to the main application via <code>postMessage()</code>.  Unfortunately, it also means that jQuery doesn't work in threads, so generating those UI components becomes a little more complex.  I've heard rumors of a worker safe jQuery library, but haven't seen it yet.  Hopefully! :)  </p>
<p>The other good thing to know is that you can debug works in the Chrome Developer Tools by clicking on the Scripts tab, and scrolling down in the column on the right to Workers and clicking on the debug checkbox.   </p>
<h3>Summary</h3>
<p>I found using workers to be really easy, and a good way of handling this.  There are plenty of other good ways to use workers - and it gives us some pretty good power to be able to push complex work down to the client.  Especially as browsers JavaScript engines are getting faster and faster.  </p>
<h3>Additional Resources</h3>
<ul>
<li><a href="https://developer.mozilla.org/en/using_web_workers">Mozilla Developer Center - Using Web Workers</a></li>
<li><a href="http://dev.w3.org/html5/workers/">W3C Web Workers Spec</a></li>
<li><a href="http://en.wikipedia.org/wiki/Web_Workers">Web Workers on Wikipedia</a></li>
<li><a href="http://www.html5rocks.com/tutorials/workers/basics/">HTML5Rocks Web Workers Tutorial</a></li>
</ul>
