const campo_filtrar   = document.getElementById("campo_filtrar");
const resultado         = document.getElementById("resultado");
let endpoint = null;

const mostrarResultado = ()=>{

     if(campo_filtrar.value == ""){
        endpoint = `http://localhost:1880/contato`;
     }else{
        endpoint = `http://localhost:1880/filtracontatos/${campo_filtrar.value}`;
    }

    if(document.querySelector(".contato_encontrado")){
        document.querySelector(".contato_encontrado").remove();
        console.log("existe")
    }

    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.map((ele) => {
            const div = document.createElement("div");
            div.setAttribute("class", "contato_encontrado");
            div.setAttribute("id", "contato_encontrado");
            
            
            const id = document.createElement("div");
            id.setAttribute("class", "t1");
            id.innerHTML = ele.n_contato_contato;
            
            const nome = document.createElement("div");
            nome.setAttribute("class", "t2");
            nome.innerHTML = ele.s_nome_contato;

            const celular = document.createElement("div");
            celular.setAttribute("class", "t3");
            celular.innerHTML = ele.s_celular_contato;

            const email = document.createElement("div");
            email.setAttribute("class", "t4");
            email.innerHTML = ele.s_email_contato;

            const dtnas = document.createElement("div");
            dtnas.setAttribute("class", "t5");
            dtnas.innerHTML = ele.dt_dtnas_contato.split("T")[0];
            
            div.appendChild(id);
            div.appendChild(nome);
            div.appendChild(celular);
            div.appendChild(email);
            div.appendChild(dtnas);
            
            resultado.appendChild(div);
        });
    })
}
mostrarResultado();


    campo_filtrar.addEventListener("input", ()=>{
        mostrarResultado();
    if(document.getElementById("contato_encontrado")){
         const contatos = [...document.querySelectorAll("#contato_encontrado")];
         contatos.map(ele =>{
             ele.remove();
         })
    }
})