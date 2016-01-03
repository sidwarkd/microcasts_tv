type: blog
title: 5 Things To Know About The Onion Omega
comments: true
categories: blog
tags: [Onion Omega, OpenWrt, Platform]
date: 2016-01-03 00:31:12
---

<h1 style="text-align:center;"><img class="img-responsive" src="{%asset_path omega_docked_silkscreened.png %}" alt="Omega with extra silkscreen hints" /></h1>

The [Onion Omega](https://onion.io/omega) is billed as "an invention platform for the Internet of Things." It's a compact module that has WiFi built in and promises to allow hardware prototyping in high level languages like Python and Javascript with NodeJS. After playing with one for several hours here are the 5 things I think you should know if you're just get started with yours or thinking about ordering one.

<!-- more -->

## 1. It's OpenWrt Under the Hood
This isn't a magical secret but it can definitely be helpful if you're trying to figure out how to do something not covered in the documentation. The docs on the Omega are still very scarce so if you're trying to do something beyond getting started you probably won't find it there. The docs and info on [OpenWrt](https://openwrt.org/) are aplenty so you're much more likely to find help if you seek it out in those forums. Google is your friend on this one.

## 2. The Pins Aren't .1" Spaced
Again, not something that's hidden but it's also not super apparent if you are shopping on the website especially if you are a beginner. It's important to know because that means you can't just connect it to a breadboard and start prototyping with it. You will definitely need one of the available docks from their website. I recommend the Expansion Dock to get started.

## 3. It Will Run on AA Batteries
There are multiple power options when working with the Omega but there are some things you need to be aware of so you don't fry it. First of all the operating voltage of the Omega itself is 3.3V so it is NOT 5V tolerant. If you have a Battery Dock you can hook up a 1s LiPo as there is an onboard voltage regulator. The Expansion dock is a little different though. You can power the Omega via the micro USB port however a LiPo won't work in this scenario. If you connect it to the 3.3V breakout pins you'll potentially supply up to 4.2V on a full charge which could damage the Omega. That doesn't mean you're out of luck for battery power though. Two AA or AAA batteries supply 3V which I confirmed is sufficient to operate the Omega. You just connect the leads up to the 3.3V and GND pins that are on the header like this.

<blockquote class="instagram-media" data-instgrm-version="6" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAGFBMVEUiIiI9PT0eHh4gIB4hIBkcHBwcHBwcHBydr+JQAAAACHRSTlMABA4YHyQsM5jtaMwAAADfSURBVDjL7ZVBEgMhCAQBAf//42xcNbpAqakcM0ftUmFAAIBE81IqBJdS3lS6zs3bIpB9WED3YYXFPmHRfT8sgyrCP1x8uEUxLMzNWElFOYCV6mHWWwMzdPEKHlhLw7NWJqkHc4uIZphavDzA2JPzUDsBZziNae2S6owH8xPmX8G7zzgKEOPUoYHvGz1TBCxMkd3kwNVbU0gKHkx+iZILf77IofhrY1nYFnB/lQPb79drWOyJVa/DAvg9B/rLB4cC+Nqgdz/TvBbBnr6GBReqn/nRmDgaQEej7WhonozjF+Y2I/fZou/qAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/-0YIEfg3Yf/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A video posted by Kevin Sidwar (@sidwarkd)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2015-12-03T05:44:47+00:00">Dec 2, 2015 at 9:44pm PST</time></p></div></blockquote>
<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>

## 4. You Can Rename It
When you first set up the Omega it'll have a name like OMEGA-1ACD which means to access it via the browser after setting it up you'll use something like http://omega-1acd.local/ which is fine but can be hard to remember. Just rename it by going into the *General Settings* tab in the **Settings** app.

## 5. It Isn't All There....Yet
I personally bought the Omega because it promised NodeJS support but quickly found out that it's still not there. There are some posts in the forums where people have gotten NodeJS to run but it's a very old version and there is no available documentation on how you'd use it to interact with hardware even if you did manage to get it setup. That said, the team is working like crazy with new hardware updates coming pretty much weekly. Filming a getting started tutorial has proved difficult because new things are being added so quickly. 

From what I've seen so far I have no reason to suspect that the team won't deliver on its promises and they are very active in the community forums. Just know that it's not quite everything it's billed to be on the marketing pages yet but appears to be getting there fast.

## Questions
Have any questions about the Omega? I'd love to try to answer them for you and am feverishly trying to put together some µCasts to help you get started with it. Ask below in the comments and I'll see if I can dig up the answer for you.
