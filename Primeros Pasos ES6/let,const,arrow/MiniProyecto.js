/*Programa que mediante una lista de estudiantes muestra un reporte personalizado usando map + arrow function y template*/
//El reporte dira nombre, edad y la nota

//Creamos array con los datos de los estudiantes 
const estudiantes= [
    {nombre: "Gabriel",edad:20,nota:10},
    {nombre: "Ruben",edad:19,nota:10},
    {nombre: "Luismi",edad:24,nota:10},
    {nombre: "Jose",edad:25,nota:7.8},
    {nombre: "Alberto",edad:20,nota:6},
    {nombre: "Julian",edad:18,nota:8.5},
]
//Funcion de flecha 
const reporte=estudiantes.map(est=>{
    let mensaje=`Estudiante:${est.nombre} 
                 nota:${est.nota}
                 edad:${est.edad}`
    return mensaje;
});
console.log(reporte);