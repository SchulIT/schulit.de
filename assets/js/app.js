require('../scss/app.scss');
require('../../node_modules/tiny-slider/src/tiny-slider.scss');

import { Tooltip, Dropdown, Carousel } from 'bootstrap';
import AOS from 'aos';
import { tns } from "tiny-slider";

require('../../node_modules/zoom-vanilla.js/dist/zoom-vanilla.min.js');

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

    // ----------------------------
    // AOS
    // ----------------------------
    AOS.init({
        once: true
    });

    document.querySelectorAll('.story-slider').forEach(function(element) {
        if(element.children.length > 0) {
            let slider = tns({
                container: element,
                items: 1,
                prevButton: false,
                nextButton: false,
                autoplay: true,
                navPosition: 'bottom',
                controls: false,
                autoplayButtonOutput: false
            });
        }
    });
});