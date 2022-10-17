const searchBar = document.querySelector("#search-bar");
const resultsBox = document.querySelector(".results");

// Hacemos que la barra de busqueda esté pegada a la parte de abajo de la barra de navegacion
resultsBox.style.top = searchBar.offsetHeight + 10 + "px";

// Hacemos que mueva la barra de busqueda cuando cambiemos el tamaño de la ventana
window.addEventListener("resize", () => {
  resultsBox.style.top = searchBar.offsetHeight + "px";
});

// Hacemos que los resultados se oculten cuando se haga click fuera de la barra de busqueda o de los resultados
window.addEventListener("click", (e) => {
  if (e.target != searchBar && e.target != resultsBox) {
    resultsBox.style.display = "none";
  }
});

// Hacemos que los resultados se muestren cuando se escriba en la barra de busqueda
searchBar.addEventListener("input", () => {
  resultsBox.style.display = "block";
});

// Hacemos un evento que muestre los resultados cuando se haga click en la barra de busqueda
searchBar.addEventListener("click", () => {
  resultsBox.style.display = "block";
  hideElements();
});


// Hacemos un evento para que cuando se clique fuera de la barra de busqueda se borre lo que hay en ella
window.addEventListener("click", (e) => {
  if (e.target != searchBar) {
    searchBar.value = "";
  }
});

// Hacemos un evento para que cuando se pulse ctrl K se ponga el cursor en la 
// barra de bisqueda y se muestren los resultados
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key == "k") {
    searchBar.focus();
    resultsBox.style.display = "block";
    hideElements();
  }
});

// Desactivamos el atajo Ctrl K del navegador
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key == "k") {
    e.preventDefault();
  }
});

// Hacemos que cuando se pulse escape se cierre la barra de busqueda
window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    searchBar.value = "";
    resultsBox.style.display = "none";
  }
});

// Declaramos la funcion que nos hace scroll automatico a una posicion
function scrollToElement(pos) {
  window.scrollTo({
    top: pos,
    behavior: 'smooth'
  });
}

// Esta funcion relaciona cada resultado con cada titulo para que haga scroll hasta el titulo
function relResultadosTitulos() {
  // Seleccionamos los resultados de busqueda y los guardamos en un array
  var searchResults = document.querySelectorAll(".result");

  // Seleccionamos los titulos de los capitulos que no sean h1 y los guardamos en un array
  var targetElements = document.querySelectorAll(".target-element:not(h1)");

  // Inicializamos el array donde guardaremos la posicion de todos los elementos
  var targetElementsHeights = [];

  // Recorremos el array de titulos y vamos guardando su posicion en targetElementsHeights
  for (let i = 0; i < targetElements.length; i++) {
    let rect = targetElements[i].getBoundingClientRect();
    let top = rect.top + window.scrollY - 50;
    targetElementsHeights.push(top);
  };

  // Para cada resultado, le asignamos un evento onclick que hace scroll al target 
  // correspondiente (con mismo i en el otro array)
  for (let i = 0; i < searchResults.length; i++) {
    searchResults[i].addEventListener('click', function () {
      scrollToElement(targetElementsHeights[i]);
    });
  }
}

relResultadosTitulos();

// Añadimos un evento que vuelva a ejecutar la funcion relResultadosTitulos cuando se cambie el tamaño de la ventana
window.addEventListener('resize', relResultadosTitulos);

// Hacemos una funcion que oculte los elementos que no coinciden con la busqueda
function hideElements() {
  // Seleccionamos todos los resultados posibles
  var searchResults = document.querySelectorAll(".result");

  // Ponemos un contador para contar cuantos resultados se estan mostrando
  // Si no hay texto en la barra, es 3, sino es 0
  let counter = searchBar.value == "" ? 3 : 0;

  // miramos si el texto de dentro de la barra de busqueda coincide con el texto de algun resultado
  for (let i = 0; i < searchResults.length; i++) {

    // Si no coincide, se oculta el resultado
    if (searchResults[i].innerHTML.toLowerCase().includes(searchBar.value.toLowerCase()) && counter < 3) {
      searchResults[i].style.display = "block";
      // Al mostrar un resultado incrementamos el contador en 1 para que no se muestren mas de 3 (al llegar a 3 no se cumplira la condicion)
      counter++;
    } else {
      searchResults[i].style.display = "none";
    }

    // Si el contador no llega a 3 ocultamos el texto de ser mas cocnreto
    if (counter < 3) {
      document.getElementById("write-more").style.display = "none";
    } else {
      document.getElementById("write-more").style.display = "block";
    }
  }

  // Si no hay texto en la barra de busqueda, cambiamos el texto de ser mas concreto por otro
  if (searchBar.value == "") {
    document.getElementById("write-more").innerHTML = "Escribe algo para buscar";
  } else {
    document.getElementById("write-more").innerHTML = "Intenta ser más concreto (+3 resultados)";
  }

}

// Añadimos un evento que ejecute la funcion hideElements cuando se escriba en la barra de busqueda
searchBar.addEventListener("input", hideElements);

// Hacemos una funcion que borre el contenido de la barra de busqueda
function clearSearchBar() {
  searchBar.value = "";
}

// Seleccionamos todos los resultados posibles
var results = document.querySelectorAll(".result");

// Añadimos a cada resultado un eventlistener que limpie la barra de busqueda cuando se hace click en un resultado
results.forEach(result => {
  result.addEventListener("click", () => {
    clearSearchBar();
  });
});

// COMPROBADO 13-10