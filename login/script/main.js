let formularioHTML = document.getElementById('formularioHTML');

let botonHTML = document.getElementById('botonHTML')

console.log(botonHTML);

formularioHTML.addEventListener("submit", function(e) {
    e.preventDefault()
    let datosFormulario = document.getElementById('formularioHTML');


    console.log("hola")
    console.log(datosFormulario.exampleInputPassword1.value, "jesus");
    
});

