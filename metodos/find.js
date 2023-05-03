

const pArray = document.querySelector("#array")
const txtPesquisar = document.querySelector("#txtPesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementosArray = [10 , 5, 8 , 2, 9, 15, 20]

pArray.innerHTML = "[" + elementosArray + "]"

btnPesquisar.addEventListener("click", (evt) =>{
    resultado.innerHTML = "valor não encontrado!"
    const retorno = elementosArray.find((el, index) => {
        if(el == txtPesquisar.value){
            resultado.innerHTML = "valor encontrado: " + el + " foi encontrado na posição: "+ index + " do array"
        }
    })
})


