---
layout: post
status: publish
published: true
title: Links User Control
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1875
wordpress_url: http://petelepage.com/blog/2005/09/links-user-control/
date: '2005-09-20 03:56:00 -0400'
date_gmt: '2005-09-20 10:56:00 -0400'
categories:
- General
tags:
- MSDNBlogPost
comments: []
---
<p>As I mentioned in my <a href="http://blogs.msdn.com/petel/archive/2005/09/16/469207.aspx">previous post</a>, one of the more common controls I put on my web sites is a links page.&nbsp; I wanted the links page to be somewhat dynamic, easily updateable, without having to update the ASPX&nbsp;page.&nbsp; I wanted to be able to create a simple place where I could store my data, and even, have it sync across multiple sites if I wanted.&nbsp; I haven't implemented this part yet, but it is in the works.&nbsp; </p>
<p>So, I created a user control that reads the links from an XML file.&nbsp; You specify the XML file in the user control line so it knows where to get it's data from, and it then puts the data on the page.</p>
<pre>&lt;%@ Register Src="LinkDisplay.ascx" TagName="LinkDisplay" TagPrefix="uc1" %&gt;&lt;uc1:LinkDisplay DataFile="~/App_Data/references.xml" ID="LinkDisplay1" runat="server" /&gt;</pre>
<p>For this one, the code was pretty simple.</p>
<pre>&lt;script runat="server"&gt;    public string DataFile = "";    protected void Page_Load(object sender, EventArgs e)    {        if (!IsPostBack)        {            if (DataFile != "")                xmlLinks.DataFile = DataFile;        }    }&lt;/script&gt;</pre>
<p>And the ASPX was just as easy</p>
<pre>&lt;asp:DataList DataSourceID="xmlLinks" ID="DataList1" runat="server"&gt;    &lt;ItemTemplate&gt;        &lt;asp:HyperLink Target="_blank" ID="HyperLink1" NavigateUrl='&lt;%# XPath("url") %&gt;'            runat="server" Text='&lt;%# XPath("title") %&gt;'&gt;&lt;/asp:HyperLink&gt;        &lt;br /&gt;        &lt;asp:Label ID="lblDesc" CssClass="LinkLabel" runat="server" Text='&lt;%# XPath("description") %&gt;' /&gt;    &lt;/ItemTemplate&gt;&lt;/asp:DataList&gt;&lt;asp:XmlDataSource ID="xmlLinks" runat="server" /&gt;</pre>
<p>You can see it in use at <a href="http://www.bbpphoto.com/links.aspx">http://www.bbpphoto.com/links.aspx</a> and <a href="http://www.nocommonground.com/blogSamples/links.aspx">http://www.nocommonground.com/blogSamples/links.aspx</a>.&nbsp; The one on BBPPhoto is actually several of the user controls on the same page, all pointing to different XML files, thus providing different categories.</p>
<p>You can download the whole sample here: <a href="http://www.nocommonground.com/blogSamples/links.zip">http://www.nocommonground.com/blogSamples/links.zip</a> </p>
