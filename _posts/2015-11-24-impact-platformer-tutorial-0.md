---
layout:     tutorial
title:      "Tutorial: Platformer game using Impact++ | Intro"
date:       "2015-11-24"

categories: [Tutorials, ImpactJS]
excerpt:    Why did I choose ImpactJS?
song:       
cover:      cc

game:       perfect-ghosts
part:       0
---

Welcome to the first part of a series of tutorials that will teach you how to create a complete game using [ImpactJS](http://impactjs.com/) and it's expansion [Impact++](http://collinhover.github.io/impactplusplus/). I'll refer to both ImpactJS and Impact++ simply as Impact so there's no confusion.

It doesn't matter if you're new to vanilla ImpactJS or Impact++, these tutorials can help you get started.

## How to read these tutorials
You shouldn't have to follow all of the tutorials to understand the game and it's components. If you'd like to see a specific way of coding a feature using Impact (i.e. Bullets, Controllers , etc.), then you can skim through the posts and refer to that specific section. If you'd like a guide on step by step creation of a platformer game using Impact then you should read all of the tutorials in order.

## Why Impact?
After a long debate with myself on deciding which engine should I use to start my process of becoming a Game Designer / Developer / Composer / Artist, experiencing the kind of quality which can be achieved on many engines and how simple that quality can come true by a single person, I came to the conclusion that Impact was the best choice for me.

[Dominic Szablewski](http://phoboslab.org/) created an engine that is small, powerful, easily expandable and very well written. It is made specially for 2D games and that's perfect for me since I plan on doing the coding, art, animations and music. Another feature, which is my favorite, is that it comes with it's own unique editor, the [Weltmeister](http://impactjs.com/documentation/video-tutorial-weltmeister). And did I mention it's web? Web runs on everything these days: Tablet? Check. Native iPhone app? [You got it](http://impactjs.com/ejecta). Steam? [Sure](http://impactjs.com/forums/everything-else/just-released-my-game-on-steam)! Wii U? [Absolutely](http://impactjs.com/blog/2014/02/impact-plugin-for-wii-u-is-now-available).

Okay so that's enough explanations! Let's start.

## Perfect Ghosts
### Overview
We'll be creating a simple platformer game using Impact++ called *Perfect Ghosts*. The player takes control of a woman called *Lua* exploring an abandoned section of the universe which is plagued by Spectrals. The player has to shoot and destroy every Spectral in the current room to reach the next one. Each room can have special properties and layouts. In the final room the player defeats the final boss and game over! Simple! These features should cover up a lot of stuff that's possible using Impact.

The game can be played on your favorite modern web browser using the keyboard or a generic pc controller.

### Useful tools
* I code using the [Webstorm IDE](https://www.jetbrains.com/webstorm/). It has everything I'd expect for a professional IDE, it's not free but you can check out the free trial and see if it's worth it. Otherwise, I would use [Atom](https://atom.io/).
* For creating pixel art, I use [PyxelEdit](http://pyxeledit.com/) which is an amazing tool for people like me which don't have any photoshop wizard skills and are new to pixel art or animation. It's very inexpensive and you'd be supporting the creation and maintenance of an amazing tool. I've seen people use [GIMP](https://www.gimp.org/downloads/) as a free alternative to photoshop but I have never used it myself.
* For version control I create repositories with [Git](https://git-scm.com/). If you have never used version control even on small projects, I really recommend you to [start doing so](https://try.github.io/levels/1/challenges/1).
* A terminal / console with Ruby installed so that you can [run a local server](https://github.com/chrisdarroch/impactrb) for the game, this way we can avoid using any PHP and Apache.


That's it! Next, if I created the Jekyll template correctly, a button should appear automatically right under this text linking to the next part of the tutorial. See you soon and thanks for reading and Please leave a comment or suggestion!
