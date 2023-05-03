const caixa = document.querySelector("#caixa");
const curso = [...document.querySelectorAll(".curso")];
const cursos = ["HTML", "CSS", "MySQL", "PHP", "Javascript", "C++", "C#"]




//const divHTML = document.querySelector(".c1_2")

// console.log(caixa.hasChildNodes());
// if(curso[0].children.length > 0){
//     console.log("Possui filhos");
// }else{
//     console.log("Não possui filhos");
// }

// console.log(curso[0].children.length > 0? "Possui filhos": "Não possui filhos");

// console.log(caixa.firstElementChild.innerHTML = "alterado");
// console.log(caixa.children[1].innerHTML = "alterado");
// console.log(caixa.children[5].innerHTML = "alterado");

//console.log(divHTML.parentNode.parentNode.children[4]);

// novoElemento.innerHTML = "json";
// novoElemento.classList = "curso c1";
// novoElemento.setAttribute("id", "c7")
// caixa.appendChild(novoElemento);

cursos.map((el, indice) => {
    indice ++;
    const novoElemento = document.createElement("div");
    novoElemento.innerHTML = el;
    novoElemento.classList = "curso c1";
    novoElemento.setAttribute("id", "c" + indice);
    

    const img = document.createElement("img");
    img.setAttribute("src", "./lixeira.png");
    img.setAttribute("class", "btnLixeira")
    img.addEventListener("click", ()=>{
        novoElemento.remove();
    })

    novoElemento.appendChild(img);



    caixa.appendChild(novoElemento);
    
})
// console.log(curso)
// curso.map((elemento) =>{
//     elemento.addEventListener("click", ()=>{
       
//         elemento.remove();
//     })
// })

