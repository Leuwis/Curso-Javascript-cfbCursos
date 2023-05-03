// const s1 = Symbol()
// console.log(s1)

// const s2 = Symbol()
// console.log(s2)

// console.log(s1 == s2)

// console.log(typeof(s1))

// const s3 = Symbol.for("Deivid")
// const s4 = Symbol.for("Deivid")

// console.log(s3 == s4)

// console.log(Symbol.keyFor(s3))

// class Jogador{
//     constructor(nome){
//         this.Nome = nome
//         this.Id = Symbol()
//     }
// }

// let jogadores = [ new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j1")]

// // let s1 = jogadores[0].Id

// // jogadores = jogadores.filter((ele) => {

// //     return ele.Id != s1

// // })

// let simb = []

// //SELECIONANDO APENAS OS JOGADORES COM NOME J1
// let simb_jogadores = jogadores.filter((j)=>{
//     return j.Nome == "j1"
// })

// //SELECIONANDO OS IDENTIFICADORES DOS JOGADORES S1
// simb = simb_jogadores.map((ele) =>{
//     return ele.Id
// })

// console.log(jogadores)
// console.log(simb_jogadores) 
// console.log(simb)


const nome = Symbol("nome")
const numero = Symbol("numero")
const corUniforme = Symbol("corUniforme")

const Jogador = {
    [nome]:"j1", //ASSOCIANDO A PROPRIEDADE SIMBOL CRIADA ANTERIORMENTE
    [numero]:10,
}
Jogador[corUniforme] = "amarelo"



for (j in Jogador) {
    console.log(j)
}

console.log(Jogador[nome])
console.log(Jogador[numero])
console.log(Jogador[corUniforme])