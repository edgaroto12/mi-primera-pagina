let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
navBar = document.querySelector(".navbar");
navBar.classList.toggle("active");
};

//alert("Hola este es mi Javascript");
//let nombre = "marta";
//nombre = "maria";

//var nombre1 = "marta";

//const nombre2 ="marta";

//console.log(nombre,nombre1,nombre2);

//SELECCIONAR ELEMENTOS

//let contenidoTitulo = "Maria";
//let titulo = document.querySelector(".logo .fuente-acento");
//titulo.innerHTML = contenidoTitulo;

//Condicionales

//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if (textoTitulo == "Maria") {
  //titulo.innerHTML = "Otro";
//} else {
  //console.log("No se cumple");
//}

//Funciones

//let curos = "sotfware";
//let tecnico = "Industrias";
//let EDGAR_GOMEZ = "PEDRO PARAMO";
//let parrafo = document.querySelector(".parrafo2");
//function cambiartexto(curos, tecnico, cordialmente) {
  //let contenido = `Estoy cursando mi ${curos} de diseño de pagina web. me gustaria poder continuar con la in genieria de sistemas, o de desarrollardor de software, para asi poder dar soporte ${tecnico} a empresas y negocione sque necesiten crear y diseñar una pagina web. gracias por su valio0sa colaboracion y ayuda. Cordialmente${EDGAR_GOMEZ},`;

  //return contenido;
//}
//parrafo.innerText = cambiartexto(curos, tecnico, EDGAR_GOMEZ);
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 5) {
    warnings += `El nombre debe contener más de 5 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});