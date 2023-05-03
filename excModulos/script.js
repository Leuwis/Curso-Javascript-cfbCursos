import c from "./contatos.js"

const f_nome        = document.getElementById("f_nome")
const f_telefone    = document.getElementById("f_telefone")
const f_email       = document.getElementById("f_email")
const btn_gravar    = document.getElementById("btn_gravar")
const listaContatos = document.getElementById("listaContatos")


btn_gravar.addEventListener("click", ()=>{
    const cont = {
        nome:       f_nome.value,
        telefone:   f_telefone.value,
        email:      f_email.value
    }
    c.addContato(cont, listaContatos)
    //console.log(c.getTodosContatos())
})
