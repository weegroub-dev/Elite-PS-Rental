// Toggle menu navigasi mobile
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu && icon) {
        menu.classList.toggle('hidden');
        if (!menu.classList.contains('hidden')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }
}

// Efek Scroll (Back to top & Parallax)
window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('back-to-top');
    const parallaxBg = document.getElementById('parallax-bg');
    const winScroll = window.scrollY;

    // Visibility tombol Back to Top
    if (backToTopBtn) {
        if (winScroll > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    // Efek Parallax untuk background hero
    if (parallaxBg && window.innerWidth > 768) {
        parallaxBg.style.transform = `translateY(${winScroll * 0.15}px) scale(1.1)`;
    }
});

// Intersection Observer untuk animasi reveal
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Inisialisasi setelah dokumen siap
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
});
