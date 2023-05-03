// let valores = [1,2]
// const op = [
//     (val)=>{
//         let res = 0
//         for(v of val){
//             res += v
//         }
//         return res
//     },
//     (val)=>{
//         let res = 1
//         for(v of val){
//             res *= v
//         }
//         return res
//     },
//     (val)=>{
//         for(v of val){
//             console.log(v)
//         }
//     }
// ]

// // console.log(op[0](valores))
// console.log(op[1](valores))
// op[2](valores)



const campo1 = document.querySelector("#campo1")
const campo2 = document.querySelector("#campo2")
const resul = document.querySelector("#resultado")

const soma = document.querySelector("#soma")
const subtracao = document.querySelector("#subtracao")
const multiplicacao = document.querySelector("#multiplicacao")
const divisao = document.querySelector("#divisao")

let res = 0

const operador = [
     (val1, val2)=>{
          res = parseInt(val1) + parseInt(val2)
          return res
     },
     (val1, val2)=>{
          res = parseInt(val1) - parseInt(val2)
          return res
     },
     (val1, val2)=>{
          res = parseInt(val1) * parseInt(val2)
          return res
     },
     (val1, val2)=>{
          res = parseInt(val1) / parseInt(val2)
          return res
     }
]
soma.addEventListener("click", () => {
     const r = operador[0](campo1.value, campo2.value)
     console.log(r)
})
subtracao.addEventListener("click", () => {
     const r = operador[1](campo1.value, campo2.value)
     console.log(r)
})
multiplicacao.addEventListener("click", () => {
     const r = operador[2](campo1.value, campo2.value)
     console.log(r)
})
divisao.addEventListener("click", () => {
     const r = operador[3](campo1.value, campo2.value)
     console.log(r)
})

