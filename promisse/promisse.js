const numero = document.querySelector("#numero")
const btn_promessa = document.getElementById("btn_promessa")


btn_promessa.addEventListener("click", (evt)=>{
    numero.innerHTML = "Processando..."

    promessa()
        //CASO TENHA DADO CERTO
        .then((retorno)=>{
            numero.innerHTML = retorno
            numero.classList.remove("erro")
            numero.classList.add("ok")
        })
        
        //CASO TENHA DADO ERRADO
        .catch((retorno)=>{
            numero.innerHTML = retorno
            numero.classList.add("erro")
            numero.classList.remove("ok")
        })
})

//GERANDO A FUNCAO PROMESSA
const promessa = function(){

    let promisse = new Promise((resolve, reject)=>{
    
        let resultado = true
        let tempo = 3000
    
        setTimeout(() =>{
            if(resultado){
                resolve("Deu Tudo Certo")
            }else{
                reject("Deu tudo Errado")
            }
        }, tempo)
    })
   
    return promisse
}


numero.innerHTML = "Esperando..."