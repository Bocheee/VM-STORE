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

