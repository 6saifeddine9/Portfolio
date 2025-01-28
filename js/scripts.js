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

    // Fonction pour vérifier si la barre de navigation est ouverte
    function isNavbarOpen() {
        return navbar.classList.contains('show');
    }

    // Fonction pour ouvrir la barre de navigation
    function openNavbar() {
        if (!isNavbarOpen()) {
            navbar.classList.add('show');
            console.log('Navbar opened');
        }
    }

    // Écouteur d'événement pour détecter les changements de traduction
    const translateElement = document.getElementById('google_translate_element');
    if (translateElement) {
        translateElement.addEventListener('click', function() {
            console.log('Translation element clicked');
            setTimeout(openNavbar, 500); // Attendre un peu pour que la traduction se termine
        });
    } else {
        console.error('Google Translate element not found');
    }

    // Écouteur d'événement pour détecter la fin de la traduction
    window.addEventListener('google-translate-finished', function() {
        console.log('Translation finished');
        openNavbar();
    });
});
