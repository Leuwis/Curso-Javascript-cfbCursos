const cursos = [...document.getElementsByClassName("curso")];
const cursosC1 = [...document.getElementsByClassName("curso c1")];
const cursosC2 = [...document.getElementsByClassName("curso c2")];

cursos.map((el,i) => {
    if(i%2 != 0){
        el.classList.add("destaque")
    }
    
})

console.log(cursos);
console.log(cursosC1);
console.log(cursosC2)