/* 
Este codigo de JS es para que cuando pulsemos el boton
del pie de pagina que pone volver arriba, se nos haga
scroll automatico hasta arriba de la pagina.
*/

// Seleccionamos el boton del pie de pagina
var backToTopButton = document.querySelector('#footer-backtotop');

// Le asignamos un evento onclick que hace scroll hasta arriba
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// COMPROBADO: JUEVES 13-10