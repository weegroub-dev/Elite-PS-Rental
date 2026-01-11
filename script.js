/**
 * Toggle Menu Mobile
 */
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.toggle('hidden');
    
    if(!menu.classList.contains('hidden')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
}

/**
 * Scroll Events: Back to Top & Parallax
 */
const backToTopBtn = document.getElementById('back-to-top');
const parallaxBg = document.getElementById('parallax-bg');

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    // Show/Hide Back to Top button
    if (winScroll > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    // Parallax effect for Hero background
    if (parallaxBg && window.innerWidth > 768) {
        parallaxBg.style.transform = `translateY(${winScroll * 0.15}px) scale(1.1)`;
    }
});

/**
 * Intersection Observer for Reveal Animations
 */
const observerOptions = { 
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Memulai observer untuk semua elemen dengan class .reveal
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
});
