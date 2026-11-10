//Programa que calcule el iva y regrese un mensaje dinamino
const IVA= 1.21;
const prod = [
    {nombre:"Arroz",precio:2},
    {nombre:"Alubias",precio:2.5},
    {nombre:"Sopa de pollo",precio:1.8}
];

const cal_Iva= prod.map(precio =>{
    let iva=precio.precio*IVA;
    let mensaje=`Producto:${precio.nombre} || Precio sin iva:${precio.precio} || Con iva:${iva}`;
    return mensaje
});

console.log(cal_Iva);