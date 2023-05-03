const q1        = document.getElementById("q1")
const q2        = document.getElementById("q2")
const posx      = document.getElementById("posx")
const posy      = document.getElementById("posy")
const largura   = document.getElementById("largura")
const altura    = document.getElementById("altura")

//DEFININDO TECLAS DE ATALHO PARA OS ELEMENTOS HTML (TEM QUE PRESIONAR O ALT + A TECLA)
q1.accessKey = "b" 
q2.accessKey = "n"

//VERIFICANDO TECLAS DE ATALHO
console.log("q1: " + q1.accessKey )
console.log("q2: " + q2.accessKey )

const DOMRectQ2 = q2.getBoundingClientRect()


q1.addEventListener("click", (evt)=>{
    info(evt.target)
})
q2.addEventListener("click", (evt)=>{
    info(evt.target)
})

const info=(elemento)=>{

    //ACESSAR INFORMAÇÕES DO ELEMENTO  
    const DOMRectQ = elemento.getBoundingClientRect()

    posx.innerHTML      = `posx: ${DOMRectQ.x}`
    posy.innerHTML      = `posx: ${DOMRectQ.y}`
    largura.innerHTML   = `posx: ${DOMRectQ.width}`
    altura.innerHTML    = `posx: ${DOMRectQ.height}`
}