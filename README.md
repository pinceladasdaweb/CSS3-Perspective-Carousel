CSS3 Perspective Carousel
=========================

![](https://raw.github.com/pinceladasdaweb/CSS3-Perspective-Carousel/master/example/assets/img/carousel.jpg)

An awesome carousel developed on top of jQuery with bit of witchcraft of CSS3.

View in action [here](http://www.pinceladasdaweb.com.br/blog/uploads/css3-perspective-carousel/). The slides can also be changed using the arrow keys.

# How to install
You can download the lib:

* [development version](lib/carousel.js)
* [minified version](build/carousel.min.js)

Please, this lib don't have CDN yet, so you need to download and put it in your own site.

# How to use
### Loading the lib

Like I said, download the package and reference the JavaScript and CSS files manually.

Put the CSS in the head section of your HTML document:

```html
<!-- Required CSS for the Carousel lib -->
<link href="/path/to/carousel.min.css" rel="stylesheet" type="text/css" media="all">
```

Put the JavaScript before end of body tag:
```html
<!-- Loading and initialize the Carousel lib -->
<script src="/path/to/carousel.min.js"></script>
<script>
    Carousel.init({
        target: $('.carousel')
    });
</script>
```

Or if you prefer, by way of AMD:
```js
require(['/path/to/carousel.min'], function(Carousel) {
    Carousel.init({
        target: $('.carousel')
    });
});
```

Everywhere you want a carousel to be placed, add the following markup:
```html
<div class="carousel">
    <ul class="carousel-wrapper">
        <li class="carousel-box">
            <img src="/path/to/img" alt="CSS3 Perspective Carousel">
        </li>
        <li class="carousel-box">
            <img src="/path/to/img" alt="CSS3 Perspective Carousel">
        </li>
        <li class="carousel-box">
            <img src="/path/to/img" alt="CSS3 Perspective Carousel">
        </li>
    </ul>
</div>
```

##Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 7+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

* IE7+ (If used jQuery 1.10.1 or greater). Recalling that in IE's less than 10 transitions do not occur via CSS.

## License
The CSS3 Perspective Carousel is licensed under the MIT License.
