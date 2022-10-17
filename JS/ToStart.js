/* 
Hacemos el event listener para el 
 titulo del indice, para que nos lleve arriba del todo del documento
 cuando hagamos click ahi 
 */

// Seleccionamos el titulo del indice y lo guardamos en una variable
var indexTitle = document.querySelector('#titulo-indice');

// Hacemos el event listener para el titulo
indexTitle.addEventListener('click', function () {
    scrollToElement(0);
});

// Hacemos que el cursor cambie a puntero al hacer hover en el titulo del indice
indexTitle.addEventListener('mouseover', function () {
    indexTitle.style.cursor = 'pointer';
});

// COMPROBADO: JUEVES 13-10