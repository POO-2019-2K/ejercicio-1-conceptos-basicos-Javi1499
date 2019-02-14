import Reservacion from "./Reservacion.js";

let r1 = new Reservacion (
    "Javier Ruiz",
    "Suite",
    "524",
    "3",
    `${new Date("2019/02/17")}`,
    `${new Date("2019/02/21")}`,
    ""


);

r1.imprimir();

let a = new Date();
let b = new Date("2019/02/17");



 let dias = `${b-a}`;
 r1.diasParaLlegada = `${Math.trunc(((Number(dias)) / (1000*60*60*24)))} días para llegada `;
 

r1.imprimir();
