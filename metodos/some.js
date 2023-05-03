const pArray = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementosArray = [16, 21, 25, 19, 20, 18, 22]
pArray.innerHTML = elementosArray

btnVerificar.addEventListener("click", (evt) => {

    const maior18 = elementosArray.some((ele, ind) => {
        if(ele < 18){
            resultado.innerHTML = "Array não conforme na posição: " + ind 
        }

        return ele >= 18
        
    })
    if(maior18){

        resultado.innerHTML = "array conforme"
    }
})