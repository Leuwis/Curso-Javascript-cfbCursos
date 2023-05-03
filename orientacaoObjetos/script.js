// class Pessoa{

//     constructor(pNome, pIdade){
//         this.Nome = pNome
//         this.Idade = pIdade
//     }
//     getNome(){
//         return this.Nome
//     }

//     getIdade(){
//         return this.Idade
//     }

//     setNome(nome){
//         this.Nome = nome
        
//     }
//     setIdade(idade){
//         this.Idade = idade
//     }

//     info(){
//         console.log(`Nome..: ${Nome}`)
//         console.log(`Idade..: ${Idade}`)
//         console.log("-----------------")
//     }
// }

// const nome = document.querySelector("#f_nome")
// const idade = document.querySelector("#f_idade")
// const res = document.querySelector("#res")
// const adicionar = document.querySelector("#btn_adicionar")
// let nova_pessoa = []

// const adiciona = (() => {
//      res.innerHTML = ""
//     nova_pessoa.map((el) => {
//         const div = document.createElement("div")
//         div.setAttribute("class", "pessoa")
//         div.innerHTML = `Nome: ${el.getNome()}<br> idade: ${el.getIdade()}`
//         res.appendChild(div)
//     })
// })

// adicionar.addEventListener("click", () => {
    

//     const pessoa = new Pessoa(nome.value, idade.value);
//     nova_pessoa.push(pessoa)
//     //res.innerHTML += `Nome..: ${pessoa.getNome()} <br> Idade..: ${pessoa.getIdade()} <br>`

//     adiciona()
//     nome.value = ""
//     idade.value = ""
//     nome.focus()
//     console.log(nova_pessoa)
// })

function Pessoa(pNome, pIdade){

   
    this.Nome = pNome,
    this.Idade = pIdade,
    
    this.getNome = function(){
        return this.Nome
    },

    this.getIdade = function(){
        return this.Idade
    },

    this.setNome = function(nome){
        this.Nome = nome
        
    },
    
    this.setIdade = function(idade){
        this.Idade = idade
    },

    this.info = function(){
        console.log(`Nome..: ${Nome}`)
        console.log(`Idade..: ${Idade}`)
        console.log("-----------------")
    }
}

const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")
const res = document.querySelector("#res")
const adicionar = document.querySelector("#btn_adicionar")
let nova_pessoa = []

const adiciona = (() => {
     res.innerHTML = ""
    nova_pessoa.map((el) => {
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${el.getNome()}<br> idade: ${el.getIdade()}`
        res.appendChild(div)
    })
})

adicionar.addEventListener("click", () => {
    

    const pessoa = new Pessoa(nome.value, idade.value);
    nova_pessoa.push(pessoa)
    //res.innerHTML += `Nome..: ${pessoa.getNome()} <br> Idade..: ${pessoa.getIdade()} <br>`

    adiciona()
    nome.value = ""
    idade.value = ""
    nome.focus()
    console.log(nova_pessoa)
})
