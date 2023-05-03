// const carro = document.getElementById("carro")
// // const btn_direita = document.getElementById("btn_direita")
// // const btn_esquerda = document.getElementById("btn_esquerda")
// const btn_parar     = document.getElementById("btn_parar")
// const btn_iniciar   = document.getElementById("btn_iniciar")

// const init=()=>{
//     carro.style = "position:relative; left:0px; width:100px"
//     tamMax = window.innerWidth - parseInt(carro.style.width)

// }

// let anima = null
// let tamMax = null
// let direcao = 1
// let tamanhoCarro = null

// const mover = ()=>{

//     let posicaoCarro = parseInt(carro.style.left + carro.style.width)

//     if(parseInt(carro.style.left) == 0){
//         direcao = 1
//      }else  if(tamMax <= posicaoCarro){
//         direcao = -1
//     }


//     if(direcao > 0){
//         if(parseInt(carro.style.left) <= tamMax){
//             carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
//             anima = setTimeout(mover, 20, direcao)
//         }else{
//             clearTimeout(anima)
//         }
//     }else if(direcao < 0){
//         if(parseInt(carro.style.left) > 0){
//             carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
//             anima = setTimeout(mover, 20, direcao)
//         }else{
//             clearTimeout(anima)
//         }
//     }    
// }

// btn_parar.addEventListener("click", ()=>{

//     //clearInterval(anima)    //LIMPANDO O INTERVALO (SETINTERVAL)
//     clearTimeout(anima)
// })



// btn_iniciar.addEventListener("click", ()=>{
//     // if(tamMax > parseInt(carro.style.left)){
//     //     mover(1)
//     // }else{
//     //     mover(-1)
//     // }

//     mover()
// })

// // btn_direita.addEventListener("click", ()=>{

// //     //clearInterval(anima)     //LIMPANDO O INTERVALO (SETINTERVAL)
// //     //anima = setInterval(mover, 20, 1)    //USANDO SETINTERVAL

// //     clearTimeout(anima)
// //     mover(1)
// // })

// // btn_esquerda.addEventListener("click", ()=>{

// //     //clearInterval(anima)     //LIMPANDO O INTERVALO (SETINTERVAL)
// //     //anima = setInterval(mover, 20, -1)   //USANDO SETINTERVAL

// //     clearTimeout(anima)
// //     mover(-1)
// // })

// //  window.onload = init
// window.addEventListener("load", init())
// window.addEventListener("resize", ()=>{
//     tamMax = window.innerWidth - parseInt(carro.style.width)
// })


const carro = document.getElementById("carro")
const btn_parar     = document.getElementById("btn_parar")
const btn_iniciar   = document.getElementById("btn_iniciar")

const init=()=>{
    carro.style = "position:relative; left:0px; width:100px; height:40px;"
    tamMax = window.innerWidth - tamanhoCarro

}

let anima = null
let tamMax = null
let direcao = 1
let tamanhoCarro = null

const mover = ()=>{

    if(parseInt(carro.style.left) >= tamMax){
        direcao = -1
    }else if(parseInt(carro.style.left) <= 0){
        direcao = 1
    }

    carro.style.left = parseInt(carro.style.left) + (10*direcao) + "px"
    anima = setTimeout(mover, 20)
}

btn_parar.addEventListener("click", ()=>{

    clearTimeout(anima)
})


btn_iniciar.addEventListener("click", ()=>{
    mover()
})

window.addEventListener("load", init())
window.addEventListener("resize", ()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

//ALTERANDO O TAMANHO DO CARRO
window.addEventListener("keydown", (evt)=>{
    if(evt.code === "ArrowUp"){
        carro.style.width = parseInt(carro.style.width) + 10 + "px"
        carro.style.height = parseInt(carro.style.height) + 10 + "px"
    }
    if(evt.code === "ArrowDown"){
        console.log("clicou")
        carro.style.width = parseInt(carro.style.width) - 10 + "px"
        carro.style.height = parseInt(carro.style.height) - 10 + "px"
    }

    //RECALCULANDO CARRO E TELA
    tamanhoCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth - tamanhoCarro
})