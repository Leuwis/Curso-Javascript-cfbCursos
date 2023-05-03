class Carro{
    constructor(nome, portas, tipo){
        this.Nome   = nome
        this.Portas = portas
        this.Tipo   = tipo

    }   
    getNome=function(){
        return this.Nome
    }

    getPortas=function(){
        return this.Portas
    }

    getTipo=function(){
        return this.Tipo
    }

    setNome=function(nome){
        this.Nome = nome
    }

    setPortas=function(portas){
        this.Portas = portas
    }

    setTipo=function(tipo){
        this.Tipo = tipo
    }
}


class Militar extends Carro{
    constructor(nome, portas, blindagem, municao, tipo){
        super(nome, portas, tipo)
        this.Blindagem = blindagem
        this.Municao = municao
    }

    getBlindagem=function(){
        return this.Blindagem
    }

    getMunicao=function(){
        return this.Municao
    }

    setBlindagem=function(blindagem){
        this.Blindagem = blindagem
    }

    setMunicao=function(municao){
        this.Municao = municao
    }

    
}

class Normal extends Carro{
    constructor(nome, portas, tipo){
        super(nome, portas, tipo)
    }

}



let carrosCriados = []

const nome = document.querySelector("#f_nome")
const portas = document.querySelector("#f_portas")
const blindagem = document.querySelector("#f_blindagem")
const municao = document.querySelector("#f_municao")
const btnAdiciona = document.querySelector("#btnAdiciona")
const res = document.querySelector("#res")
const opcao = [...document.querySelectorAll(".tipo")]

const opSelecionada = opcao.map((ele) => {

    ele.addEventListener("change", (evt) => {
        if(ele.value == "Militar"){
            blindagem.disabled = false
            municao.disabled = false
        }else{
            blindagem.disabled = true
            municao.disabled = true
        }
    })
})


 btnAdiciona.addEventListener("click", (evt)=>{

    const opcaoSelecionada  = document.querySelector("input[name=tipo_carro]:checked")

     if(opcaoSelecionada.value == "Militar"){
        const cMilitar = new Militar(nome.value, portas.value, blindagem.value, municao.value, "Militar")
        carrosCriados.push(cMilitar)
     }else{
        const cNormal = new Normal(nome.value, portas.value, "Normal")
        carrosCriados.push(cNormal)
     }
    nome.value      = ""
    portas.value    = ""
    blindagem.value = ""
    municao.value   = ""
    adiciona()
 })

 const adiciona = (() => {
    if(res.hasChildNodes()){
        const filhos = [...document.querySelectorAll(".imprime_carros")]
        filhos.map((ele) =>{
            ele.remove()
        })
    }
    
    carrosCriados.map((ele) => {
        const div = document.createElement("div")
        div.classList = "imprime_carros"
        div.innerHTML = `Nome: ${ele.getNome()} <br> Quantidade de portas: ${ele.getPortas()} <br> Tipo: ${ele.getTipo()}`
        if(ele.Tipo == "Militar"){
            div.innerHTML += `<br> Blindagem: ${ele.getBlindagem()} <br> Munição: ${ele.getMunicao()}`
        }

        res.appendChild(div)
     })
})  

 