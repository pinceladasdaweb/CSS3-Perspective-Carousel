/*jslint browser: true*/
/*global $, jQuery, define, module, exports*/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root.Carousel = factory(root);
    }
})(this, function () {
    'use strict';

    var Carousel = function (options) {
        if (!this || !(this instanceof Carousel)) {
            return new Carousel(options);
        }

        if (typeof options === 'string') {
            options = { key : options };
        }

        this.target = options.target;
        this.early();
    };

    Carousel.init = function (options) {
        return new Carousel(options);
    };

    Carousel.prototype = {
        early: function () {
            this.target.append('<span class="nav-left"></span><span class="nav-right"></span>');
            this.setupClass();
            this.events();
        },
        isInViewport: function ($el) {
            if (typeof jQuery === "function" && $el instanceof jQuery) {
                $el = $el[0];
            }

            var rect = $el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },
        setupClass: function () {
            var carouselBox = this.target.find('.carousel-box');

            carouselBox.eq(0).addClass('left');
            carouselBox.eq(1).addClass('is-active');
            carouselBox.eq(2).addClass('right');
        },
        moveCarousel: function ($el, direction, reverse, callback) {
            var $current = this.target.find('.is-active'),
                indexActive;

            $el.removeClass(direction);
            $current.removeClass('is-active').addClass(direction);

            indexActive = $current.siblings('.' + reverse).removeClass(reverse).addClass('is-active').index();
            indexActive = callback(indexActive, $el);

            $el.eq(indexActive).addClass(reverse);
        },
        events: function () {
            var self = this;

            this.target.on('click', '.nav-left, .left', function (e) {
                e.preventDefault();
                self.moveCarousel(self.target.find('.carousel-wrapper li'), 'right', 'left', function (cur, $el) {
                    if (cur === 1) {
                        return '0';
                    }

                    return cur - 1;
                });
            });

            this.target.on('click', '.nav-right, .right', function (e) {
                e.preventDefault();
                self.moveCarousel(self.target.find('.carousel-wrapper li'), 'left', 'right', function (cur, $el) {
                    if (cur === $el.length - 1) {
                        return '0';
                    }

                    return cur + 1;
                });
            });

            $(document).keyup(function (e) {
                if (e.which === 39 && self.isInViewport(self.target)) {
                    self.target.find('.nav-right').trigger('click');
                }

                if (e.which === 37 && self.isInViewport(self.target)) {
                    self.target.find('.nav-left').trigger('click');
                }
            });
        }
    };

    return Carousel;
});