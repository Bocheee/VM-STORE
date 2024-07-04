ScrollReveal().reveal('.main-presentacion', {
    delay: 375,
    duration: 500,
    reset: true
});


/*menu hamburguesa*/

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById('menu-toggle');
    let menu = document.getElementById('menu');
    

    menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    });
});



/*carrusel*/
/*
const track = document.querySelector('.contenedor-carrusel');
        const cards = Array.from(track.children);
        const nextButton = document.querySelector('#nextBtn');
        const prevButton = document.querySelector('#prevBtn');

        const cardWidth = cards[0].getBoundingClientRect().width;
        let currentIndex = 0;

        nextButton.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= cards.length / 2) {
                track.style.transition = 'none';
                track.style.transform = `translateX(0px)`;
                currentIndex = 0;
                setTimeout(() => {
                    track.style.transition = 'transform 0.6s ease-in-out';
                    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
                }, 0);
            } else {
                track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
            }
        });

        prevButton.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                track.style.transition = 'none';
                track.style.transform = `translateX(-${cardWidth * (cards.length / 2 - 1)}px)`;
                currentIndex = cards.length / 2 - 1;
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease-in-out';
                    track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
                }, 0);
            } else {
                track.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
            }
        });
*/

let currentIndex = 0;

function showCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + 4) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function next() {
    const cards = document.querySelectorAll('.card');
    if (currentIndex + 4 < cards.length) {
        currentIndex++;
    }
    showCards();
}

function prev() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    showCards();
}

document.addEventListener('DOMContentLoaded', showCards);

/* 
document.addEventListener('scroll', function() {
  const section = document.getElementById('header');
  if (window.scrollY > 100) { // Puedes ajustar este valor según tus necesidades
      section.style.opacity = '0';
      section.style.visibility = 'hidden';
  } else {
      section.style.opacity = '3';
      section.style.visibility = 'visible';
  }
});*/
