/* 
Este codigo de JS es para que los botones del indice de la izquierda
hagan autoscroll a la posicion de la seccion correspondiente.

Para hacerlo primero se obtiene la posicion de cada seccion
(cuya clase es target-element) y se guarda en un array.

Posteriormente agregamos un event listener a cada boton del indice
(clase: scroll-onclick) para que cuando se haga click se 
llame a la funcion ScrollToElement, y le pasamos de parametro
la posicion de la seccion correspondiente (que hemos conseguido
en el paso anterior)
*/

// Declaramos la funcion que nos hace scroll automatico a una posicion
function scrollToElement(pos) {
    window.scrollTo({
        top: pos,
        behavior: 'smooth'
    });
}

function main() {
    // Seleccionamos los elementos del indice y los guardamos en un array
    var indexButtons = document.querySelectorAll('.scroll-onclick');

    // Seleccionamos los titulos de los capitulos y los guardamos en un array
    var targetElements = document.querySelectorAll('.target-element');

    // Aconseguimos la posicion de todos los elementos y los guardamos en un array
    var targetElementsHeights = [];

    // Recorremos el array de elementos y vamos guardando su posicion en targetElementsHeights
    for (let i = 0; i < targetElements.length; i++) {
        let rect = targetElements[i].getBoundingClientRect();
        let top = rect.top + window.scrollY - 50;
        targetElementsHeights.push(top);
    };

    // Para cada boton del indice, le asignamos un evento onclick que hace scroll al target 
    // correspondiente (con mismo i en el otro array)
    for (let i = 0; i < indexButtons.length; i++) {
        indexButtons[i].addEventListener('click', function () {
            scrollToElement(targetElementsHeights[i]);
        });
    }

}

main();

// Añadimos un evento que vuelva a ejecutar la funcion main cuando se cambie el tamaño de la ventana
window.addEventListener('resize', main);

// COMPROBADO: JUEVES 13-10