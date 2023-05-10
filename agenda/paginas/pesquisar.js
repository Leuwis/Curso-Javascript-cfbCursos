const txt_pesquisa  = document.getElementById("txt_pesquisa");
const btn_pesquisa = document.getElementById("btn_pesquisa");
const dados         = document.getElementById("dados");


btn_pesquisa.addEventListener("click", (evt)=>{
    dados.innerHTML = "";
    const valorPesq = txt_pesquisa.value;
    if(valorPesq == ""){
        return;
    }
    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value;
    const endpoint = `http://127.0.0.1:1880/pesquisacontato/${f_pesq}/${valorPesq}`;
    
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
            // 
            // 
            // 
            // dt_dtnas_contato
            linha.appendChild(c1);
            linha.appendChild(c2);
            linha.appendChild(c3);
            linha.appendChild(c4);
            linha.appendChild(c5);
            dados.appendChild(linha);
        })
    })
});








