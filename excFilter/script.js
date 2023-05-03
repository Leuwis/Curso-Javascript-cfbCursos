// const caixa2 = document.querySelector("#caixa2");
// const caixa1 = document.querySelector("#caixa1");
// const botoes = ["adicionar", "remover"];
// const cursos = ["HTML", "CSS", "PHP", "MySQL", "Jacascript", "REACT"];

// cursos.map((el, index) =>{
//     index ++;
    
//     const elemento = document.createElement("div");
//     elemento.innerHTML = el;
//     elemento.classList = "curso c1";
//     elemento.setAttribute("id", "btn"+ index)
//     elemento.addEventListener("click", (el) =>{
//         console.log(el.target);
//     })
    
//     const btnR = document.createElement("input");
//     btnR.setAttribute("type", "radio");
//     btnR.classList = "radio";
//     btnR.setAttribute("name", "btnR");
//     btnR.setAttribute("value", index)
//     if(index == 1){
//         btnR.setAttribute("checked", "true");
//     }
     
//     elemento.appendChild(btnR)
    
//     caixa2.appendChild(elemento);
// })

// const campo = document.createElement("input");
// campo.setAttribute("type", "text");
// campo.setAttribute("placeholder", "inserir Linguagem");
// campo.setAttribute("class", "campo");
// caixa1.appendChild(campo);

// const btnAdicionar = document.createElement("button");
// btnAdicionar.innerHTML = "Adicionar";
// btnAdicionar.addEventListener("click", ()=>{
//     const nomeCampo = document.querySelector(".campo")

//     if(nomeCampo.value == ""){
//         alert("Preencha o nome da linguagem")
//         nomeCampo.focus();
//     }else{
//         const elemento = document.createElement("div");
//         elemento.innerHTML = nomeCampo.value;
//         elemento.classList = "curso c1";
//         const id = document.querySelectorAll(".curso");
//         const idNum = id.length + 1;
//         elemento.setAttribute("id", "btn" + idNum);
        
        
//         const btnR = document.createElement("input");
//         btnR.setAttribute("type", "radio");
//         btnR.classList = "radio";
//         btnR.setAttribute("name", "btnR");
//         //btnR.setAttribute("value", index)

//         elemento.appendChild(btnR)

// caixa2.appendChild(elemento);
//     }
// })

// caixa1.appendChild(btnAdicionar);

// const btnRemover = document.createElement("button");
// btnRemover.innerHTML = "Remover";
// btnRemover.addEventListener("click", () =>{
//     const selecionado = [...document.querySelectorAll(".curso > input")]

//     selecionado.map((el) => {
//         if(el.checked == true){
//             const pai = el.parentNode.parentNode;
//             pai.removeChild(el.parentNode)
            
//         }
//     })
// })
    
// caixa1.appendChild(btnRemover);


const caixa2 = document.querySelector("#caixa2");
const caixa1 = document.querySelector("#caixa1");
const botoes = ["adicionar", "remover"];
const cursos = ["HTML", "CSS", "PHP", "MySQL", "Jacascript", "REACT"];
const btnCursoSelecionado = document.querySelector("btnCursoSelecionado");
const campo = document.getElementById("campo")
let indice = 0;

const tiraSelecao = (() => {
    const selecaoCurso = [...document.querySelectorAll(".curso.c1")]

    selecaoCurso.map((el) => {
         el.classList.remove("selecionado")})
        //console.log(el)
    
})

const criarCurso = ((nome) => {

    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = nome
    
    novoElemento.addEventListener("click", () =>{
        tiraSelecao();
        novoElemento.classList.toggle("selecionado");
    })

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    // const rb = document.createElement("input")
    // rb.setAttribute("type", "radio")
    // rb.setAttribute("name", "rbCursos")

    // comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    indice ++
    return novoElemento
})

cursos.map((ele, index) => {
    
    
    const criaCurso = criarCurso(ele)
    caixa2.appendChild(criaCurso)
})



const cursoSelecionado = (() => {
    
    // const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    // let radioSelecionado = todosRadios.filter((ele) =>{
    //     return ele.checked
    // })
    // return radioSelecionado[0]

    const cSelecionado = document.querySelector(".selecionado")
   return cSelecionado
})



const btnCS = document.createElement("button");
btnCS.setAttribute("class", "cursoSelecionado");
btnCS.innerHTML = "Curso Selecionado";
btnCS.addEventListener("click", (evt) => {

    cursoSelecionado()


    try{
        const cSelecionado = document.querySelector(".selecionado")
        const selected = cSelecionado.textContent

        //const radioSelecionado = cursoSelecionado()
        //const selected = radioSelecionado.parentNode.parentNode.firstChild.textContent
        //  const cursoSelecionado = retorno.parentNode.previousSibling.textContent
        alert("Curso selecionado: " + selected)
    }catch(ex){
        alert(ex)
    }

    
})

const btnRemove = document.createElement("button")
btnRemove.setAttribute("class", "remove")
btnRemove.innerHTML = "Remover";
btnRemove.addEventListener("click", () =>{
    const cSelecionado = cursoSelecionado()
    console.log(cSelecionado)
    try{
        //const selected = radioSelecionado.parentNode.parentNode
        //selected.remove()
        cSelecionado.remove()
        alert("Curso removido com sucesso")
    }catch(ex){
        alert("nenhum curso selecionado")
    }
    // if(radioSelecionado != null){
    //     const selected = radioSelecionado.parentNode.parentNode
    //     selected.remove()
    //     alert("Curso removido com sucesso")
    // }else{
    //     alert("nenhum curso selecionado")
    // }

    //console.log(radioSelecionado)
    //if(selected != "")
    //
    
})

const btnAdicionaAntes = document.createElement("button");
btnAdicionaAntes.setAttribute("class", "adicionaAntes")
btnAdicionaAntes.innerHTML = "Adicionar antes";

btnAdicionaAntes.addEventListener("click", () =>{
    const cSelecionado = cursoSelecionado();

    try{
        //const selected = radioSelecionado.parentNode.parentNode
        if(campo.value != null && campo.value != ""){

            const criaCurso = criarCurso(campo.value)
            caixa2.insertBefore(criaCurso, cSelecionado)
        }else{
            alert("insira o nome do curso")
            campo.focus()
        }
    }catch(ex){
        alert("nenhum curso selecionado")
    }

})

const btnAdicionaDepois = document.createElement("button")
btnAdicionaDepois.setAttribute("class", "adicionaDepois")
btnAdicionaDepois.innerHTML = "Adicionar Depois"

btnAdicionaDepois.addEventListener("click", () =>{
    const cSelecionado = cursoSelecionado()

    try{
        //const selected = radioSelecionado.parentNode.parentNode
        if(campo.value != null && campo.value != ""){

            const criaCurso = criarCurso(campo.value)
            caixa2.insertBefore(criaCurso, cSelecionado.nextSibling)
        }else{
            alert("insira o nome do curso")
            campo.focus()
        }

    }catch(ex){
        alert(ex)
        alert("nenhum curso selecionado")
    }
})

caixa1.appendChild(btnAdicionaAntes)
caixa1.appendChild(btnAdicionaDepois)
caixa1.appendChild(btnRemove)
caixa1.appendChild(btnCS)

