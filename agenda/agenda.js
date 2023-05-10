const cabecalho     = document.getElementById("cabecalho");
const menu          = document.getElementById("menu");
const btn_home      = document.getElementById("btn_home");
const btn_novo      = document.getElementById("btn_novo");
const btn_pesquisar = document.getElementById("btn_pesquisar");
const btn_gestao    = document.getElementById("btn_gestao");
const sobre         = document.getElementById("sobre");
const btn_filtrar     = document.getElementById("btn_filtrar");
const principal     = document.getElementById("principal");
const abaSelecionada = [...document.querySelectorAll(".aba")];

btn_home.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "./paginas/home.html");
});

btn_novo.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "./paginas/novo.html");
});

btn_pesquisar.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "./paginas/pesquisar.html");
});

btn_gestao.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "./paginas/gestao.html");
});

btn_filtrar.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "./paginas/filtrar.html");
});

sobre.addEventListener("click", (evt)=>{
    abrirPagina(evt.target, "./paginas/sobre.html");
});

const abrirPagina=(quemSelecionar, url)=>{
    abaSelecionada.map((ele)=>{
        //REMOVENDO SELEÇÃO DE QUEM JÁ ESTÁ SELECIONADO
        if(ele.classList == "aba abaSelecionada"){
            ele.classList.remove("abaSelecionada");
        }
        //ADICIONANDO SELEÇÃO NA ABA CLICADA
        quemSelecionar.classList.add("abaSelecionada");

        //ABRINDO ABA SELECIONADA
        window.open(url, "if_principal");

    })
}