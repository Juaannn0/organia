// router.js
import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";

// Función para obtener la ruta base
function getBasePath() {
    // En desarrollo será "/" y en producción "./"
    const script = document.querySelector('script[type="module"]');
    return script?.getAttribute('data-vite-base') || './';
}

// Función para el efecto de typing 
function typeEffect(element, text, speed, callback) {
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

function initHomePageEffects() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = "Organiza tu vida y tu negocio con ";
        const iaText = "IA";
        heroTitle.innerHTML = '';
        typeEffect(heroTitle, originalText, 100, () => {
            const span = document.createElement('span');
            span.textContent = '';
            heroTitle.appendChild(span);
            typeEffect(span, iaText, 150);
        });
    }
}

export function initRouter() {
    const main = document.querySelector("main");
    const basePath = getBasePath();

    async function loadPage(page) {
        try {
            // Usar ruta relativa con el base path
            const resp = await fetch(`${basePath}partials/${page}.html`);
            if (!resp.ok) throw new Error("No se pudo cargar " + page);

            main.classList.add("page-exit");
            await new Promise(resolve => setTimeout(resolve, 300));

            const html = await resp.text();
            main.innerHTML = html;

            main.classList.remove("page-exit");
            main.classList.add("page-enter");
            setTimeout(() => {
                main.classList.remove("page-enter");
            }, 300);

            // Cargar CSS específico
            loadCSS(page);

            // Ejecutar scripts específicos de la página
            if (page === 'home') {
                initHomePageEffects();
            }

        } catch (err) {
            main.innerHTML = "<h2>Error: Página no encontrada</h2>";
            console.error(err);
        }
    }

    // Cargar CSS dinámico de la página
    function loadCSS(page) {
        // Elimina estilos previos
        document.querySelectorAll("link[data-page-style]").forEach(l => l.remove());

        const link = document.createElement("link");
        link.rel = "stylesheet";
        // Usar ruta relativa con el base path
        link.href = `${basePath}css/${page}.css`;
        link.setAttribute("data-page-style", "");
        document.head.appendChild(link);
    }

    function handleRoute() {
        const hash = window.location.hash.replace("#/", "");
        const page = hash || "home";
        loadPage(page);
    }

    window.addEventListener("hashchange", handleRoute);
    handleRoute();
}