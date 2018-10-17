---
layout: post
title: '&amp;quot;Contact Me&amp;quot; User Control'
date: '2005-09-16 05:19:00 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Lately I've been doing some ad-hoc on VWD, creating a few web sites, and there seem to be two pretty common things I put on those web sites, a "Contact Me" page, and a links page.&nbsp; And seeing that there have been lots of changes to the email API's between ASP.NET 1.x to 2.0, I thought I'd post my code here for you to see.&nbsp; There are a few things to keep in mind with this.&nbsp; First, I did it this way as I didn't want to put my email address sitting in the open on my site, it makes it too easy for spammers to pick up.&nbsp; But, I still face potential for people to automate a DOS attack against me.&nbsp; I haven't worked something in to fix that yet, but it's not far out.

First, let's see it in action: [http://www.nocommonground.com/contact.aspx](http://www.nocommonground.com/contact.aspx)&nbsp;When you click, the send, it'll send me an email.&nbsp; Pretty obvious. ;)

Let's look at the meat of the code. This is where we actually send the mail.

<pre>        protected void butCancel_Click(object sender, EventArgs e)    {        ClearMessage();    }    private void ClearMessage()    {        tbEmail.Text = "";        tbMessage.Text = "";        tbName.Text = "";        tbSubject.Text = "";        lblSent.Visible = false;    }    protected void butSend_Click(object sender, EventArgs e)    {        lblSent.Visible = false;        System.Net.Mail.MailAddress maMe = new System.Net.Mail.MailAddress("EMAIL ADDRESS GOES HERE", "Pete LePage");        System.Net.Mail.MailAddress maFrom = new System.Net.Mail.MailAddress(tbEmail.Text, tbName.Text);        System.Net.Mail.MailMessage msg = new System.Net.Mail.MailMessage();        msg.To.Add(maMe);        msg.From = maFrom;        msg.Subject = "[BBPPhoto] " + tbSubject.Text;        msg.Body = tbMessage.Text + "\r\n\r\nRemote IP Address: " + Request.UserHostAddress;        System.Net.Mail.SmtpClient smtpClient = new System.Net.Mail.SmtpClient("SMTP SERVER GOES HERE");        smtpClient.UseDefaultCredentials = true;        smtpClient.Send(msg);        ClearMessage();        lblSent.Visible = true;    }</pre>

Sweet, the .NET Framework uses System.Net.Mail.MailAddress instead of the text, which make things a bit easier, you can set display names, and a few other properties.&nbsp; It also makes it much easier to send an email to multiple people, as it's just a collection of addresses.

I'm also tracking their IP address. This allows me to see where they are sending the email from, so if I do start go get major spam or anything like that, I can easily block them. 

What about the HTML though?

<pre>&lt;table width="60%"&gt;    &lt;tr&gt;        &lt;td width="30%"&gt;            Name:&lt;asp:RequiredFieldValidator ID="rfvName" runat="server" ControlToValidate="tbName"                ErrorMessage="*"&gt;&lt;/asp:RequiredFieldValidator&gt;&lt;/td&gt;        &lt;td width="70%"&gt;            &lt;asp:TextBox Style="width: 100%" ID="tbName" runat="server" /&gt;&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;            Email:&lt;asp:RegularExpressionValidator ID="revEmail" runat="server" ControlToValidate="tbEmail"                ErrorMessage="*" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"&gt;&lt;/asp:RegularExpressionValidator&gt;            &lt;asp:RequiredFieldValidator ID="rfvEmail" runat="server" ControlToValidate="tbEmail"                ErrorMessage="*"&gt;&lt;/asp:RequiredFieldValidator&gt;&lt;/td&gt;        &lt;td&gt;            &lt;asp:TextBox Style="width: 100%" ID="tbEmail" runat="server" /&gt;&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td&gt;            Subject:&lt;asp:RequiredFieldValidator ID="rfvSubject" runat="server" ControlToValidate="tbSubject"                ErrorMessage="*"&gt;&lt;/asp:RequiredFieldValidator&gt;&lt;/td&gt;        &lt;td&gt;            &lt;asp:TextBox Style="width: 100%" ID="tbSubject" runat="server" /&gt;&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;        &lt;td colspan="2"&gt;            Message:&lt;asp:RequiredFieldValidator ID="rfvMessage" runat="server" ControlToValidate="tbMessage"                ErrorMessage="*"&gt;&lt;/asp:RequiredFieldValidator&gt;&lt;br /&gt;            &lt;asp:TextBox ID="tbMessage" runat="server" TextMode="MultiLine" Height="200px" Width="100%" /&gt;            &lt;br /&gt;            &lt;asp:Button ID="butSend" runat="server" Text="Send" OnClick="butSend_Click" /&gt;            &lt;asp:Button ID="butCancel" runat="server" Text="Cancel" OnClick="butCancel_Click"                CausesValidation="False" /&gt;        &lt;/td&gt;    &lt;/tr&gt;&lt;/table&gt;&lt;asp:Label ID="lblSent" runat="server" Text="Your message has been sent!" Visible="false" /&gt;</pre>

So, it's just a bunch of text boxes, and some validators. I want to make sure they put in a valid reply-to address, even if it isn't theirs. I could CC them on the message, but then I'm immediately giving away my address, which is something that I'm trying to protect.

I've gone and put all this code in a user control, and can use it all over my site, and then easily copy it to other sites that I have.