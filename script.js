// Toggle navigasi mobile
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

// Event Scroll
window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('back-to-top');
    const parallaxBg = document.getElementById('parallax-bg');
    const winScroll = window.scrollY;
    
    // Tombol Back to Top
    if (winScroll > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    // Parallax background hero
    if (parallaxBg && window.innerWidth > 768) {
        parallaxBg.style.transform = `translateY(${winScroll * 0.15}px) scale(1.1)`;
    }
});

// Animasi muncul saat scroll (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
