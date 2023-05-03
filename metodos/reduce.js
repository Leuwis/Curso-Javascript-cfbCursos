const btnReduzir = document.querySelector("#btnReduzir")
const pArray = document.querySelector("#array")
const result = document.querySelector("#resultado")

const elementoArray = [1, 2, 3, 4, 5]
let aux = []

pArray.innerHTML = elementoArray

btnReduzir.addEventListener("click", (evt) => {
    result.innerHTML = elementoArray.reduce((anterior, atual, posicao) => {
        return atual + anterior
    })
})