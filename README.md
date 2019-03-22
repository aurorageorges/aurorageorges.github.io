# aurorageorges.github.io
My Portfolio

## Todo's
- [ ] Increase spacing between paragraph and image in "about me" section
- [ ] Crop "about me" image to make Aurora's face bigger
- [ ] Fix ordering of images on Prouder page
- [ ] Fix ordering of images on Props page
- [ ] Make "click to close" text not overlap images in the image modal
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
