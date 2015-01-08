---
type: episode
title: "Memory Usage on the Raspberry Pi"
image: "mem.png"
supplies:
  - name: Raspberry Pi
    quantity: 1
categories:
  - episodes
date: 2014-03-15 23:37
permalink: memory-usage-on-the-raspberry-pi
num: 14
video_id: EqyVlTP4R5M
tags: [RaspberryPi]
comments: true
---

In this &micro;Cast we cover the very basics of RAM usage on the Raspberry Pi and show you how to figure out how much memory your Pi is using at any given time and how to get some of it back.

## Sample Code
The following chunks of code are just quick examples of how you can query memory information using Python or NodeJS. **This code is not production ready as it does little to no error checking.**

### NodeJS Sample
{% gist sidwarkd/9578213 pi_stats.js %} 

### Python Sample
{% gist sidwarkd/9578213 pi_stats.py %} 
