const caixa = document.querySelector("#caixa");
const curso = [...document.querySelectorAll(".curso")];

caixa.addEventListener("click", () => {
    console.log("clicou");
})

curso.map((el) => {
    el.addEventListener("click", (evt) =>{
    evt.stopPropagation();
})})
