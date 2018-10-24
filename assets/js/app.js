require('../scss/app.scss');


const $ = require('jquery');
require('bootstrap');

// Enable jQuery access from outside Webpack
global.$ = global.jQuery = $;

$(document).ready(function() {
    $('.blog-post :header').each(function() {
        var $this = $(this);

        if($this.attr('id') !== null && $this.attr('id') !== undefined) {
            var $link = $('<a href="#' + $this.attr('id') + '" class="heading-link"><i class="fa fa-link"></i></a>');
            $this.append($link);
        }
    });
});