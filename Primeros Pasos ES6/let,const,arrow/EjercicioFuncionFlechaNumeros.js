/*Crear una funcion flecha que recibe una lista numeros y devuelve unicamente los pares*/

//Variables a usar
let numeros = [1,2,3,4,5,6,7,8,9,10];
//Creamos funcion flecha con nombre NumerosPares 
const numerosPares= numeros.filter(numero=>numero%2==0);
console.log(numerosPares);