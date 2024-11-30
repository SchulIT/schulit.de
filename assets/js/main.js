import 'flowbite';
import "zoom-vanilla.js/dist/zoom-vanilla.min.js"
import { tns } from "tiny-slider";

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

document.addEventListener('click', function(event) {
    for(let button of document.querySelectorAll('[data-menu-target]')) {
        if(event.target == button) {
            continue;
        }

        let target = document.getElementById(button.getAttribute('data-menu-target'));

        if(target !== null && target.classList.contains("hidden") !== true) {
            if(!target.contains(event.target)) {
                console.log('add classname');
                target.classList.add("hidden");
            }
        }
    }
});

for(let button of document.querySelectorAll('[data-menu-target]')) {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        let target = document.getElementById(button.getAttribute('data-menu-target'));

        if(target !== null && target.classList.contains("hidden") === true) {
            console.log('remove classname');
            target.classList.remove("hidden");
        }
    });
}

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