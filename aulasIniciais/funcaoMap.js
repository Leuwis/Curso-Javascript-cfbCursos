// const cursos = ["HTML", "CSS", "C++", "Javascript"];

// let c = cursos.map((elemento, index)=>{
//     return elemento;
// });

// console.log(c)


//let elemento = document.getElementsByTagName("div");

// elemento = [...elemento]
// elemento.map((el, i) => {
//     //el.innerHTML = "maria"
//     console.log(el);
// })

// const elementos = document.getElementsByTagName("div");

// const valores = Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML)

// console.log(valores);

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e * 2;

let num = ["1", "2", "3", "4", "5"].map(dobrar);



console.log(num)
