const Pessoa = {
    nome:"o",
    idade:"",
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(pNome){
        this.nome = pNome
    },
    setIdade: function(pIdade){
        this.idade = pIdade
    }
}

const nome = document.querySelector("#f_nome")
const idade = document.querySelector("#f_idade")
const campo = document.querySelector("#res")
const adiciona = document.querySelector("#btn_adicionar")
const p1 = Pessoa

 //p1.nome = "Deivid"
// p2["nome"] = "Celia"


adiciona.addEventListener("click", ()=>{
    
    if(campo.hasChildNodes()){
        const removeDiv = [...document.querySelectorAll("#divPessoas")]
        removeDiv.map((ele) => {
            campo.removeChild(ele)
        })
    }


    p1.setNome(nome.value)
    p1.setIdade(idade.value)
    const div = document.createElement("div")
    div.setAttribute("id", "divPessoas")
    div.setAttribute("class", "pessoa")
    div.innerHTML = `Nome: ${p1.getNome()} <br> ${p1.getIdade()}`
    campo.appendChild(div)
    console.log(p1.getNome())
})


