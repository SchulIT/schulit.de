require('../scss/app.scss');

import 'bootstrap'
import jQuery from 'jquery'
import AOS from 'aos';
import 'slick-carousel';

require('../../node_modules/zoom-vanilla.js/dist/zoom-vanilla.min.js');

(function ($) {
    'use strict';

    // ----------------------------
    // AOS
    // ----------------------------
    AOS.init({
        once: true
    });


    $(window).on('scroll', function () {
        //.Scroll to top show/hide
        var scrollToTop = $('.scroll-top-to'),
            scroll = $(window).scrollTop();
        if (scroll >= 200) {
            scrollToTop.fadeIn(200);
        } else {
            scrollToTop.fadeOut(100);
        }
    });
    // scroll-to-top
    $('.scroll-top-to').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(document).ready(function() {

        // navbarDropdown
        if ($(window).width() < 992) {
            $('.main-nav .dropdown-toggle').on('click', function () {
                $(this).siblings('.dropdown-menu').animate({
                    height: 'toggle'
                }, 300);
            });
        }

        $('.story-slider').slick({
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true
        });
    });

})(jQuery);

function createElementFromHtml(html) {
    var template = document.createElement("template");
    template.innerHTML = html.trim();
  
    return template.content.firstChild;
  }

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.blog-post h1, .blog-post h2, .blog-post h3, .blog-post h4, .blog-post h5, .blog-post h6').forEach(function(el) {
        let id = el.getAttribute('id');

        if(id !== null) {
            let link = '<a href="#' + id + '" class="heading-link"><i class="fa fa-link"></i></a>';
            el.appendChild(createElementFromHtml(link));
        }
    });
});