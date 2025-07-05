# Intro

This is a small project to track the progress and data from a basketball play.

# Instructions

Just launch the app with Python

``` $> python app.py ```

Include here some info for "deployment"

# Data output and reporting

The main idea behind this is to take a game as a consecutions of events that are logged. So the app it mainly does this for you, helps you to record every event (at least the relevant ones):
 - Points
    - Missing points
 - Valuable actions
    - Rebounds
    - Assistances
 - Foults

All these actions are being recorded by funciton logEvent.

# Dependencies

Mainly HTML, CSS and Javascript project, just using Flask and Python to serve HTTP routes.

``` pip install Flask ```

# Version History

All the main versions changes and comments.

## The begginnings 

The project started as an idea in one-page HTML + CSS + Javascript format from several codepens ideas.

## In this version

Version 0.1 - v0.1 - aka "Game start"

- Refactor: Separating the old scoreboard.js into the many functions by "domain", first step to OOP but not yet there.
- New menu: Creation of a new menu for the main available options (more to come)
- Edit Players' DB: Very happy with this to avoid users to edit data/players.js 
- Live, one step closer: Reading from Google Sheets (live get data still not using it 100%)
- Tags! adding tag-version control to the repo: going public someday?
- Proper Readme

Version 0.2 - v0.2 - aka "Enjoy Play"

- Grid for better throwing stats (Ball pos in logs now refers to grid)
- Better point and click ball picking
- Second "enemy" player: Added search, DB edit, shirt color edit 
- More entropy :D more technical debt to solve in the near future
- Web mobile version CSS (light version)

## TODO

- Second Icon for second player
- Saving method by AJAX
- Allow user to configure the input from minimal to "all covered"
- Live publication
- Making this project a Webapp 
- Stats in-game with scroll layer (horizontal or vertical)

# Credits and References

Thanks to CB El FARO to allowing to use their logos and allowing me to sharing the idea.
Thanks to Alma, the greatest basketball player ever... and also my daughter.

This project has some inspiration in the following codes/projects:

* https://codepen.io/rametta/pen/EZpMmr 
* https://codepen.io/praxeds/pen/XWEdjWM
* https://jsfiddle.net/fLo4uatw/
* https://stackoverflow.com/questions/22885702/html-for-the-pause-symbol-in-audio-and-video-control#27053825
