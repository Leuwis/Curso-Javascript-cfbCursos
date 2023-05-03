const caixa = document.querySelector("#caixa")


let musicas = new Set(["musica1", "musica boa", "musica10"])

musicas.add("musica muito legal")
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10")

for (const m of musicas) {
    caixa.innerHTML += m + "<br>"
}
console.log(musicas)