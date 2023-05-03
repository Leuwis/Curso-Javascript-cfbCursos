// const p_temp = document.getElementById("p_temp")
// const p_nivel = document.getElementById("p_nivel")
// const p_press = document.getElementById("p_press")
// const btn_texto = document.getElementById("btn_texto")

// const obterDados=()=>{
    
//     const endpoint = "https://cursojavascript.deividlima1.repl.co/"
    
//     fetch(endpoint)
//     .then(res=>res.json())
//     .then(dados=>{
//         console.log(dados)
//         p_temp.innerHTML    = "temperatura: " + dados.temperatura
//         p_nivel.innerHTML   = "nivel: " + dados.nivel
//         p_press.innerHTML   = "pressão: " + dados.pressao
//     })
// }

// // let intervalo = setInterval(obterDados, 3000)

// let dados={
//     nome:"Bruno",
//     canal:"CFBCursos",
//     curso:"Javascript"
// }

// let cabecalho={
//     method: "POST",
//     body:JSON.stringify(dados)
// }


// const gravarDados=()=>{
//     const endpoint = "https://cursojavascript.deividlima1.repl.co/"
//     fetch(endpoint,cabecalho)
//     .then(res=>res.json())
//     .then(ret=>{
//         console.log(ret)
//     })
// }

// btn_texto.addEventListener("click", ()=>{
//     gravarDados()
// })

const texto = document.getElementById("texto");

const endpoint = "./arquivos/teste.txt";

fetch(endpoint) 
.then(res=>res.text())
.then(res=>{
    res = JSON.parse(res)
    console.log(res)
    console.log(res.canal)
    console.log(res.curso)
})