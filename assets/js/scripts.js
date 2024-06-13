document.addEventListener('DOMContentLoaded', () => {
    // Burger menu functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // Modal functionality
    const modal = document.querySelector('.modal');
    const modalClose = modal ? modal.querySelector('.modal-close') : null;
    const modalTrigger = document.querySelector('.modal-trigger');

    if (modal && modalClose && modalTrigger) {
        modalTrigger.addEventListener('click', () => {
            modal.classList.add('modal-active');
        });

        modalClose.addEventListener('click', () => {
            modal.classList.remove('modal-active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('modal-active');
            }
        });
    }

    // Lightbox functionality
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
    const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

    if (galleryImages.length && lightbox && lightboxImg && lightboxClose) {
        galleryImages.forEach(image => {
            image.addEventListener('click', () => {
                lightboxImg.src = image.src;
                lightbox.classList.add('lightbox-active');
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('lightbox-active');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('lightbox-active');
            }
        });
    }

    // Scroll to top button functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
