---
layout:     tutorial
title:      "Tutorial: Platformer game using Impact++ | Part 1"
date:       "2015-11-26"

categories: [Tutorials, ImpactJS]
excerpt:    Let's get started!
song:       
cover:      pd

game:       perfect-ghosts
part:       1
---

Welcome to Part 1! Today we will:

  * Set up a neat environment and basic structure from scratch.
  * Start a server locally using ruby.
  * Add Impact++ to the project and see magic.

## The setup

Alright, go to [your personal download page](http://impactjs.com/download) and download your latest version of ImpactJS using your license key. Once downloaded and unzipped, the folder should contain a basic structure that looks something like this:
![alt text](/assets/images/posts/tuts/perfect-ghosts-1/img1.png "ImpactJS folder")

Now, let's create our own folder `/perfect-ghosts` where we'll be storing the game. Copy all of the contents from `/impact` into the new folder.

Now while on the new `/perfect-ghosts` folder, make sure to create a `.gitignore` file containing the basic files ignored for impact repositories:

```text
tools/
lib/impact
lib/weltmeister

weltmeister.html

.DS_Store
.idea/
```
Right now, the game folder should look something like this (if you don't see some of the `.something` files don't worry, `.gitignore` is the important one):
![alt text](/assets/images/posts/tuts/perfect-ghosts-1/img2.png "ImpactJS folder")
The only thing we are missing to run the game is a small ruby script to evade PHP, let's add it.

## Meet Sinatra

First, make sure you have [ruby](https://www.ruby-lang.org/en/documentation/installation/) and [rubygems](https://rubygems.org/pages/download) installed on your machine. Once you have those installed we're ready for the next step. Download the [IMPACT.RB](https://github.com/chrisdarroch/impactrb) script, follow the instructions on the Readme. Make sure to add the `impact.rb` file it provides next to the `index.html` and don't forget to delete the `/lib/weltmeister/api` folder. If you followed the instructions, it should be as simple as navigating to the folder via terminal and executing `ruby impact.rb` and your server should be up. You can now go to `http://0.0.0.0:4567/` on your browser and you should see a message that indicates everything went smooth:
![alt text](/assets/images/posts/tuts/perfect-ghosts-1/img3.png "It works!"). If you have any troubles, [here's the repo of this part](https://github.com/dancmj/perfect-ghost/tree/tutorial-1_no-plusplus).

## Adding the ++

Now that we have a vanilla setup, let's add Impact++ to the project.
First, [download Impact++](http://collinhover.github.io/impactplusplus/). Once downloaded, add the `impactplusplus/lib/plusplus` folder into your project's `lib` directory, as well as the `impactplusplus/lib/weltmeister/config.js` into your project's `lib/weltmeister` directory ([Here are some different steps](https://github.com/collinhover/impactplusplus/) in case you have a custom weltmeister config).

Next, add all of these files that come with Impact++'s download into your project's `media` folder:

```
media/debris.png
media/demos_gestures_hold.png
media/demos_gestures_swipe.png
media/demos_gestures_tap.png
media/directions_32.png
media/dpad_32.png
media/dummy.png
media/effect_electricity.png
media/effect_pow.png
media/font_04b03_white_8.png
media/particles.png
media/texture_lava.png
media/texture_slime.png
```

We're done with the file setup, now let's modify your `lib/game/main.js` file so that it starts using Impact++.

Open your `main.js` file and modify it so it looks like this:


As you can see, the changes are simple:

* Include `'plusplus.core.plusplus'`, this is the main include file to make sure that Impact++ works.
  * We'll be including `'plusplus.debug.debug'` just because, but it's not necessary.
* On line 11 we create the `_c` variable, it'll help us access the configuration variables. Whenever you want to change a configuration setting, check which parameters you have available on `lib/plusplus/config.js` but don't change them there, make sure you work on `lib/plusplus/config-user.js` since `ig.CONFIG_USER` is automatically merged over Impact++'s config.

Everything else is self-explanatory, I think. So here we have it! If you save everything and go to your `http://0.0.0.0:4567/`, you should see the default Impact++ loading screen as well as the custom weltmeister in `http://0.0.0.0:4567/weltmeister.html` and a brand new black screen made with Impact++. Awesome!

[Here is a branch](https://github.com/dancmj/perfect-ghost/tree/tutorial-1_with-plusplus) so you can download what we did if you had some trouble or didn't follow along.

On the next part, we'll create a simple level using the weltmeister. If you have any questions, make sure to comment. Thanks for reading!

Note: Soon I'll have live games serving as a preview for the game you're creating so you can see what we'll be creating. It takes time!
