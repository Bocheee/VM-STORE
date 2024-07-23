


/*menu hamburguesa*/

document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.getElementById('menu-toggle');
    let menu = document.getElementById('menu');
    

    menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    });
});

/*TERMINA EL MENU HAMBURGUESA*/

/* CARRITO TOGGLE */

document.addEventListener('DOMContentLoaded', function(){
    let carritoTogle = document.getElementById('carrito-toggle');
    let menuCarrito = document.getElementById('menu-toggle-carrito');

    carritoTogle.addEventListener('click', function(){
        menuCarrito.classList.toggle('active');
    });
});

/* TERMINA EL CARRITO */

/*FILTROS*/

document.addEventListener("DOMContentLoaded", function() {
    const expandible = document.querySelectorAll(".expandible");

    expandible.forEach(expandible =>{
        expandible.addEventListener("click", function(){ 
            if (expandible.classList.contains("expande")){
                expandible.classList.remove("expande");
                expandible.classList.add("contenedor-filtros");
            
            }else{
                expandible.classList.remove("contenedor-filtros");
                expandible.classList.add("expande");
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carrito = [];
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');

    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const id = card.getAttribute('data-id');
            const name = card.getAttribute('data-name');
            const price = parseFloat(card.getAttribute('data-price'));

            const productIndex = carrito.findIndex(item => item.id === id);
            if (productIndex !== -1) {
                carrito[productIndex].quantity += 1;
            } else {
                carrito.push({ id, name, price, quantity: 1 });
            }

            renderCarrito();
        });
    });

    function renderCarrito() {
        carritoItems.innerHTML = '';
        let total = 0;

        carrito.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${product.name} - $${product.price} x ${product.quantity}
                <button class="btn-remove" data-id="${product.id}">Eliminar</button>
                <button class="btn-increase" data-id="${product.id}">+</button>
                <button class="btn-decrease" data-id="${product.id}">-</button>
            `;
            carritoItems.appendChild(li);

            total += product.price * product.quantity;
        });

        carritoTotal.textContent = total;

        document.querySelectorAll('.btn-remove').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                const productIndex = carrito.findIndex(item => item.id === id);
                if (productIndex !== -1) {
                    carrito.splice(productIndex, 1);
                }
                renderCarrito();
            });
        });

        document.querySelectorAll('.btn-increase').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                const productIndex = carrito.findIndex(item => item.id === id);
                if (productIndex !== -1) {
                    carrito[productIndex].quantity += 1;
                }
                renderCarrito();
            });
        });

        document.querySelectorAll('.btn-decrease').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                const productIndex = carrito.findIndex(item => item.id === id);
                if (productIndex !== -1 && carrito[productIndex].quantity > 1) {
                    carrito[productIndex].quantity -= 1;
                }
                renderCarrito();
            });
        });
    }
});
