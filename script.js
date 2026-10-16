document.addEventListener("DOMContentLoaded", () => {
    // 1. Menú Hamburguesa para Móviles
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // 2. Animación de Contadores Numéricos al hacer Scroll
    const counters = document.querySelectorAll(".counter");
    let animated = false;

    const animateCounters = () => {
        counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const duration = 2000; // 2 segundos de duración
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.innerText = target + "+";
                    clearInterval(timer);
                } else {
                    counter.innerText = Math.ceil(current);
                }
            }, stepTime);
        });
    };

    // Detección de scroll para iniciar los contadores
    window.addEventListener("scroll", () => {
        const statsSection = document.getElementById("estadisticas");
        if (statsSection && !animated) {
            const sectionPos = statsSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                animateCounters();
                animated = true;
            }
        }
    });
});
