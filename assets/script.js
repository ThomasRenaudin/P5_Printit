
// Récupère les êvenements pouvant avoir lieu sur la page
document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.arrow_left');
    const rightArrow = document.querySelector('.arrow_right');
    const dotsContainer = document.querySelector('.dots');
    const slides = [
        {
            "image": "slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    // Initialise la variable de diapositive actuelle à zéro
    let currentSlideIndex = 0;

    // Fonction qui prends en argument la numéro de la slide demandée et actualise le visuel
    function updateSlide(index) {
        const slide = slides[index]; // On parcourt le tableau de slides et on se place à l'index demandé
        const bannerImg = document.querySelector('.banner-img'); // On récupère l'image de la diapositive actuelle
        const tagLine = document.querySelector('#banner p'); // On récupère la tagligne de la diapositive actuelle
        bannerImg.src = `./assets/images/slideshow/${slide.image}`; // Modification de l'image en récupérant la slide de l'index demandé
        tagLine.innerHTML = slide.tagLine; // Modification de la tag line de facon similaire

        // Mettre à jour la classe dot_selected pour correspondre à l'image affichée.
        const dots = document.querySelectorAll('.dot'); // Selectionne tous les dots
        dots.forEach((dot, dotIndex) => { // Parcours les dots
            dot.classList.toggle('dot_selected', dotIndex === index); // Applique les dot selected au dot avec le bon index. Toggle retire aussi le point selectionné avant
        });
    }

// Création automatique des dots en JS selon nombre de slides à afficher.

    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');// Dot était déja défini dans le css
        if (index === 0) {
            dot.classList.add('dot_selected'); // Dot selected était déja defini dans le css
        }
        dotsContainer.appendChild(dot); // Défini chaque dot comme un élément enfant du dot container --> Le dots du html
    });

    // Fonctione qui actualise le diporama lors du clic sur flèche gauche
    leftArrow.addEventListener('click', () => { 
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // utilisation des modulos pour le retour automatique si dépassement 
        updateSlide(currentSlideIndex); // Appel de la fonction d'actualisation du visuel une fois le bon index calculé
    });

     // Fonctione qui actualise le diporama lors du clic sur flèche droit
    rightArrow.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;// utilisation des modulos pour le retour automatique si dépassement
        updateSlide(currentSlideIndex); // Appel de la fonction d'actualisation du visuel une fois le bon index calculé
    });
});
