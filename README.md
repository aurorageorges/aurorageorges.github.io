# aurorageorges.github.io
My Portfolio

## Todo's
- [ ] Fikse luft fra setning til profilbilde på "about me" + enrdre størrelse på bildet eller zoome mer inn på ansiktet mitt?
- [ ] Fiks bildene i riktig rekkefølge med kommentarer
- [x] Circular illustration on frontpage
- [x] Landing page slideshow 
- [x] About and contact on front page (autoscroll)
- [x] Image modals
- [x] Social media links
- [x] Image on about section
- [x] Download resumé from about section
- [x] Color on social media links (animation)
- [ ] ~Add tall pictures to illustrations section~

# Note on brand icons
I'm using [Font Awesome's brand logos](https://fontawesome.com/icons?d=gallery&s=brands). Instead of using the bloated framework made by Font Awesome, I downloaded the individual icons in the SVG format. Also, to make the icons styleable from the CSS, I had to use the `<use>` tag inside the an svg element. Since the `<use>` tag requires the id of the `<svg>` element to draw, it was necessary to edit the individual SVG files, and add the class _icon_ to the paths.

The SVG files were changed from this:
```html
<svg xmlns="http://www.w3.org/2000/svg" ...
```
To this:
```html
<svg id="icon" xmlns="http://www.w3.org/2000/svg" ...
```
