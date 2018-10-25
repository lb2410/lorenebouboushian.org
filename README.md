# lorenebouboushian.org

lorene bouboushian

## markdown stuff:

links:
`[whatever you want the link to say](https://futuredeath.agency)

images (replace `WHAT_EVER_IMAGE.jpg` with whatever image...)
`![alt text](/lorenebouboushian.org/assets/images/WHAT_EVER_IMAGE.jpg)`

upload images here: [/assets/images/](https://github.com/edwardsharp/lorenebouboushian.org/tree/master/assets/images)

[markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## useful directories:

[/_pages/](https://github.com/edwardsharp/lorenebouboushian.org/tree/master/_pages) main pages that will get added to the main navigation. 

pages need this at the top (note the position is a number that sets the order it's positioned in the navigation):

```yaml
---
layout: page
name: THE NAME OF YOUR PAGE
position: 1
---
```

[/_posts/](https://github.com/edwardsharp/lorenebouboushian.org/tree/master/_posts) the post with the newest date will get shown on the home/landing page. to create a new post add a file with a name like `YEAR-MONTH-DAY-something.md` (ex: `2018-10-24-autumn.md`). posts need this at the top:

```yaml
---
layout: page
title:  WHATEVER YOU WANT YOUR PAGE TO BE TITLE
date: 2018-10-24
categories: stuff
excerpt_separator: <!--more-->
---
```

_note:_ put `<!--more-->` at the bottom of page (anything that comes after `<!--more-->` will get cutoff on the landing/home page). 

## local development 

`bundle exec jekyll serve`

🗣 [jekyll](https://jekyllrb.com/docs/)

made with 🖤 in NYC
