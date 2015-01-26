type: episode
title: Installing Ubilinux on the Edison
image: "Ubilinux_Edison_thumb.jpg"
resources:
  - text: Edison Windows Driver Setup
    link: "http://downloadmirror.intel.com/24271/eng/IntelEdisonDriverSetup1.0.0.exe"
  - text: Ubilinux Page
    link: "http://www.emutexlabs.com/ubilinux"
  - text: DFU Utilities for Windows
    link: "https://s3.amazonaws.com/spark-assets/dfu-util-0.8-binaries.tar.xz"
  - text: Putty
    link: "http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html"
supplies:
  - name: Intel Edison
    quantity: 1
  - name: USB Cable
    quantity: 2
categories:
  - episodes
comments: true
date: 2015-01-25 00:05:41
permalink: installing-ubilinux-on-the-edison-windows
num: 21
video_id: BSnXjuttSgY
tags: [Edison, Ubilinux]
---

In this &micro;Cast I'm going to show you how to replace the default Yocto linux image on your Intel Edison with Ubilinux from Emutex Labs. The Yocto linux distro that comes pre-installed on the Intel Edison is a great option for embedded applications because you can customize the distro to fit your end product and off you go. It's not great, however, for playing around with different things and exploring what your Edison is capable of and can seem a little unfamiliar if you're used to all the amenities of other embedded linux distros like Raspbian. Building packages from source and installing them is a pain, especially if you're used to having a package manager. That's where Ubilinux comes in. It's based on the Debian "wheezy" distro which, for any Raspberry Pi fans, is the same thing that Raspbian is based on. It comes with C and C++ dev tools, perl, python, node.js and most importantly a package manager so trying new things on the Edison is as easy as apt-get install.