import {Cxmsg} from "../../headerReaproveitavel/caixaMsg.js"

const f_nome        = document.getElementById("f_nome");
const f_celular     = document.getElementById("f_celular");
const f_email       = document.getElementById("f_email");
const f_dtnas       = document.getElementById("f_dtnas");
const btn_gravar    = document.getElementById("btn_gravar");
const btn_cancelar  = document.getElementById("btn_cancelar");

let config = {
    cor:"#000",
    tipo:"ok"
}
btn_gravar.addEventListener("click", (evt)=>{
    if(f_nome.value != "" && f_celular.value != "" && f_email.value != "" && f_dtnas.value != ""){

        const endpoint = "http://127.0.0.1:1880/adicionacontato"

        const dados = {
            f_nome:f_nome.value,
            f_celular:f_celular.value,
            f_email:f_email.value,
            f_dtnas:f_dtnas.value
            
        };
        const cabecalho={
            method:'POST',
            body:JSON.stringify(dados)
        };

        fetch(endpoint, cabecalho)
        .then(res=>{
            if(res.status == 200){
                config.cor = "#0f0";
                Cxmsg.mostrar(config,"info", "Contato criado com sucesso");
                limpar();
            }else{
                config.cor = "#f00"
                Cxmsg.mostrar(config,"info", "Falha ao criar novo contato");
                console.log("erro")
            };
        });
    }else{
        config.cor = "#f00"
        Cxmsg.mostrar(config,"info", "preencha o campo Nome");
    }
})

btn_cancelar.addEventListener("click", (evt)=>{
    limpar();
})

const limpar=()=>{
    f_nome.value = "";
    f_celular.value = "";
    f_email.value = "";
    f_dtnas.value = "";
    f_nome.focus();
 }