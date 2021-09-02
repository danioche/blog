+++
title = "Revisiting your own code"
author = ["@danioche"]
date = 2021-02-20
draft = false
+++

Almost two weeks ago I received a call for a good friend of mine, and also owner
of an Hardware Store, those kind of familiar SMEs that are commited to survive
through the years thanks for the every effort and their commitment to the
service more over than the product.

Returning to the point, I developed an small Web Application for managing the
Hardware Store, very basic: Customers, Products, Categories, Billing, and so.
That was on 2004, long time ago, the main porpuse of the project was to migrate
from the previous software installed (MSDOS based, yes!). So I suggested to move
to Server-Client capabilities with Web based system, due the lack of resources
of the server I also suggested to go simple with alrady purchased software:
Windows XP Pro. So you get the idea, IIS, ASP Classic (at these time I was
starting .net but I was more handy with PHP, ASP and so,...). The thing is once
you see the old-fashion code I was feeling with a mixture of shame and pride.


## <span class="section-num">1</span> The Spaggetti-code times {#the-spaggetti-code-times}

The main problem those days was how to avoid the spaggetti-code, how to separate
the layers to avoid coupling on logic and presentation. That was the first thing
I remembered when I was revisiting the code. I remembered my self trying to
solve the puzzle of creating the HTML structure on the fly reading the objects
from the database. That was inspired by previous projects and common problems faced
but I felt kind of proud from my past me.


## <span class="section-num">2</span> The include file {#the-include-file}

Of course also the approach was to separate the business logic from the
functionality / controller that was also included in the project, the only thing
is that all the controlled was included in one library making the class complexity
very high.


## <span class="section-num">3</span> The Documentation and code style {#the-documentation-and-code-style}

Another thing that I'm very proud of is the documentation included in the main
class. Is well structured and aimed to be used and maintained. Cool. The
documentation skills is something that I'm working on improving a lot.


## <span class="section-num">4</span> Final thoughts {#final-thoughts}

The exercise of revisiting your own code is a good practice to see what have you
learned and what you should keep working on. I see it like a retrospective on
the evolution of yourself as a coder. This was because my friend need several
modifications and I realized that a 17 years old code was telling me some
history about myself.

Try it yourself, you may find some take aways from the exercise.
