// const head = document.head
// const estilo = "<link rel='stylesheet' href='topo.css'>"
// head.innerHTML += estilo


const body = document.body

const estiloTopo = 
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #eee;"


const topo = document.createElement("div")
topo.setAttribute("id", "topo")
// topo.setAttribute("class", "topo")
topo.setAttribute("style", estiloTopo)

//ANEXANDO NO INICIO DO BODY
body.prepend(topo)

const estiloImg = " width: 80px;"

const logo = 
    "<div id='logo' class='logo'>" +
        "<img src='img/logo.png' title='CFBCursos' style='" + estiloImg +"'/>"
    "</div>"

topo.innerHTML += logo

const login = 
    "<div id='login' class='login'>" +
        "<p id='matricula'>Matrícula:<span></span></p>" +   
        "<p id='nome'>Nome:<span></span></p>" +   
    "</div>"

    topo.innerHTML += login
