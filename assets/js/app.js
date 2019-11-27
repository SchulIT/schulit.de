require('../scss/app.scss');

require('bootstrap.native');

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