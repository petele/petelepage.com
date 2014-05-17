---
layout: post
status: publish
published: true
title: 'About: DOM Storage'
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 2189
wordpress_url: http://petelepage.com/blog/2010/06/about-dom-storage/
date: '2010-06-11 17:30:46 -0400'
date_gmt: '2010-06-12 00:30:46 -0400'
categories:
- Web Design &amp; Development
- Internet Explorer
tags:
- HTML5
- localStorage
- sessionStorage
- ForMSDNIEDC
comments: []
---
<p>One of my sessions at TechEd 2010 this year was about advanced standards support in Internet Explorer 8.  The DOM Storage API (which used to be part of the HTML5 Spec but are now in their own spec), were introduced to Internet Explorer in version 8, and provide methods for storing data on the client in a secure manner using the Document Object Model (DOM). DOM Storage allows you to store name value pairs, and unlike cookies, you don’t need to round-trip the data with every request.  The other big difference is the quantity of data that you can store.  Cookies are limited to about 4k, and 20 name value pairs, whereas DOM Storage allows you to store up to 10 megabytes, with no effective limit on the number of name value pairs.  Data in the DOM Store also doesn’t expire, and is available unless the user clears their browser.</p>
<p>There are two types of storage, <a href="http://msdn.microsoft.com/en-us/library/cc197020(VS.85).aspx">sessionStorage</a> and <a href="http://msdn.microsoft.com/en-us/library/cc848902">localStorage</a>.  Session Storage is primarily intended for scenarios where the user is carrying out a single transaction.  Information that is put in the store is available across all windows tabs and frames for the entire session the browser stays open.  Local Storage persists across sessions, so even after closing and reopening the browser, the data is still available.</p>
<h3>Using The Storage APIs</h3>
<p>The Storage object use expando properties as the key.  As mentioned above, the data is name/value pairs, and only supports strings.  If you want to store data other than strings, you need to convert before storing it.  If you want to store binary data like images, Flash, Silverlight files and so forth, you can use <em>datauri</em> to display it on the screen.</p>
<h3>Session Storage</h3>
<p>As I mentioned already, session storage is great for circumstances where you need to store something on the machine only for that session, for example you might want to locally cache certain data so you don’t have to keep downloading it as the user moves through your site.  You might also use it for storing inputs the user may have provided on a previous page – maybe shopping cart information, or what comments a user has already seen.</p>
<div class="codeSample">sessionStorage.keyName = "hello";<br />
var result = sessionStorage.keyName;</div>
<h3>Local Storage</h3>
<p>Local Storage allows you to store information that goes beyond the session.  I might want to cache some of my user settings locally, so I don’t have to look them up every single time.  For example, I might store the users preferred name, their preferred color scheme and their favorite stocks, along with some historical data about those stocks.  That way, when the user arrives on my site, we don’t have to query that every single time.</p>
<div class="codeSample">localStorage.keyName = "Hi!";<br />
var local = localStorage.keyName;</div>
<h3>Storage Events</h3>
<p>Internet Explorer fires events when data is either stored or updated, so that you can be sure information is synchronized between multiple instances of the browser.  The <a href="http://msdn.microsoft.com/en-us/library/cc197059(VS.85).aspx">onstorage</a> is fired in a document when the storage area changes, and the <a href="http://msdn.microsoft.com/en-us/library/cc288674(VS.85).aspx">onstoragecommit</a> fires when Internet Explorer writes the localStorage data to disk.</p>
<h3>Security and Privacy Implications of DOM Storage</h3>
<p>Data in the local store is only available to sites within the domain in which they're called.  For example, if <a href="http://nocommonground.com">NoCommonGround.com</a> tries to access the localStorage data from PeteLePage.com, it will fail.  But, <a href="http://www.petelepage.com">www.PeteLePage.com</a> can access anything from <a href="http://petelepage.com">PeteLePage.com</a>.  There also isn't any way to restrict the data by path, so anywhere site within your domain will be able to access from the data store of your domain.  Even if you use key names that are hard to guess, there are APIs that allow you to enumerate the keys.</p>
<h3>Additional Resources</h3>
<p>You can find lots more information about DOM Storage in the following places:</p>
<ul>
<li><a href="http://www.w3.org/TR/html5/">W3C HTML5 Specification</a></li>
<li><a href="http://msdn.microsoft.com/en-us/library/cc197062(VS.85).aspx">MSDN DOM Store Details</a></li>
</ul>
<h3>Browser Support*</h3>
<table>
<thead>
<tr>
<th width="50%" valign="top">Browser</th>
<th width="25%" valign="top">Version Added</th>
<th width="25%" valign="top">Additional Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td valign="top">Internet Explorer</td>
<td valign="top">8.0</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">Firefox</td>
<td valign="top">3.0</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">Chrome</td>
<td valign="top">3.0</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">Safari</td>
<td valign="top">4.0</td>
<td valign="top"></td>
</tr>
<tr>
<td valign="top">Opera</td>
<td valign="top">10.5</td>
<td valign="top"></td>
</tr>
</tbody>
</table>
<p>*From <a href="http://caniuse.com">CanIUse.com</a></p>
