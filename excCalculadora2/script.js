const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const teclaOnOff = document.querySelector("#tOnOff")
const teclaLimpar = document.querySelector("#tLimpar")
const teclaIgual = document.getElementById("tIgual")
const teclaApagar = document.getElementById("tApagar")
const tcpy = document.querySelector("#tCpy")
const calc_aba = document.querySelector("#calc_aba")
const calc = document.getElementById("calc")
const img_aba_calc = document.getElementById("img_aba_calc")

let sinal = false
let decimal = false

//SUBSTITUIR O ZERO INICIAL
const tiraZero = function(){
    if(display.innerHTML == "0"){
        display.innerHTML = ""
    }
}

//ADICIONANDO NUMEROS
teclasNum.map((ele)=>{
    ele.addEventListener("click", (evt)=>{
        sinal = false
       

        if(evt.target.innerHTML == ","){
            if(!decimal){
                if(display.innerHTML == 0){
                    decimal = true
                    display.innerHTML = "0,"
                }else{
                    decimal = true
                    display.innerHTML += ele.innerHTML
                }
            }
        }else{
            tiraZero()
            display.innerHTML += ele.innerHTML
        }
    })
})

//ADICIONANDO SINAIS
teclasOp.map((ele)=>{
    ele.addEventListener("click", (evt)=>{

        //BLOQUEADO A ADIÇÃO DE MAIS DE UMA OPERAÇÃO CONSECUTIVA
        if(!sinal){

            sinal = true
            tiraZero()

            //SUBSTITUINDO O X PELO * NA MULTIPLICAÇÃO
            if(evt.target.innerHTML == "X"){
                display.innerHTML += "*"
            }else{

                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

//LIMPAR
teclaLimpar.addEventListener("click", ()=>{
    sinal = false
    decimal = false
    display.innerHTML = "0"
})

//EFETUANDO OPERAÇÃO
teclaIgual.addEventListener("click", ()=>{
    sinal = false
    decimal = false

    const res = eval(display.innerHTML)

    display.innerHTML = res
})

//APAGANDO ULTIMO CARACTERE
teclaApagar.addEventListener("click", ()=>{
  
    let valor = display.innerHTML

     if(valor.length <= 1){
         display.innerHTML = "0"
     }else{
        display.innerHTML = valor.substring(0, valor.length - 1)
     }
    
    
})


//EXIBINDO / ESCONDENDO CALCULADORA
calc_aba.addEventListener("click", (evt)=>{
    calc.classList.toggle("calc_exibir")
    if(calc.classList.contains("calc_exibir")){
        img_aba_calc.setAttribute("src", "icones/setaEsquerda.svg")
    }else{
        img_aba_calc.setAttribute("src", "icones/setaDireita.svg")
    }
})

//COPIANDO O VALOR DO DISPLAY PARA A AREA DE TRANFERENCIA
//tcpy.addEventListener("click", ()=>{
    //navigator.clipboard.writeText(display.innerHTML)


    // const copiandoTeste = document.getElementById("teste")
    // copiandoTeste.select()//PARA MOBILE
    // copiandoTeste.setSelectionRange(0,99999) //PARA MOBILE
    // navigator.clipboard.writeText(copiandoTeste.value)
//})