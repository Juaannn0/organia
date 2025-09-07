import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";
import { initRouter } from "./router.js";

// Exportamos las funciones que necesitaremos en otras páginas
export function typeEffect(element, text, speed = 100, callback = null) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

export function initTiltEffect() {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

export function initScrollEffect() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

export function initPageTransitions() {
    document.body.classList.add('page-transition');
}

// Inicialización principal
document.addEventListener("DOMContentLoaded", () => {
    // Header & Footer
    loadHeader();
    loadFooter();

    // Router
    initRouter();

    // Efectos globales
    initScrollEffect();
    initPageTransitions();
});
