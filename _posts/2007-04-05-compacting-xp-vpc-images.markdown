---
layout: post
status: publish
published: true
title: Compacting XP VPC Images
author: Pete
author_login: Pete
author_email: pete.lepage@pobox.com
author_url: http://petelepage.com
wordpress_id: 1411
wordpress_url: 91d46819-8472-40ad-a661-2c78acb4018c:2034424
date: '2007-04-05 14:54:02 -0400'
date_gmt: '2007-04-05 21:54:02 -0400'
categories:
- Microsoft
tags:
- MSDNBlogPost
comments: []
---
<p>Someone had posted a comment on my blog asking how I get my VPC images down to a reasonable size, so I figured I'd share it here.  It's not the most fun process, but it does manage to get a VPC image down from about 5+ gigs, to about 1.5 or so.  To start, make sure you do not have undo disks turned on.</p>
<ol>
<li>Create a backup copy of your VPC image, you'll need this later, and it's good to have in case anything goes wrong.</li>
<li>In the <strong>Add/Remove Components</strong> in the control panel, remove any software (applications and Windows components) that you don't need</li>
<li>Clear the DLL cache<br />
at the command prompt, type "<strong>sfc /cachesize=1</strong>"<br />
reboot the computer<br />
at the command prompt, type "<strong>sfc /purgecache</strong>"</li>
<li>Delete all $something$ files from the %windir% directory except $hf_mig$.  They are hidden files, so you'll need to make sure to make them visible</li>
<li>Clear <strong>%windir%\ServicePackFiles</strong></li>
<li>Clear <strong>%windir%\DriverCache\ie386</strong> folder</li>
<li>Clear <strong>%windir%\System32\wbem\AutoRecover</strong> folder</li>
<li>Clear <strong>%windir%\web\wallpaper</strong> folder</li>
<li>Clear <strong>%windir%\temp</strong> folder</li>
<li>Clear <strong>%windir%\SoftwareDistribution\Download</strong> folder</li>
<li>Delete all log files (use windows search utility) except:<br />
<strong>%windir%\System32\msdtc\msdtc.log</strong><br />
<strong>%windir%\System32\msdtc\trace\dtctrace.log<br />
%windir%\debug\usermode\chkacc.log<br />
%windir%\system32\wbem\logs\wmiprov.log<br />
</strong>Some log files may not allow you to delete them, that is okay</li>
<li>Clear <strong>%ProgramFiles%\WindowsUpdate</strong> folder</li>
<li>Turn off System Restore for XP<br />
open the <strong>System</strong> control panel, and select the <strong>System Restore</strong> tab<br />
select <strong>Turn Off System Restore</strong>, then click Apply/OK</li>
<li>Set maximum event log sizes and clear all events<br />
open event viewer<br />
right click on <strong>Application</strong> and click <strong>Properties</strong><br />
in the <strong>Log Size</strong> section, select <strong>Overwrite events as needed</strong><br />
in the <strong>Log Size</strong> section, set the <strong>Maximum Log Size to 512kb</strong><br />
click <strong>Clear Log</strong>, and click <strong>No</strong> on the save dialog<br />
repeat for <strong>Security</strong> and <strong>System</strong> logs</li>
<li>Turn off/remove the page file<br />
open the <strong>System</strong> control panel, and select the <strong>Advanced</strong> tab<br />
in the <strong>Performance</strong> section, click <strong>Settings</strong><br />
on the <strong>Advanced</strong> tab, in the <strong>Virtual Memory</strong> section, click <strong>Change</strong><br />
in the <strong>Virtual Memory</strong> dialog box, click <strong>No Paging File</strong> and click <strong>Set</strong>, <strong>OK</strong> and restart the virtual machine</li>
<li>Clear the IE cache</li>
<li>Clear the <strong>%DocumentsAndSettings%\All Users\Documents\Shared Music</strong> folder</li>
<li>Clear the <strong>%DocumentsAndSettings%\All Users\Documents\Shared Pictures</strong> folder</li>
<li>Clear the <strong>%DocumentsAndSettings%\All Users\Documents\Shared Videos</strong> folder</li>
<li>Empty the <strong>Recycle Bin</strong></li>
<li><strong>Defrag</strong> the VPC image<br />
create a new VPC system, with your back up VHD as the primary HD and the working VHD as the secondary hard disk.  This way, there is no chance that any system files will be in use as you defrag the working VHD.  Shut down the backup VPC and return to the working VPC</li>
<li>Run the <strong>PreCompact</strong> tool on the working VHD<br />
capture the <strong>precompactor.iso</strong> from <strong>%ProgramFiles%\Microsoft Virtual PC\Virtual Machine Additions</strong> and allow it to auto run on the machine.  This could take anywhere between 5 minutes and several hours.</li>
<li>Shut down the VPC and run the <strong>Virtual Disk Wizard</strong> compact tool</li>
</ol>
<p>That's it, in 23 "easy" steps, you can get your VPC image down from about 5 gigs to just under 1.4 gigs.  These are the steps that I use to compact my images down for the IE VPC's.  I then use some kind of compression to (iexpress.exe) to create the .EXE installer.</p>
<p>I've not tried this on a Vista machine, so I can't tell you for sure what you can delete and what you need to keep, as I'm not 100% sure what changed.</p>
<p><img src="http://blogs.msdn.com/aggbug.aspx?PostID=2034424" alt="" width="1" height="1" /></p>
