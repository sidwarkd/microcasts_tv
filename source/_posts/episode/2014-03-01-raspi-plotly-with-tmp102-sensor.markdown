---
type: episode
title: "Raspi-Plotly With TMP102 Sensor"
image: raspi_plotly.jpg
supplies:
  - name: Raspberry Pi
    quantity: 1
  - name: TMP102 Sensor
    quantity: 1
categories:
  - episodes
date: 2014-03-01 23:40
permalink: raspi-plotly-with-tmp102-sensor
num: 13
video_id: IIcM1nR-omg
tags: [RaspberryPi]
comments: true
---

I recently came across an instructable about [streaming temperature data to plot.ly][instr]. I wanted to go through their example setup but didn't have the same kind of temperature sensor. So I created a screencast showing how I modified their source code to use the streaming service with my [TMP102 Sensor from Sparkfun][tmp102].

My modified code can be found [as a gist on github][gist]

{% gist sidwarkd/9614055 hardware.py %} 

[instr]: http://www.instructables.com/id/Streaming-Data-Visualization-Plotly-Raspberry-Pi/?ALLSTEPS
[tmp102]: https://www.sparkfun.com/products/11931
[gist]: https://gist.github.com/sidwarkd/9614055