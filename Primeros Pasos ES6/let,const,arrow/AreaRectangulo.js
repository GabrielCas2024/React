/*Programa que calcule el Area de un rectangulo*/
let b = 7;
let h = 5;

const cal_Area = (b,h)=> {
    let area = b * h;
    let mensaje= `base= ${b} || altura= ${h} || Area= ${area}`;
    return mensaje;
    
}
console.log(cal_Area(b,h));