document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.navbar__hamburger');
    const menu = document.querySelector('.navbar__menu');
    const overlay = document.getElementById('overlay');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    // Mobile dropdown toggle (fixed to prevent navigation and menu closing)
    document.querySelectorAll('.navbar__dropdown').forEach(dropdown => {
        const link = dropdown.querySelector('.has-dropdown');
        if (link) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth <= 992) {
                    // e.preventDefault(); // Prevent navigation
                    e.stopPropagation(); // Prevent event bubbling
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Prevent dropdown submenu clicks from closing main menu
    document.querySelectorAll('.navbar__submenu a').forEach(subLink => {
        subLink.addEventListener('click', function (e) {
            // Allow normal navigation for submenu items
            // Don't prevent default - let them navigate normally
            if (window.innerWidth <= 992) {
                // Close mobile menu after submenu click
                setTimeout(() => {
                    hamburger.classList.remove('active');
                    menu.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }, 100);
            }
        });
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function () {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking menu links (but not dropdown toggles)
    document.querySelectorAll('.navbar__menu-link:not(.has-dropdown)').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Scroll effect for navbar
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Set active link based on current page
    const currentPage = window.location.pathname;
    document.querySelectorAll('.navbar__menu-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage ||
            (currentPage === '/' && link.getAttribute('href') === '/')) {
            link.classList.add('active');
        }
    });
});