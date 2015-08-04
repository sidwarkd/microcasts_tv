type: blog
title: Exploding Kittens Teardown
comments: true
categories: blog
tags: [Sensors, Teardown]
date: 2015-08-02 00:30:53
---


<h1 style="text-align:center;"><img class="img-responsive" src="{%asset_path exploding_kittens_box.jpg%}" alt="Exploding Kittens Box" /></h1>

Chances are you've heard of the [most-backed game in Kickstarter history][kickstarter]. If not, stop here, and go check out [Exploding Kittens][exploding_kittens] for a minute and then come back. After months of anticipation my copy of the game showed up last week.

**Spoiler Alert:  I'm about to reveal what the surprise is inside the Exploding Kittens box. If you don't want that ruined stop here and come back after you've personally experienced it.**

<!-- more -->

<iframe src="https://vine.co/v/eHDjiYnwxKl/embed/simple" width="480" height="480" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>

After repeating this process no less than 15 times for the kids I figured that some people might be interested in knowing exactly how the surprise works. It's actually a pretty genius piece of electronics. Hence this "teardown" post to uncover the magic.

Playing a noise or sound when you open something isn't exactly mind-blowing technology. In fact, you've probably received one of those fancy birthday cards that sing to you when you open it. But how does the box know you've opened it? It's actually quite simple. Let's take a look.

<img class="img-responsive" src="{%asset_path exploding_kittens_lid.jpg %}" alt="Exploding Kittens Inside Lid" />

This is what the inside lid of the game looks like. The illustrations inside and out are amazing but if you look closely at the taco cat on the right you'll notice he has a wonky eye. Upon closer inspection you'll see that his left eye is a photoresistor.

<img class="img-responsive" src="{%asset_path exploding_kittens_eye.jpg %}" alt="Photoresistor Eye" />

A [photoresistor][pr] is just a variable resistor kind of like a [potentiometer][pot] but instead of turning a knob or screw, the resistance varies by how much light it is exposed to. Pretty cool. When it's really dark the photoresistor will have a very high resistance while in the light it will have a low resistance. 

<iframe src="https://vine.co/v/eHDdbeBwxgq/embed/simple" width="480" height="480" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>

So how do we use that to tell if the box is open? Well, let's take a look at the rest of the goods. As it turns out we can open the compartment on the right side of the lid and pull out a plastic tray that contains all of the hardware.

<h1 style="text-align:center;"><img class="img-responsive" src="{%asset_path exploding_kittens_pcb.png%}" alt="Exploding Kittens PCB" /></h1>

There really isn't a lot going on. So the main components here are power (3 coin batteries), a microcontroller (concealed by the black epoxy blob), a photoresistor (light sensor) and the speaker. The idea is that the box will be almost perfectly dark when closed causing a high resistance across the photoresistor. When you open the box the light floods in and causes the resistance to drop. The microcontroller detects that change and proceeds to play the cat sound. But how does a microcontroller detect a change in resistance? Well it doesn't exactly. It uses one of the most basic circuits in electronics, the [voltage divider][vd].

<img class="img-responsive" src="{%asset_path voltage_divider.png%}" alt="Voltage Divider" />

The basic concept here is that when two resistors are connected together like this they produce an output voltage Vout that is a fraction of the input voltage Vin. That output value can be precisely controlled by the values you pick for resistors Z1 and Z2. Check out the Wikipedia link for more info on how that calculation works. In our Exploding Kittens circuit, one of the resistors is fixed. It's the tiny surface mount one labeled R1. The other resistor is our photoresistor which changes based on the amount of light it is exposed to. If we look at our voltage divider circuit above you can see that Vout is a point between Z1 and Z2. If you look closely at the circuit board you can see that a trace on the printed circuit board goes from the right pin of the photoresistor up to the epoxy blob where it connects to the microcontroller underneath. So what it's actually sending to the microcontroller is a voltage that varies based on how light or dark it is. From there the microcontroller uses what's called an [Analog to Digital Converter][adc] or ADC to sample that voltage and turn it into a digital value. That digital value can then be used to tell if the box is open or closed. Pretty neat.

### But Wait, There's More
If you look closely at the board you will notice two silver pads at 7 and 8 o'clock on the epoxy blob. They are labeled *SDA* and *SCL*. Those are the common names of communication lines in the [I2C][i2c] communication protocol. SDA is the data line and SCL is the clock line for timing communication on the data line. What are those for? My guess is that they are there for debug/testing purposes. If I had more time I'd hook some wires up to it and use the i2c-tools on the Raspberry Pi to see what address it has and possibly query it for data. It may even be possible to modify the data that produces the meow sound or it might just be a way to verify that the photoresistor is working correctly in a test harness.

### Wrap Up
I think the box opening surprise was a slick addition to an already very polished deliverable. And even though this is just a very simple circuit design there were quite a few topics involved including:

  * Photoresistors
  * Resistance
  * Voltage Dividers
  * Microcontrollers
  * I2C Communication Protocol
  * Analog to Digital Converters

So the next time you bust out Exploding Kittens and open the box you'll know exactly what's going on.

[kickstarter]: https://www.kickstarter.com/projects/elanlee/exploding-kittens
[exploding_kittens]: http://explodingkittens.com/
[pr]: https://en.wikipedia.org/wiki/Photoresistor
[pot]: https://en.wikipedia.org/wiki/Potentiometer
[vd]: https://en.wikipedia.org/wiki/Voltage_divider
[adc]: https://en.wikipedia.org/wiki/Analog-to-digital_converter
[i2c]: https://en.wikipedia.org/wiki/I%C2%B2C