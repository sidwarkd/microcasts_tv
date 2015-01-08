---
type: episode
title: "Configure the Serial Port on the Raspberry Pi"
image: pi_uart.jpg
supplies:
  - name: Raspberry Pi
    quantity: 1
categories:
  - episodes
date: 2014-08-08 22:08
permalink: configure-the-serial-port-on-the-raspberry-pi
num: 18
video_id: bKHLTn_nXUM
tags: [RaspberryPi, Serial]
comments: true
---

Did you even know the Raspberry Pi had a serial port? If you did and have tried to use it in Raspbian you've probably run in to some weird behavior. That's because, by default, the serial port is tied up by the operating system so it can't be reliably used in your projects. In this episode I show you how to configure the serial port so it can be used to make your awesome ideas reality.

##TL;DR
All you have to do is modify two files to reclaim the serial port from Raspbian. The rest of this post shows you how.

### /etc/inittab
Comment out the line near the very bottom that spawns a getty using the serial port.

{% codeblock lang:bash %}
#Spawn a getty on Raspberry Pi serial line
#T0:23:respawn:/sbin/getty -L ttyAMA0 115200 vt100  <---- comment this line
{% endcodeblock %}

### /boot/cmdline.txt
Be careful with this one as it contains the parameters sent to the kernel at startup. You need to remove any references to ttyAMA0,115200.

So you would change this:

{% codeblock lang:bash %}
dwc_otg.lpm_enable=0 console=ttyAMA0,115200 kgdboc=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 rootwait
{% endcodeblock %}

To this:

{% codeblock lang:bash %}
dwc_otg.lpm_enable=0 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 rootwait
{% endcodeblock %}