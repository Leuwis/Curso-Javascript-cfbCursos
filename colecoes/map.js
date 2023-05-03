const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "javascript")
mapa.set(10, "cfb cursos")
mapa.set(1, "canal")

console.log(mapa)

let res = ""
caixa.innerHTML = mapa.get("curso")

mapa.has(10)? caixa.innerHTML = " a chave existe" : caixa.innerHTML = "a chave não existe"

caixa.innerHTML += "<br> o tamanho da colecao é: " + mapa.size
