const cursos = [...document.querySelectorAll(".curso.c1")]
const btnEnvia = document.querySelector("#btnEnvia");
const btnDevolve = document.querySelector("#btnDevolve");
const caixa2 = document.querySelector("#caixa2");
const caixa1 = document.querySelector("#caixa1");

console.log(cursos);
cursos.map((elemento) => {
    elemento.addEventListener("click", ()=>{
       elemento.classList.toggle("selecionado");
    })
})

btnEnvia.addEventListener("click", ()=>{
    const selecionados = [...document.querySelectorAll(".selecionado")];
    const nSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    
    selecionados.map((element) => {

        caixa2.appendChild(element);    
    })

    nSelecionados.map((element) =>{
        caixa1.appendChild(element);
    })
})


