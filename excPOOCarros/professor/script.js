const f_nome        = document.querySelector("#f_nome")
const f_portas      = document.querySelector("#f_portas")
const f_municao     = document.querySelector("#f_municao")
const f_blindagem   = document.querySelector("#f_blindagem")
const f_tipoNormal  = document.querySelector("#f_tipoNormal")
const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const carros        = document.querySelector("#carros")
const btn_addCarro  = document.querySelector("#btn_addCarro")
// const btn_removeCarro  = document.querySelector("#btn_removeCarro")

let a_carros = []

const removerCarro = (quem)=>{
    a_carros = a_carros.filter((el)=>{
        return el != quem
    })
}

f_tipoMilitar.addEventListener("click", ()=>{
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click", ()=>{
    f_blindagem.setAttribute("disabled", "true")
    f_municao.setAttribute("disabled", "true")
    f_blindagem.value = ""
    f_municao.value = ""
})

const gerenciarExibicaoCarros=()=>{
    carros.innerHTML = "" 
    a_carros.forEach((ele)=>{
        const div = document.createElement("div")
        div.classList = "carro"
        div.setAttribute("data-nome", ele.Nome)
        div.innerHTML = `Nome: ${ele.Nome} <br> Portas: ${ele.Portas}`
        div.innerHTML += `<br>Blindagem: ${ele.Blindagem} <br> Munição: ${ele.Municao}`

        const remover = document.createElement("button")
        remover.innerHTML = "Remover"
        remover.addEventListener("click", (evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            removerCarro(quemRemover)
            
            gerenciarExibicaoCarros()
        })
        div.appendChild(remover)
        
        // div.addEventListener("click", ()=>{
        //     div.classList.toggle("selecionado")
        // })

        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener("click", ()=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    }else{
        const c = new Carro(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }

    f_nome.value        = ""
    f_portas.value      = ""
    f_blindagem.value   = ""
    f_municao.value     = ""

    gerenciarExibicaoCarros()
})


// btn_removeCarro.addEventListener("click", ()=>{
//     const selecionado   = [...document.querySelectorAll(".selecionado")]

//      selecionado.forEach((ele)=>{
//          ele.remove()
//      })
// })


class Carro{ //CLASSE PAI / BASE
    constructor(nome, portas){
        this.Nome = nome
        this.Portas = portas
        this.Ligado = false
        this.Velocidade = 0
        this.Cor = undefined
    }

    ligar = function(){
        this.Ligado = true
    }

    desligar = function(){
        this.Ligado = false
    }

    setCor = function(cor){
        this.Cor = cor
    }
}

class Militar extends Carro{ //CLASSE FILHO 
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.Blindagem = blindagem
        this.Municao = municao
        this.setCor("Verde")
    }

    atirar = function(){
        if(this.Municao > 0){
            this.Municao --
        }
    }
}

const c1 = new Militar("lutador", 1, 100, 50)
c1.ligar()
c1.atirar()

console.log(`Nome: ${c1.Nome}`)
console.log(`Portas: ${c1.Portas}`)
console.log(`Ligado: ${c1.Ligado? "Sim" : "Não"}`)
console.log(`Velocidade: ${c1.Velocidade}`)
console.log(`Cor: ${c1.Cor}`)
console.log(`Blindagem: ${c1.Blindagem}`)
console.log(`Munição: ${c1.Municao}`)
console.log("------------------------")
