document.addEventListener("DOMContentLoaded", () => {
    const teamSlider = document.querySelector(".team-slider");
    const teamMembers = document.querySelectorAll(".team-member");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;
    const totalSlides = teamMembers.length;

    nextButton.addEventListener("click", () => {
        currentIndex++;

        if (currentIndex >= totalSlides) {
            teamSlider.style.transition = "none"; // Quita la transición para reiniciar sin salto
            teamSlider.style.transform = "translateX(0)";
            currentIndex = 0;

            requestAnimationFrame(() => {
                setTimeout(() => {
                    teamSlider.style.transition = "transform 0.5s ease";
                }, 50);
            });
        } else {
            teamSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const explorarBtn = document.getElementById("explorar-proyecto");

    if (explorarBtn) {
        explorarBtn.addEventListener("click", () => {
            window.location.href = "https://imalison.github.io/NomNomLandingPage/";
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollToTopBtn");

    // Mostrar el botón cuando se baja 100px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Volver al inicio al hacer clic
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

