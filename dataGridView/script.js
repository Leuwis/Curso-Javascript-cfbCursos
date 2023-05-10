import {Cxmsg} from "../headerReaproveitavel/caixaMsg.js"
const configDgv={
    endpoint:"http://localhost:1880/produto",
    idDestino:"dgvDados"
    
}

const btn_ok                = document.getElementById("btn_ok");
const btn_edita_confirma    = document.getElementById("btn_edita_confirma");
const btn_edita_cancela     = document.getElementById("btn_edita_cancela");
const btn_adicionar         = document.getElementById("btn_adicionar");
const btn_adiciona_confirma = document.getElementById("btn_adiciona_confirma");
const btn_adiciona_cancela  = document.getElementById("btn_adiciona_cancela");
const janelaAdiciona        = document.getElementById("janelaAdiciona");
const editar = document.getElementById("editar");

const janelaView = document.querySelector("#janelaView");


const dataGridview=(configDgv)=>{
    const dgvDados = document.getElementById(configDgv.idDestino)
    dgvDados.innerHTML = ""
    fetch(configDgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.map((ele) =>{
            const dgvLinha = document.createElement("div");
            dgvLinha.classList = "dgvLinha";

            const c1 = document.createElement("div");
            c1.classList = "coluna c1";
            c1.innerHTML = ele.n_id_produto;
            const c2 = document.createElement("div");
            c2.classList = "coluna c2";
            c2.innerHTML = ele.s_nome_produto;
            const c3 = document.createElement("div");
            c3.classList = "coluna c3";
            c3.innerHTML = ele.s_marca_produto;
            const c4 = document.createElement("div");
            c4.classList = "coluna c4";
            c4.innerHTML = ele.s_modelo_produto
            const c5 = document.createElement("div");
            c5.classList = "coluna c5";
            const imgDelete = document.createElement("img");
            imgDelete.classList = "dgvIcons";
            imgDelete.setAttribute("src", "../icons/trash.svg");
            imgDelete.addEventListener("click", (evt)=>{

                const linha = evt.target.parentNode.parentNode;
                const id =  linha.firstChild.innerHTML;
                const config = {
                    cor:"red",
                    tipo:"S/N",
                    textos: ["SIM", "NÃO"],
                    comando_sn:()=>{
                        const endpointExcluir = `http://127.0.0.1:1880/removeproduto/${id}`
                        fetch(endpointExcluir)
                        .then(res=>{
                            if(res.status == 200){
                                linha.remove();
                            }
                        })
                        
                    }
                }
                Cxmsg.mostrar(config, "Alerta", "Tem certeza que deseja excluir?");
               

            })

            const imgEdit = document.createElement("img");
            imgEdit.classList = "dgvIcons";
            imgEdit.setAttribute("src", "../icons/edit.svg");
            imgEdit.addEventListener("click", (evt)=>{

                janelaView.classList.remove("ocultar");
                btn_ok.classList            = "btn ocultar";
                btn_edita_cancela.classList      = "btn";
                btn_edita_confirma.classList     = "btn";

                const f_id          = document.getElementById("f_id");
                const f_produto     = document.getElementById("f_produto");
                const f_marca       = document.getElementById("f_marca");
                const f_modelo      = document.getElementById("f_modelo");
    
                 f_produto.removeAttribute("readonly");
                 f_marca.removeAttribute("readonly");
                 f_modelo.removeAttribute("readonly");

                 const id = evt.target.parentNode.parentNode.firstChild;
                 const produto = id.nextSibling;
                 const marca = produto.nextSibling;
                 const modelo = marca.nextSibling;

                 const endpointSeleciona = `http://127.0.0.1:1880/selecionaproduto/${id.innerHTML}`;
                 
                 fetch(endpointSeleciona)
                 .then(res=>res.json())
                 .then(res=>{
                     f_id.value          = res[0].n_id_produto;
                     f_produto.value     = res[0].s_nome_produto;
                     f_marca.value       = res[0].s_marca_produto;
                     f_modelo.value      = res[0].s_modelo_produto;
                 })
            })

            const imgEye = document.createElement("img");
            imgEye.classList = "dgvIcons";
            imgEye.setAttribute("src", "../icons/eye.svg");
            imgEye.addEventListener("click", (evt)=>{
                janelaView.classList.remove("ocultar");

                const f_produto     = document.getElementById("f_produto");
                const f_marca       = document.getElementById("f_marca");
                const f_modelo      = document.getElementById("f_modelo");

                f_produto.setAttribute("readonly", true);
                f_marca.setAttribute("readonly", true);
                f_modelo.setAttribute("readonly", true);

                btn_ok.classList            = "btn";
                btn_cancelar.classList      = "btn ocultar";
                btn_confirmar.classList     = "btn ocultar";

                const f_id = evt.target.parentNode.parentNode.firstChild.innerHTML
                const endpointSelecionar = `http://127.0.0.1:1880/selecionaproduto/${f_id}`
                fetch(endpointSelecionar)
                .then(res=>res.json())
                .then(res=>{
                    const f_id          = document.getElementById("f_id");
                    const f_produto     = document.getElementById("f_produto");
                    const f_marca       = document.getElementById("f_marca");
                    const f_modelo      = document.getElementById("f_modelo");
    
                    f_id.value          = res[0].n_id_produto;
                    f_produto.value     = res[0].s_nome_produto;
                    f_marca.value       = res[0].s_marca_produto;
                    f_modelo.value      = res[0].s_modelo_produto
                    ;
                })
            })

            dgvLinha.appendChild(c1);
            dgvLinha.appendChild(c2);
            dgvLinha.appendChild(c3);
            dgvLinha.appendChild(c4);
            c5.appendChild(imgDelete);
            c5.appendChild(imgEdit);
            c5.appendChild(imgEye);
            dgvLinha.appendChild(c5);

            dgvDados.appendChild(dgvLinha);
        });
    });
};

dataGridview(configDgv);

btn_ok.addEventListener("click", ()=>{
    janelaView.classList.add("ocultar");
})

btn_edita_cancela.addEventListener("click", ()=>{
    janelaView.classList.add("ocultar");
})

btn_edita_confirma.addEventListener("click", ()=>{

    const f_id          = document.getElementById("f_id");
    const f_produto     = document.getElementById("f_produto");
    const f_marca       = document.getElementById("f_marca");
    const f_modelo      = document.getElementById("f_modelo");
    
    if(f_produto.value == "" || f_marca.value == "" || f_modelo.value == ""){
        const config = {
            cor:"#048",
            tipo:"ok",
            textos: ["ok"]
        }
        Cxmsg.mostrar(config, "info", "Preencha todos os campos!");
    }else{
        
        const endpointEdita = `http://127.0.0.1:1880/editaproduto/${f_id.value}/${f_produto.value}/${f_marca.value}/${f_modelo.value}`;
        fetch(endpointEdita)
        .then(res=>res.json())
        .then(res=>{
            dataGridview(configDgv);
        })
        janelaView.classList.add("ocultar");
    }
});

btn_adicionar.addEventListener("click", (evt)=>{
    janelaAdiciona.classList.remove("ocultar");

})

btn_adiciona_confirma.addEventListener("click", ()=>{
    const add_produto   = document.getElementById("add_produto");
    const add_marca     = document.getElementById("add_marca");
    const add_modelo    = document.getElementById("add_modelo");

    if(add_produto.value == "" || add_marca.value == "" || add_modelo.value == ""){
        const config = {
            cor:"#048",
            tipo:"ok",
            textos: ["ok"]
        }
        Cxmsg.mostrar(config, "info", "Preencha todos os campos!");
    }else{
        fetch(`http://localhost:1880/adicionaproduto/${add_produto.value}/${add_marca.value}/${add_modelo.value}`)
        .then(res=>res.json())
        .then(res=>{
            add_produto.value = "";
            add_modelo.value  = "";
            add_marca.value   = "";
            dataGridview(configDgv);
        })
    }
})

btn_adiciona_cancela.addEventListener("click", ()=>{
    janelaAdiciona.classList.add("ocultar");
})
