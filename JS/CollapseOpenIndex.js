/* 
Codigo para contraer y expandir el indice.
En el programa guardamos todos los titulos del indice y añadimos eventos que al hacer click expandan ese capitulo y contraiga todos los demás.
*/

// 1 - Hacemos que al cargar la pagina el capitulo 2 este expandido
var cap2Title = document.querySelector('#index-chapter-2');
cap2Title.setAttribute('open', 'true');

// 2 - Hacemos que al hacer click en el titulo de un capitulo se expanda o contraiga

// Seleccionamos todos los titulos de capitulo
var chapterTitles = document.querySelectorAll('.index-chapter-expandable');

// Para cada titulo de capitulo, le asignamos un evento onclick que expande o contrae
// el capitulo correspondiente
for (let i = 0; i < chapterTitles.length; i++) {

    // A cada elemento le añadimos el EventListener
    chapterTitles[i].addEventListener('click', function () {

        // Seleccionamos el capitulo correspondiente
        let chapter = document.querySelector('#index-chapter-' + (i + 2));

        // Si al hacer click esta abierto, lo cerramos
        if (chapter.hasAttribute('open')) {
            chapter.removeAttribute('open');
        } else {
            // Si al hacer click esta cerrado, lo abrimos
            chapter.setAttribute('open', 'true');
        }

        // Ademas cerramos el resto de elementos a los que no se ha hecho click
        for (let j = 0; j < chapterTitles.length; j++) {
            // Comprobamos que no es el elemento al que se ha hecho click
            if (j != i) {
                let chapter = document.querySelector('#index-chapter-' + (j + 2));
                chapter.removeAttribute('open');
            }
        }

    });

}

// COMPROBADO: JUEVES 13-10