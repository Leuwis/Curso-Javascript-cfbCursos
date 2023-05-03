const btn_alert     = document.getElementById("btn_alert")
const btn_confirm   = document.getElementById("btn_confirm")
const btn_prompt    = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt)=>{
    alert("olá como voce está")
})

btn_confirm.addEventListener("click", (evt)=>{
    let res = confirm("voçê esta aprendendo muito?")
    console.log(res)
})

btn_prompt.addEventListener("click", (evt)=>{

    //const nome = prompt("Digite seu nome", "Digite seu nome aqui")
   const nome = prompt("Digite seu nome")


    if(nome == null){
        console.log("botão cancelar precionado")
    }else{
        console.log("Nome digitado " + nome)
    }
})