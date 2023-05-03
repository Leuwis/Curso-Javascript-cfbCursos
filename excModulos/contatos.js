import { contatos } from "./bancoContatos.js"

let contato = {
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato, destinoDom){
        destinoDom.innerHTML = ""

        //INSERINDO NOVO CONTATO NO BANCO DE DADOS
        contatos.push(novoContato)
        
        //PERCORRENDO BANCO DE DADOS
        contatos.map((ele)=>{
            
            //CRIANDO DIV
            const div = document.createElement("div")
            div.setAttribute("class", "contato")

            //CRIANDO P (DADOS DO CONTATO)
            const p_nome = document.createElement("p")
            p_nome.innerHTML = ele.nome
            const p_telefone = document.createElement("p")
            p_telefone.innerHTML = ele.telefone
            const p_email = document.createElement("p")
            p_email.innerHTML = ele.email
    
            //CRIANDO BTN REMOVER
            const btn_remover = document.createElement("button")
            btn_remover.setAttribute("id", "btn_remover")
            btn_remover.innerHTML = "R"
            btn_remover.addEventListener("click", (evt)=>{
                
                let nome = evt.target.parentNode.firstElementChild.innerHTML
                console.log(nome)
                contatos = contatos.filter((eleC)=>{
                       return eleC.nome != nome
                 })
                
                 
                console.log(contatos)
            })

            //INSERINDO P NA DIV
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)

            div.appendChild(btn_remover)
    
            //INSERINDO DIV(CONTATO) NA TELA
            destinoDom.appendChild(div)
        })
    }
}

export default contato
