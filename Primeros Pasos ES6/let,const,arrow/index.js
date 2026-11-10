// Diferencias entre VAR , LET, CONST

/*-----------------LET-----------------*/
//El let nos permite poner limites usando bloques, limites donde no se puede modificar un dato

/*
Este codigo da un error de logica, ya que modifica la variable x dentro del bloque
var x = 10;
if(true){
    var x = 20;
    console.log("variable dentro del bloque: "+ x);
};
console.log("variable fuera del bloque: "+ x);
*/
/*
var x = 10;
if(true){
    var x = 20;
    console.log("variable dentro del bloque: "+ x);
};
console.log("variable fuera del bloque: "+ x);
*/


/*-----------------CONST-----------------*/
//La constante tambien se puede moficiar, lo que no nos permmite modificar son las referencias al objeto si a una variable
//Ej:
/*const persona = {nombre: "Gabi", edad: 20, altura: 1.75};
console.log(persona.edad);
persona.edad = 21;
console.log(persona.edad);

persona = {nombre: "Javi", edad: 25, altura: 1.80};*/

/*
-> Declarar una constante con el nombre y raza  de tu mascota
-> Cambia el nombre a tu mascota y comprueba el error

-> Declara tu edad y suma un anio mas y lo muestras por consola
*/
/*
const nombre = "fido";
const raza = "labrador";
nombre = "roi";


let edad = 20;
console.log(edad);
edad+=1;
console.log(edad);*/

/*--------------------- FUNCIONES FLECHAS------------------------*/
//Es una forma mas simplificada de declarar una funcion

//Funcion Normal
/*function saludar(grupo){
    return 'Hola'+grupo;
}
*/

//Funcion con flecha "=>"
const saludar =(grupo) => 'Hola'+grupo;