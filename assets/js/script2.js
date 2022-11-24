let crearRA = document.getElementById("crear_RA");
let crearCE1 = document.getElementById("crear_ce1");
let editarCE1 = document.getElementById("editar_ce1");
let crearCE2 = document.getElementById("crear_ce2");
let editarCE2 = document.getElementById("editar_ce2");

crearRA.addEventListener("click", () => {
    let nombre = prompt("Introduzca el nombre del nuevo RA: ") ;
});

crearCE1.addEventListener("click", () => {
    let nombre = prompt("Introduzca el nombre del nuevo CE: ") ;
});

editarCE1.addEventListener("click", () => {
    alert("Seleccione un CE y podrá introducir su nuevo nombre: ");
    let nombre = prompt("Introduzca el nombre del CE: "); 
});

crearCE2.addEventListener("click", () => {
    let nombre = prompt("Introduzca el nombre del nuevo CE: ") ;
});

editarCE2.addEventListener("click", () => {
    alert("Seleccione un CE y podrá introducir su nuevo nombre: ");
    let nombre = prompt("Introduzca el nombre del CE: "); 
});
