//const c1 = document.getElementById("curso c1");
//const c1 = document.querySelector("#c1");

// function msg(){
//     alert("hello world");
// }

// c1.addEventListener("click", (evt) => {
//     const alvo = evt.target;
//     alvo.classList.add("destaque");
// });


const cursos = [...document.querySelectorAll(".curso")];

cursos.map((el) => {
    console.log()
    el.addEventListener("click", (evt) => {
        const alvo = evt.target;
        alvo.classList.add("destaque");
    })
})

