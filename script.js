
/* ========================================
   CEPAS - FUNCIONES DE LA PÁGINA
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {
    // Menú para teléfonos y tabletas
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Cerrar el menú cuando se selecciona una sección
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
                menuToggle.textContent = "☰";
            });
        });

        // Si se amplía la ventana, dejar visible el menú normal
        window.addEventListener("resize", function () {
            if (window.innerWidth > 820) {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
                menuToggle.textContent = "☰";
            }
        });
    }

    // Actualizar el año automáticamente en el pie de página
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Mostrar las imágenes alternativas cuando una imagen no carga
    document.querySelectorAll("img").forEach(function (image) {
        image.addEventListener("error", function () {
            image.style.backgroundColor = "#e9e4d9";
            image.style.minHeight = "120px";
            image.alt = image.alt + " (imagen no disponible)";
        });
    });

    console.log("CEPAS: página institucional cargada correctamente.");
});
