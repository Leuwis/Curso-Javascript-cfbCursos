//IMPORTANDO CAIXA DE MSG
import { Cxmsg } from "../headerReaproveitavel/caixaMsg.js"

const config={
    cor:"red",
    tipo:"S/N",
    comando_sn:()=>{
        console.log("clicou")
    }
}

const timer = document.querySelector("#timer")
const btn_iniciar = document.querySelector("#btn_iniciar")
const btn_parar = document.querySelector("#btn_parar")
const btn_zerar = document.querySelector("#btn_zerar")
const btn_parcial= document.querySelector("#btn_parcial")
const parciais = document.querySelector("#parciais")

let intervalo = null

let tmpini= null

const contador=()=>{
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = cont/1000
    timer.innerHTML = converter(seg)
}

const converter=(seg)=>{

    let resto =  seg%3600
    const hora = Math.floor(seg/3600)
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const formatado = (hora < 10 ? "0" +hora: hora) + ":" + (minuto < 10 ? "0" + minuto: minuto) + ":" + (segundo < 10? "0" + segundo : segundo)
    return formatado
}


btn_iniciar.addEventListener("click",()=>{
    tmpini = Date.now()
    intervalo = setInterval(contador, 1000)
})

btn_parar.addEventListener("click",()=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener("click",()=>{

    
    Cxmsg.mostrar(config, "Alerta", "Tem certeza que deseja zerar?")

    tmpini = Date.now()
    clearInterval(intervalo)
    timer.innerHTML = "00:00:00"
    
    const parciais = [...document.querySelectorAll(".parcial")]
    parciais.map((ele)=>{
        ele.remove()
    })

    
})

btn_parcial.addEventListener("click", ()=>{
    const div = document.createElement("div")
    div.classList.add("parcial")
    div.innerHTML = timer.innerHTML

    parciais.appendChild(div)

})