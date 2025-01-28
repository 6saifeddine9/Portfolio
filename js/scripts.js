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
        responsiveNavItem.addEventListener('click', (event) => {
            // Check if the clicked element is the Google Translate element
            if (event.target.id === 'google_translate_element' || event.target.closest('#google_translate_element')) {
                event.stopPropagation();
                return;
            }
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Close the navbar when clicking outside of it
    document.addEventListener('click', (event) => {
        const isNavbarOpen = navbarToggler.getAttribute('aria-expanded') === 'true';
        const isClickInsideNavbar = sideNav.contains(event.target) || event.target.closest('#google_translate_element');

        if (isNavbarOpen && !isClickInsideNavbar) {
            navbarToggler.click();
        }
    });

});
