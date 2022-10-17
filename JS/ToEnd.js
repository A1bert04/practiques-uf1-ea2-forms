/* 
Definiciones para que el ultimo boton del indice nos lleve
hasta el final de la pagina al hacer click ahi 
*/

// Seleccionamos el boton y lo guardamos en una variable
var indexEnd = document.querySelector('#index-end');

// Hacemos el event listener para el boton
indexEnd.addEventListener('click', function () {
    scrollToElement(document.body.scrollHeight);
});

// Hacemos que el cursor cambie a puntero al hacer hover en el boton
indexEnd.addEventListener('mouseover', function () {
    indexEnd.style.cursor = 'pointer';
});

// COMPROBADO: JUEVES 13-10