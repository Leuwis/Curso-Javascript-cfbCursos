//"use strict" //MODO ESTRITO

// var nome = "bruno"


// let n1 =- -10 //INVERTE O VALOR
//console.log(n1)

//OPERADOR TERNARIO

// let n1 = 10;
// let res = (n1%2 ? "impar" : "par");
// console.log(res);

//OPERADOR DE TIPO
// let v1 = 10
// let v2 = 'a'
// let v3 = "Maria"
// let v4 = 4.6
// let v5 = v1 === v2
// console.log(typeof(v1))
// console.log(typeof(v2))
// console.log(typeof(v3))
// console.log(typeof(v4))
// console.log(typeof(v5))


//OPERADOR SPREAD

    // const obj1 = document.getElementsByTagName("div");
    // const obj2 = [...document.getElementsByTagName("div")];


    // console.log(obj1)
    // console.log(obj2)

    // obj2.forEach(element => {
    //     console.log(element);
    // })

    // let i = 0;

    // obj2.forEach(element => {
    //     element.innerHTML = "Div" + i++
    // })
    // console.log(obj2);

    //FOR IN | FOR OFF

    // const objs = document.getElementsByTagName("div");
    // let num = [2, 4, 46, 35, 26];

    // // for(let i = 0; i < num.length; i++){
    // //     console.log(num[i]);
    // // }

   
    // for(o of objs){
    //     console.log(o.innerHTML = "alteradas com for of");
    // }

    // for(o in objs){
    //     console.log(objs[o].innerHTML);
    // }

    //BREAK E CONTINUE
    // let n = 0;
    // let max = 1000;
    // let pares = 0;

    // for(let i = 0; i < max; i++){
    //     if(i%2 != 0){
    //         continue
    //     }
    //     pares++;
    //     console.log("o numero " + i + " é par");
    // }
    // console.log(pares);
    // console.log("fim do programa");

    //PARAMETROS REST
    // function soma(...valores){
    //     let res = 0;

    //     // for(let i = 0; i < valores.length; i++){
    //     //     res += valores[i];
    //     // }
        
    //     // for (let i in valores) {
    //     //     res += valores[i];
    //     // }
        
        
    //     for (let i of valores) {
    //         res += i;
    //     }
    //     return res;

    // }
    // console.log(soma(10, 5, 7, 8));

    // FUNÇÕES ANONIMAS

    // let res = 0;
    // const f = function(...valores){
    //     for (const i of valores) {
    //         res -= i;
    //     }
    //     return res;
    // }

    // console.log(f(10, 5, 7))

    // const f = new Function("v1", "v2", "return v1 + v2"); //FUNÇÃO CONSTRUTOR E ANONIMA

    // console.log(f(12, 14))

    // FUNÇÕES LAMBDA
    
    // const soma = ()=>{}