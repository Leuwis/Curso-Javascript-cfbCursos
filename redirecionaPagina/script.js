const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click", ()=>{
    // window.location="../exercicioBolinhas/index.html"        //DIRECIONA PARA A URL ESPECIFICADA
    // window.location.replace("https://www.google.com.br" )    //DIRECIONA PARA A URL ESPECIFICADA E REMOVE A ATUAL DO HISTÓRICO
    // window.location.assign("https://www.google.com.br")      //DIRECIONA PARA A URL ESPECIFICADA
    // window.location.reload()                                 //RECARREGA A PAGINA

    //------------------------------NAVEGAR PELO HISTÓRICO
    //window.history.forward()                  //PRÓXIMA PAGINA          
    //window.history.back()                     //VOLTA UMA PAGINA
    //window.history.go(1)                      //NAVEGA PARA A PAGINA ESPECIFICADA NO INDECE DO HISTÓRICO
    //console.log(window.history.length)        //COMPRIMENTO DO HISTÓRICO
    
    window.location = url.value
})