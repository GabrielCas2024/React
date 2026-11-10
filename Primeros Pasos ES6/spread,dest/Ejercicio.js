//Ejercicio para practicar

//Creamos un array de 5 elementos
const array=[1,2,3,4,5];
//Agregamos un SpreadArray y sumamos un elemento mas
const SpreadArray=[...array,6];
console.log(SpreadArray);

//Usamos el destructuring para obtener el primero, segundo y el resto de los datos
const [a,b,...resto]= SpreadArray;
console.log(a);
console.log(b);
console.log(resto);


