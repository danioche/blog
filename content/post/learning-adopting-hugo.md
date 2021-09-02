+++
title = "Learning and adopting Hugo on this blog"
author = ["Dani Pedroche"]
date = 2021-04-03
tags = ["hugo", "org"]
draft = false
+++

This is my very first post exported from Hugo...
Let's learn!

-   Properties don't work.
-   Title is not present
-   Date is not present

I try to move properties to the top. Does not work
I move it on the subtree.
I have included a title
I have exported when cursor was inside the subtree and seems that is working!


## My learning curve {#my-learning-curve}

**First you need to understand Hugo**

I started with Hugo (<https://gohugo.io/>) by experimenting with one
beautiful theme <https://themes.gohugo.io/anatole/>, thanks to this
the theme and the sample project I started to understand better
how Hugo worked.

The main concept that took me time to understand was how Hugo
structured the project and the same time how _the hell_ generates the
published site code.

You can follow this link to know how a Hugo project is strucutred:

-   <https://gohugo.io/content-management/organization/>

Installing and configuring the site was not too hard, the problem
was **getting used to** the publishing process.

Initially I thought that in some dir will be the generated files,
but then realized that Hugo serves the content from memory so
unless you specify the export there is no generated file.

Once I understood the content generation and the structure then I
started moving to the next problem. How I migrate / publish from
my Org-mode?

**Adding ox-hugo**

This blog is mainly focused in the concept on how with the minimal
over-enginering I can post, as I commented in previous posts.

After managing to reduce the blog in one org file, one css and
publishing and exporting with Emacs I found myself no too happy
with the result because the lack of UI-kindyness. Then I returned
to investigate in Hugo but I wanted to keep my posts and also the
concept on being minimal avoiding server side and other kind of
language to process or store simply text.

So I revisited my Emacs configuration, I tried with Doom Emacs,
but again the same... I find it over-bloated for just editing...

I make up again my .emacs config with the esential and I added
ox-hugo.

Instructions here:

-   <https://ox-hugo.scripter.co/> Main page

Installation is a piece of cake, is just installing the package
from MELPA, the problem (at least I had that problem) is
understanding how the meta-data works and how you export the org
files.

In the Auto-exportation section I had the tips and tools to adopt
the ox-hugo workflow [here is the relevant info](https://ox-hugo.scripter.co/doc/auto-export-on-saving/).

As you can see on the beginning of this post you will find the
final steps when I finally realized the meta-tags needed and how
to export the org file (subtree in fact) to create automatically
the post.

The most relevant thing is also remarked in the documentation:

-   HUGO\_BASE\_DIR
-   HUGO\_SECTION

These properties once setted will allow org file to reach the
correct destination folder and then have the posts published on
place.


## Putting all together {#putting-all-together}

Steps:

1.  Start with Hugo and some Theme
2.  Configure and modify the Theme and make it "yours"
3.  Go to Emacs and add ox-hugo
4.  Test with some org file configuring and exporting
5.  Ready to go!

As you can see is not sooo hard, this could be your next week-end
project if you are interested! Enjoy!
