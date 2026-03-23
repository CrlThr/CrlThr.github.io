const sliderStates = {};

function moveSlider(sliderId, direction) {
    // On récupère le wrapper spécifique au slider cliqué
    const sliderWrapper = document.querySelector(`#${sliderId} .slider-wrapper`);
    const slides = sliderWrapper.querySelectorAll('img');
    const totalSlides = slides.length;

    // Initialiser l'état si c'est le premier clic sur ce slider
    if (sliderStates[sliderId] === undefined) {
        sliderStates[sliderId] = 0;
    }

    // Calculer le nouvel index
    sliderStates[sliderId] += direction;

    // Boucler (si on dépasse la fin, on revient au début)
    if (sliderStates[sliderId] >= totalSlides) {
        sliderStates[sliderId] = 0;
    } else if (sliderStates[sliderId] < 0) {
        sliderStates[sliderId] = totalSlides - 1;
    }

    // Appliquer le mouvement
    const offset = -sliderStates[sliderId] * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
}