/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbarResponsive');

    // Fonction pour vérifier si la barre de navigation est ouverte
    function isNavbarOpen() {
        return navbar.classList.contains('show');
    }

    // Fonction pour ouvrir la barre de navigation
    function openNavbar() {
        if (!isNavbarOpen()) {
            navbar.classList.add('show');
        }
    }

    // Écouteur d'événement pour détecter les changements de traduction
    document.getElementById('google_translate_element').addEventListener('click', function() {
        setTimeout(openNavbar, 500); // Attendre un peu pour que la traduction se termine
    });
});
