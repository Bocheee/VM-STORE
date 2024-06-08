ScrollReveal().reveal('.main-presentacion', {
    delay: 375,
    duration: 500,
    reset: true
});


/*menu hamburguesa*/
/*
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu');
  
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
});

*/

const menuIcon = document.querySelector('.menu-icon') 
const mainItem = document.querySelector('.main-item') 
const menuContainer = document.querySelector('.menu-container') 
const menuItems = document.querySelectorAll('.menu-item') 

function menuToggle(){
  menuContainer.classList.toggle('active')
  menuIcon.classList.toggle('active')
}

mainItem.addEventListener('click', menuToggle)

menuItems.forEach(item =>{ 
  item.addEventListener('click', menuToggle)
})