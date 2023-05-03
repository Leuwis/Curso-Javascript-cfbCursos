import { Cxmsg } from "./caixaMsg.js"

 const config = {
    // titulo:"CFB Cursos",
    // texto:"Curso de Javascript",
     cor:"#48f",
     tipo:"ok",
     comando_sn:()=>{},
     textos:["SIM", "NÃO"]
 }

 const fsim=()=>{
    console.log("botão sim pressionado")
 }

const btn_mostrarcxmsg = document.querySelector("#btn_mostrarcxmsg")

btn_mostrarcxmsg.addEventListener("click", ()=>{
    Cxmsg.mostrar(config, "titulo1", "texto1")
})  


const btn_mostrarcxmsg2 = document.querySelector("#btn_mostrarcxmsg2")
btn_mostrarcxmsg2.addEventListener("click", ()=>{
    config.tipo = "ok"
    Cxmsg.mostrar(config, "titulo2", "texto2")
})  

const btn_mostrarcxmsg3 = document.querySelector("#btn_mostrarcxmsg3")
btn_mostrarcxmsg3.addEventListener("click", ()=>{
    config.tipo = "S/N"
    config.textos = ["OK", "Cancel"]
    config.comando_sn =()=>{ fsim()}
    Cxmsg.mostrar(config, "titulo3", "texto3")
})  