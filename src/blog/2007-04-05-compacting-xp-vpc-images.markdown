---
layout: post
title: Compacting XP VPC Images
date: '2007-04-05 14:54:02 -0400'
categories: blog
tags:
- MSDNBlogPost
comments: []
---

Someone had posted a comment on my blog asking how I get my VPC images down to a reasonable size, so I figured I'd share it here.  It's not the most fun process, but it does manage to get a VPC image down from about 5+ gigs, to about 1.5 or so.  To start, make sure you do not have undo disks turned on.

1.  Create a backup copy of your VPC image, you'll need this later, and it's good to have in case anything goes wrong.
2.  In the **Add/Remove Components** in the control panel, remove any software (applications and Windows components) that you don't need
3.  Clear the DLL cache

    at the command prompt, type "**sfc /cachesize=1**"

    reboot the computer

    at the command prompt, type "**sfc /purgecache**"
4.  Delete all $something$ files from the %windir% directory except $hf_mig$.  They are hidden files, so you'll need to make sure to make them visible
5.  Clear **%windir%\ServicePackFiles**
6.  Clear **%windir%\DriverCache\ie386** folder
7.  Clear **%windir%\System32\wbem\AutoRecover** folder
8.  Clear **%windir%\web\wallpaper** folder
9.  Clear **%windir%\temp** folder
10.  Clear **%windir%\SoftwareDistribution\Download** folder
11.  Delete all log files (use windows search utility) except:

    **%windir%\System32\msdtc\msdtc.log**

    **%windir%\System32\msdtc\trace\dtctrace.log

    %windir%\debug\usermode\chkacc.log

    %windir%\system32\wbem\logs\wmiprov.log

    **Some log files may not allow you to delete them, that is okay
12.  Clear **%ProgramFiles%\WindowsUpdate** folder
13.  Turn off System Restore for XP

    open the **System** control panel, and select the **System Restore** tab

    select **Turn Off System Restore**, then click Apply/OK
14.  Set maximum event log sizes and clear all events

    open event viewer

    right click on **Application** and click **Properties**

    in the **Log Size** section, select **Overwrite events as needed**

    in the **Log Size** section, set the **Maximum Log Size to 512kb**

    click **Clear Log**, and click **No** on the save dialog

    repeat for **Security** and **System** logs
15.  Turn off/remove the page file

    open the **System** control panel, and select the **Advanced** tab

    in the **Performance** section, click **Settings**

    on the **Advanced** tab, in the **Virtual Memory** section, click **Change**

    in the **Virtual Memory** dialog box, click **No Paging File** and click **Set**, **OK** and restart the virtual machine
16.  Clear the IE cache
17.  Clear the **%DocumentsAndSettings%\All Users\Documents\Shared Music** folder
18.  Clear the **%DocumentsAndSettings%\All Users\Documents\Shared Pictures** folder
19.  Clear the **%DocumentsAndSettings%\All Users\Documents\Shared Videos** folder
20.  Empty the **Recycle Bin**
21.  **Defrag** the VPC image

    create a new VPC system, with your back up VHD as the primary HD and the working VHD as the secondary hard disk.  This way, there is no chance that any system files will be in use as you defrag the working VHD.  Shut down the backup VPC and return to the working VPC
22.  Run the **PreCompact** tool on the working VHD

    capture the **precompactor.iso** from **%ProgramFiles%\Microsoft Virtual PC\Virtual Machine Additions** and allow it to auto run on the machine.  This could take anywhere between 5 minutes and several hours.
23.  Shut down the VPC and run the **Virtual Disk Wizard** compact tool

That's it, in 23 "easy" steps, you can get your VPC image down from about 5 gigs to just under 1.4 gigs.  These are the steps that I use to compact my images down for the IE VPC's.  I then use some kind of compression to (iexpress.exe) to create the .EXE installer.

I've not tried this on a Vista machine, so I can't tell you for sure what you can delete and what you need to keep, as I'm not 100% sure what changed.

![](http://blogs.msdn.com/aggbug.aspx?PostID=2034424)