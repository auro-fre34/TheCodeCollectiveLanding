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
