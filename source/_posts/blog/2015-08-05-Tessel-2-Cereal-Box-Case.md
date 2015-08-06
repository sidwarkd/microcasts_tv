type: blog
title: Tessel 2 Cereal Box Case
comments: true
categories: blog
tags: [Tessel]
date: 2015-08-05 14:00:39
---

<h1 style="text-align:center;"><img class="img-responsive" src="{%asset_path fp_case.jpg %}" alt="Finished case on the Tessel" /></h1>

Have you ordered  your [Tessel 2][tessel2] and can't wait for it to ship later this year? Have you messed around with the [virtual image][vm] and maybe even started on a [DIY Module][diy] for it but are still looking for ways to pass the time before it arrives? Why not make a case for it?

<!-- more -->

## A Little Case History
About a year ago I came across [a Raspberry Pi case made from a manila folder][manilla] on imgur. I immediately made one. I thought it was awesome but a little flimsy. A few days later I was enjoying my morning cereal when the thought occurred to me that the cardboard thickness of a cereal box would be perfect. So [I made a few][case_imgur] and even modified the original plans to [support other models of the Pi][case_blog]. Fast forward a year and Technical Machine sends me a Tessel 2 to play with but it doesn't have a case. So I made one.

**DISCLAIMER**: *I have not run the Raspberry Pi or Tessel for extended periods inside of these cases so I have no idea if they will overheat. To be safe you may want to carve some sweet ventilation holes to help with air circulation.*

## Assembly Instructions
The Tessel 2 case wasn't really that hard to throw together. I basically took the Raspberry Pi case design and modified the dimensions and cutouts. A digital caliper and a few hours of trial and error was all it took to get everything just right. So if you're interested in getting a case all ready for that special day when your Tessel 2 arrives here are the instructions.

### 1. Download It, Print It, Cut It

  *  <a href="{%asset_path Tessel2_Case.dwg %}">DWG Design File</a>
  *  <a href="{%asset_path Tessel2_Case.pdf %}">PDF Version</a>

You have a couple of options here. The `.dwg` file should open in pretty much any CAD application (I used [DraftSight][draftsight]) and is great if you want to modify the design a bit or adapt it to another project. For everyone else I'd recommend just downloading the PDF version. The case is to scale but you have to print it that way so **make sure any autoscaling is turned off** or else the dimensions won't be quite right. The bottom portion of the case printout should be exactly 60mm wide if you want to check it with a ruler.

Once you've printed out the plan it's time to cut it out. Take your time on this part. The folding dimensions are pretty exact and since you'll be transferring it in the next step you want this master template to be as accurate as possible.

<img class="img-responsive" src="{%asset_path case_template.jpg %}" alt="Case Template" />

### 2. Transfer It and Cut It
Once you have your template you can transfer the design to any medium that's not too thick. My mediums of choice are empty cereal boxes and other food boxes because they have designs built-in and the cardboard is just right but you can use anything you want. 

**IMPORTANT:** Make sure you have the template facing the right way. Too many times I've had it flipped over and once it's folded the cool design you are trying to transfer is on the inside of the case instead of the outside. Right side up is with the port slits on the right. So you want to trace it with the template on the box like this:

<img class="img-responsive" src="{%asset_path case_template_orientation.jpg %}" alt="Correct cutout orientation of case template" />

Again, it's important to take your time on this step and get the template trace as accurate as possible so the case fits your Tessel properly. Once it's traced it's time to cut it out again. At this point just cut out the outline of the case. **DO NOT cut out the internal pieces (power, USB, ethernet, ports) just yet.** I recommend scissors for the outline cut and then a utility knife for the internal cutouts when you get that far.

<img class="img-responsive" src="{%asset_path fp_case_cutout.jpg %}" alt="Case outline cut out" />

### 3. Fold It
Before we cut out the holes we want to fold the case first. The reason for this is because the power and port slits are so close to a fold line that once the holes are there the folds can be difficult to get right as the case is flimsy at those points.

The fold lines are on your template but they need to be transferred to the back of your cutout. The blank side. This is what mine looks like.

<img class="img-responsive" src="{%asset_path fp_case_fold_marks.jpg %}" alt="Fold marks" />

The best way I've found to do this is by using a ruler or even a piece of printed circuit board. Place the ruler or PCB along a fold line to help you get a straight fold edge.

### 4. Cut It Again and Vent It
To finish things up use a utility knife to cut out the port, power, USB, and ethernet holes. You can now add some ventilation slits/holes if you wish. *If you plan on running your Tessel for extended periods I highly recommend venting it in some way.*

<img class="img-responsive" src="{%asset_path fp_case_fully_cutout.jpg %}" alt="Case fully cut out and ready for installation" />

### 5. Wait
I know September isn't coming fast enough but put your case in a safe place and wait for the arrival of your Tessel.

### 6. Install the Tessel
Once your Tessel does arrive getting the case on is very easy. Slide the two ports into their slits while making sure the Tessel is oriented correctly so the power, USB, and ethernet will line up with their respective knockouts. Once the ports are snug in the case you can just fold the bottom of the case over while lining up the front knockouts. All of the outter tabs are meant to fold under the Tessel and be held in place by the bottom of the case. A single piece of tape at the back is normally plenty to hold the entire thing together. 

<img class="img-responsive" src="{%asset_path fp_case_bottom.jpg %}" alt="Finished case on the Tessel" />

## Share Your Case
That's all there is to it. It's a very inexpensive way to have a sweet looking case on your Tessel. If you make a case for your Tessel 2 I'd love to hear about it. If you find a cool medium to use share it in the comments below and if you send me a picture of your case I'll happily post it here. 

[tessel2]: https://tessel.io/
[vm]: https://tessel.io/blog/118385488827/contributing-to-tessel-2-without-hardware
[diy]: https://tessel.io/docs/DIYModule
[manilla]: https://imgur.com/gallery/8RLUdNb
[case_imgur]: http://imgur.com/gallery/pTDkD
[case_blog]: http://www.microcasts.tv/blog/2014/09/24/cereal-box-pi-cases/
[draftsight]: http://www.3ds.com/products-services/draftsight-cad-software/free-download/