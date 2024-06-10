ScrollReveal().reveal('.main-presentacion', {
    delay: 375,
    duration: 500,
    reset: true
});


/*menu hamburguesa*/

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
});

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
