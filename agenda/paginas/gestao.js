import {Cxmsg} from "../../headerReaproveitavel/caixaMsg.js";
const dados         = document.getElementById("dados");
const editar        = document.getElementById("editar");
const fundoPopUp    = document.getElementById("fundoPopUp");
let f_id            = document.getElementById("f_id");
let f_nome          = document.getElementById("f_nome");
let f_celular       = document.getElementById("f_celular");
let f_email         = document.getElementById("f_email");
let f_dtnas         = document.getElementById("f_dtnas");
const btn_gravar    = document.getElementById("btn_gravar");
const btn_cancelar  = document.getElementById("btn_cancelar");


const preencherDgv=()=>{

        dados.innerHTML = "";
        const endpoint = `http://127.0.0.1:1880/contato`;
        
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            res.map((ele)=>{
    
                const linha = document.createElement("div");
                linha.classList = "linha_dados";
    
                const c1 = document.createElement("div");
                c1.classList = "coluna c1";
                c1.innerHTML = ele.n_contato_contato;
    
                const c2 = document.createElement("div");
                c2.classList = "coluna c2";
                c2.innerHTML = ele.s_nome_contato;
    
                const c3 = document.createElement("div");
                c3.classList = "coluna c3";
                c3.innerHTML = ele.s_celular_contato;
    
                const c4 = document.createElement("div");
                c4.classList = "coluna c4";
                c4.innerHTML = ele.s_email_contato;
    
                const c5 = document.createElement("div");
                c5.classList = "coluna c5";
                c5.innerHTML = ele.dt_dtnas_contato.split("T")[0];

                const c6 = document.createElement("div");
                const imgExcluir = document.createElement("img");
                imgExcluir.setAttribute("src", "../../icons/trash.svg");
                imgExcluir.classList = "icones";
                imgExcluir.addEventListener("click", (evt)=>{

                    const id = evt.target.parentNode.parentNode.firstElementChild.innerHTML;
                    const endpoint = `http://127.0.0.1:1880/deletacontato/${id}`;

                    let config={
                        cor:"#f00",
                        tipo:"S/N",
                        textos:["SIM", "NÃO"],
                        comando_sn:()=>{
                           
                            fetch(endpoint)
                            .then(res=>{
                                // if(res.status == 200){
                                //     let configAviso={
                                //         cor:"#0f0",
                                //         tipo:"ok"
                                //     }
                                    preencherDgv();
                                //}
                            })
                        }
                    }
                    Cxmsg.mostrar(config, "alerta", "Tem certeza que deseja excluir este contato?");


                })

                const imgEditar = document.createElement("img");
                imgEditar.setAttribute("src", "../../icons/edit.svg");
                imgEditar.classList = "icones";
                imgEditar.addEventListener("click", (evt)=>{
                    fundoPopUp.classList.remove("ocultar")

                    const dados = [...evt.target.parentNode.parentNode.childNodes];

                    f_id.value        = dados[0].innerHTML;
                    f_nome.value      = dados[1].innerHTML;
                    f_celular.value   = dados[2].innerHTML;
                    f_email.value     = dados[3].innerHTML;
                    f_dtnas.value     = dados[4].innerHTML.split("T")[0];

                })
                
                c6.appendChild(imgExcluir);
                c6.appendChild(imgEditar);
                
                linha.appendChild(c1);
                linha.appendChild(c2);
                linha.appendChild(c3);
                linha.appendChild(c4);
                linha.appendChild(c5);
                linha.appendChild(c6);
                dados.appendChild(linha);
            })
        })
    }
    
    preencherDgv();
    
btn_cancelar.addEventListener("click", (evt)=>{
    fundoPopUp.classList.add("ocultar");
})
    
btn_gravar.addEventListener("click", (evt)=>{
    const endpoint = "http://localhost:1880/editacontato";
console.log(f_dtnas.value);
    dados 

    const parametros = {
        id:f_id.value,
        nome:f_nome.value,
        celular:f_celular.value,
        email:f_email.value,
        dtnas:f_dtnas.value
    }

    const cabecalho ={
        method:'POST',
        body:JSON.stringify(parametros)
    }

    fetch(endpoint, cabecalho)
    .then(res=>res.json())
    .then(res=>{
        let config ={
            cor:"#5b6",
            tipo:"ok"
            
        }
        Cxmsg.mostrar(config, "info", "contato alterado com sucesso!");
        preencherDgv();
        f_id.value        = "";
        f_nome.value      = "";
        f_celular.value   = "";
        f_email.value     = "";
        f_dtnas.value     = "";
    })
})





