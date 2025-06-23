document.addEventListener('DOMContentLoaded', () => {
    // Support both index.html and other pages
    const mobileMenuButton = document.getElementById('mobile-menu-button') || document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Close menu when a link is clicked (for all links inside mobile menu)
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}); 