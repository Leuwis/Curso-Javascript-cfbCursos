const f_texto = document.getElementById("f_texto")
const p_texto = document.getElementById("p_texto")
const btn_texto = document.getElementById("btn_texto")

btn_texto.addEventListener("click", ()=>{

})

let num = 10

//DEFININDO VALORES PARA O LOCALSTORAGE
// window.localStorage.setItem("numero", num)
// window.localStorage.setItem("numero2", 7)

// //ACESSANDO VALORES DO LOCALSTORAGE
// let valorRecuperado = window.localStorage.getItem("numero")
// console.log(valorRecuperado)

//ACESSANDO A CHAVE PELO INDICE
// alert(window.localStorage.key(1))

//ACESSANDO O VALOR DO ELEMENTO PELO INDICE DA CHAVE
// alert(window.localStorage.getItem(window.localStorage.key(1)))

//alert(window.localStorage.length)

//LIMPANDO O LOCALSTORAGE
//window.localStorage.clear()

//DEFININDO VALORES PARA O SESSIONSTORAGE
window.sessionStorage.setItem("numero", num)
window.sessionStorage.setItem("numero2", 7)

alert(window.sessionStorage.getItem("numero"))