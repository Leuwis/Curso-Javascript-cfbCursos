const caixa = document.querySelector("#caixa")

const curso = "javascript"
const canal = "cfb curso"
// const frase = "Este é o curso de " + curso + " do canal " + canal
//const frase = `Este é o curso de<br> ${curso} do canal<br> ${canal}`

const carros = ["polo","palio","golf","porche"]

let ul = `<ul>`

carros.map((el) => {
    ul += `<li> ${el} </li>` 
})

ul + `</ul>`
caixa.innerHTML = ul