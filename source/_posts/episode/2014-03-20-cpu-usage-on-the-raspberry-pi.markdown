---
type: episode
title: "CPU Usage on the Raspberry Pi"
image: "cpu.jpg"
supplies:
  - name: Raspberry Pi
    quantity: 1
categories:
  - episodes
date: 2014-03-20 22:41
permalink: cpu-usage-on-the-raspberry-pi
num: 15
video_id: DqGVTUsMuFI
tags: [RaspberryPi]
comments: true
---

In this µCast we cover the very basics of CPU usage on the Raspberry Pi and show you how to figure out how hard your ARM processor is working in realtime.

## Sample Code
The following chunks of code contain the memory examples from µCast #14 as well as the CPU usage code in Python or NodeJS. **This code is not production ready as it does little to no error checking.**

### NodeJS Sample
{% gist sidwarkd/9578213 pi_stats.js %} 

### Python Sample
{% gist sidwarkd/9578213 pi_stats.py %} 