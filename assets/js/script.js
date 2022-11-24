let crearciclo = document.getElementById("crear_ciclo");

crearciclo.addEventListener("click", () => {
    let nombre = prompt("Introduzca el nombre del nuevo ciclo: ");
});

let crearmodulo1 = document.getElementById("crear_modulo1");
let editarmodulo1 = document.getElementById("editar_modulo1");
let crearmodulo2 = document.getElementById("crear_modulo2");
let editarmodulo2 = document.getElementById("editar_modulo2");

crearmodulo1.addEventListener("click", () => {
    let nombre = prompt("Introduzca el nombre del nuevo módulo: ") ;
});

editarmodulo1.addEventListener("click", () => {
    alert("Selecciono un módulo y podrá introducir su nuevo nombre: ");
    let nombre = prompt("Introduzca el nombre del nuevo módulo: "); 
});


crearmodulo2.addEventListener("click", () => {
    let nombre = prompt("Introduzca el nombre del nuevo módulo: ") ;
});

editarmodulo2.addEventListener("click", () => {
    alert("Selecciono un módulo y podrá introducir su nuevo nombre: ");
    let nombre = prompt("Introduzca el nombre del nuevo módulo: "); 
});



