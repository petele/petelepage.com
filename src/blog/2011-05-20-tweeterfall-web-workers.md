---
layout: post
title: TweeterFall - Web Workers
date: '2011-05-20 10:29:12 -0400'
categories: blog
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
  date: '2012-01-03 08:17:50 -0500'
  content: "Great example. \r\n\r\nYou could explore the idea of <a href=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html#shared-state-using-a-shared-worker\"
    rel=\"nofollow\">shared workers</a>, with them single shared worker could provide
    tweets to all windows, with one update stream it would be smoother experience."
---
![](/assets/unresponsive-300x154.png "unresponsive")How often have you seen this dialog, or something similar - telling you that some scripts on a page are taking too long while your browser has become completely unresponsive.  Because JavaScript runs in the same thread as the rest of the browser UI, we're often faced with the challenge of being unable to run any complex or long running JavaScript without the fear of blocking the browser.  That's where web workers come in.

Web Workers are part of the HTML5 specification and allow you to run scripts in the background, independently of the main browser thread. This means that you can do complex calculations or run scripts that may take a while to run without yielding to keep the page responsive.  The [W3C spec](http://dev.w3.org/html5/workers/) has some great examples of use cases and other helpful descriptions that are worth reading for deeper details.  It also notes that workers are relatively heavy weight and are not intended to be used in large numbers.

In order to to maintain thread safety, workers run in an effective sandbox, which means they don't have access to the DOM or many other components.  To get information back and forth between the worker and the main application, we need to use the postMessage method and listen for message events.

In TweeterFall, we used a worker thread poll Twitter for new tweets and then we 'pushed' those new tweets to the main thread.  Let's have a look how we used workers.

### Starting &amp; Stopping the Worker

We only ever have one working running in our application, and to maintain an easy handle to it, we defined it's variable in the global scope.  We then had two methods that would handle how the worker would behave - `startWorker()` and `stopWorker()`.  The `startWorker()` method takes a parameter that provides information about the username or list that we want to pull tweets from, how often we should poll Twitter and the ID of the last tweet we saw.

{% highlight javascript %}
var myWorker;
function startWorker(settings) {
  settings.cmd = "start";
  settings.lastTweetID = lastTweetID();
  console.log("WebWorker: Starting", settings);
  myWorker = new Worker("scripts/worker.js");
  myWorker.addEventListener("message", newTweetHandler, false);
  myWorker.postMessage(settings);
}

function stopWorker() {
  if (myWorker != undefined) {
    console.log("WebWorker: Terminating");
    myWorker.terminate();
    myWorker = null;
  }
}
{% endhighlight %}

In our `startWorker()` thread, we create the new worker with `myWorker = new Worker("scripts/worker.js");`, and then add an event listener and listen for any messages that the worker wants to pass back to us - this is the only way we're going to be able to communicate to the worker because it's working off in it's own little isolated world.  At this point, the worker exists, and if it wants to tell us anything, we're ready to listen, but now we need to tell it to do something, which is the `myWorker.postMessage(settings);`.

Stopping our worker is pretty similar, we check to make sure that we have a valid object, and as long as we do, `.terminate()` will immediately close the worker without giving it an opportunity to shut down properly or clean up after itself.  This works in our case because we don't have anything in memory and we're not doing any calculations of any kind.  If you may need to save state or want to clean up after yourself, the better way to shut down would be to send a stop message via `.postMessage()` and within your worker thread, shut down gracefully by calling `self.close();` after completing any clean up.

### The Worker Thread

Inside our worker thread, we need to set up an event listener to listen for messages from our parent thread and any other code that we want to execute.

{% highlight javascript %}
self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage("Worker: Starting");
      setConfig(data);
      readTweets();
      break;
    case 'stop':
      self.postMessage("Worker: Stopping");
      self.close();
      break;
    default:
      self.postMessage("Worker: Error - Unknown Command");
  };
}, false);
{% endhighlight %}

Our event listener listens for messages from the parent and will start or stop the worker as necessary.  When we get the start command, we parse the settings data (`setConfig`), and then start reading tweets (`readTweets()`).  For sake of readability, I'll skip the code we used for `setConfig()`, but it's easy enough to find if you want it.

{% highlight javascript %}
function getURL() {
  var sinceID = "";
  if (parseInt(lastKnownTweetID, 10) > 0) {
    sinceID = "&since_id=" + lastKnownTweetID;
  }
  if (typeof userList === 'undefined') {
    return 'http://twitter.com/statuses/user_timeline/' + twitterUser
      + '.json?count=' + tweetCount+ '&callback=processTweets' + sinceID;
  } else {
    //For a list
    return 'http://api.twitter.com/1/' + twitterUser + '/lists/' +
      userList + '/statuses.json?callback=processTweets' + sinceID;
  }
}

function readTweets() {
  try {
    var url = getURL();
    self.postMessage("Worker: Attempting To Read Tweets From - " + url);
    importScripts(url);
  }
  catch (e) {
    self.postMessage("Worker: Error - " + e.message);
    setTimeout(readTweets, 120000);
  }
}
{% endhighlight %}

`readTweets()` is the function that does the dirty work, making a JSONP call to Twitter that requests the latest tweets.  We encapsulated the URL generation into it's own method so that we could use it even if we weren't using workers.  Because we don't have access to the DOM, we can't just insert a `&lt;script&gt;` block, so after getting the URL, we call `importScripts(url);`, which makes an synchronous call and injects the result into the worker.  If we run into any problems, like over capacity, not being able to reach Twitter or anything else, it's caught in the catch block, and we wait two minutes before trying again.  Here's the JSONP call we make [http://api.twitter.com/1/petele/lists/chromedevrel-11/statuses.json?callBack=processTweets](http://api.twitter.com/1/petele/lists/chromedevrel-11/statuses.json?callBack=processTweets).

The request we sent to Twitter includes `?callback=processTweets` in the query string which will cause `processTweets()` to be executed once we've pulled the new tweets from Twitter.

{% highlight javascript %}
function processTweets(data) {
  var len = data.length;
  for (var i = 0; i &lt; len; i++) {
    if (data[i].id_str >= lastKnownTweetID) {
      lastKnownTweetID = data[i].id_str;
    }
  }
  returnTweets(data);
}

function returnTweets(data) {
  if (data.length > 0) {
    self.postMessage("Worker: New Tweets - " + data.length);
    self.postMessage(data);
  } else {
    self.postMessage("Worker: New Tweets - 0");
  }
  setTimeout(readTweets, updateDelay);
}
{% endhighlight %}

`processTweets()` enumerates all of the tweets we got back to find the most recent tweet ID.  That way, when we ask Twitter again later for tweets, we're only asking for the ones that we haven't seen.  Once we've done that, we call `returnTweets()` to push the new tweets back to the application.  We could have merged `processTweets()` and `returnTweets()`, and I don't remember why I decided to do it as two separate methods.  Once we're returned the tweets via `returnTweets()` we use `setTimeout()` to call `readTweets()` again.

### A couple of quick tips

A couple things to remember about web workers, no DOM access means that you can't manipulate the DOM, so that means that if you want to create new UI components in threads, you can, but you need to do it in the thread, and then pass that back to the main application via `postMessage()`.  Unfortunately, it also means that jQuery doesn't work in threads, so generating those UI components becomes a little more complex.  I've heard rumors of a worker safe jQuery library, but haven't seen it yet.  Hopefully! :)

The other good thing to know is that you can debug works in the Chrome Developer Tools by clicking on the Scripts tab, and scrolling down in the column on the right to Workers and clicking on the debug checkbox.

### Summary

I found using workers to be really easy, and a good way of handling this.  There are plenty of other good ways to use workers - and it gives us some pretty good power to be able to push complex work down to the client.  Especially as browsers JavaScript engines are getting faster and faster.

### Additional Resources

*   [Mozilla Developer Center - Using Web Workers](https://developer.mozilla.org/en/using_web_workers)
*   [W3C Web Workers Spec](http://dev.w3.org/html5/workers/)
*   [Web Workers on Wikipedia](http://en.wikipedia.org/wiki/Web_Workers)
*   [HTML5Rocks Web Workers Tutorial](http://www.html5rocks.com/tutorials/workers/basics/)