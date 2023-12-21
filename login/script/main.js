

let botonHTML = document.getElementById('botonHTML');
let listausuarios = [ 
     user = {
        name: "juan",
        email: "juan123@gmail.com",
        password: "juan123"


    },user = {
        name: "vale",
        email: "vale123@gmail.com",
        password: "vale123"


    }

];

///////////////
let email =  document.getElementById("exampleInputEmail1");
let password = document.getElementById('exampleInputPassword1');

let btnlogin = document.getElementById('botonHTML');


btnlogin.addEventListener("click",function login(){

    listausuarios.forEach(function(persona){
        if (persona.email == email.value && persona.password == password.value){
            console.log("Bienvenido");
        }

    });


});





///////////////////7


//_________________________________________________________________

