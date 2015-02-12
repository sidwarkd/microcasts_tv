type: episode
title: Control your Pi with BLE
image: "pi_ble_thumb.jpg"
resources:
  - text: Install Node and NPM on Raspbian
    link: "https://learn.adafruit.com/node-embedded-development/installing-node-dot-js"
  - text: Bleno Project
    link: "https://github.com/sandeepmistry/bleno"
  - text: USB Bluetooth Adapter Used
    link: "http://www.adafruit.com/product/1327"
  - text: LightBlue iOS App
    link: "https://itunes.apple.com/us/app/lightblue-bluetooth-low-energy/id557428110?mt=8"
  - text: BLE Scanner for Android
    link: "https://play.google.com/store/apps/details?id=com.macdom.ble.blescanner&hl=en"
supplies:
  - name: Raspberry Pi
    quantity: 1
  - name: USB Bluetooth Adapter
    quantity: 1
categories:
  - episodes
comments: true
date: 2015-02-04 21:04:23
permalink: control-your-pi-with-BLE
num: 22
video_id: 8YA6KVBs1pA
tags: [RaspberryPi,Bluetooth]
---

This Episode was made specially for [Tim Pietrusky](https://twitter.com/TimPietrusky). I asked the Twitterverse if anybody had a question that I could answer in video form and Tim sent this:

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p><a href="https://twitter.com/KevinSidwar">@KevinSidwar</a> How can I control an USB <a href="https://twitter.com/hashtag/bluetooth?src=hash">#bluetooth</a> adapter via <a href="https://twitter.com/nodejs">@nodejs</a> on a <a href="https://twitter.com/Raspberry_Pi">@Raspberry_Pi</a> to send data from my smartphone to the Pi?</p>&mdash; Tim Pietrusky (@TimPietrusky) <a href="https://twitter.com/TimPietrusky/status/563131851368566784">February 5, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

So Tim, hopefully this answers your question and can also be useful to others looking to do something similar in their project.

**Note for Android Users:** I don't have an Android device so I linked up an app that looks like it should do things similar to LightBlue. Basically you need a test app that can explore and interact with the characteristics of a BLE device service.

