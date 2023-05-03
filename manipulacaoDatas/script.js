const div_data      = document.querySelector("#div_data")
const div_relogio   = document.getElementById("div_relogio")
const btn_ativar    = document.getElementById("btn_ativar")
const btn_parar     = document.getElementById("btn_parar")
const tmp_alarme    = document.getElementById("tmp_alarme")
const hora_alarme   = document.getElementById("hora_alarme")
const timer         = document.getElementById("timer")

//INCLUINDO O ALARME EM UMA CONSTANTE
const som_alarme    = new Audio("audio/trompa.mp3")

//COLOCANDO A REPRODUÇÃO INFINITA DO ALARME
som_alarme.loop = false



let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

//ATIVA ALARME
btn_ativar.addEventListener("click", ()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual+(tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = "Hora do alarme: " + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

//PARA ALARME
btn_parar.addEventListener("click", ()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do alarme"
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0
})

const data = new Date()

//TRATANDO DATA PARA IMPRESSÃO
let dia = data.getDate() 
dia = dia < 10? "0" + dia: dia
let mes = data.getMonth() 
mes = mes < 10 ? "0" + mes: mes
const data_resumida = dia + "/" + mes + "/" + data.getFullYear()

// div_data.innerHTML = data_resumida


//CRIANDO UM RELÓGIO
const relogio = ()=>{
    const data = new Date()

    let hora = data.getHours() 
    hora = hora < 10? "0" + hora: hora

    let minuto = data.getMinutes()
    minuto = minuto < 10? "0" + minuto: minuto

    let segundo = data.getSeconds()
    segundo = segundo < 10? "0" + segundo: segundo

    const horaFormatada = `${hora}:${minuto}:${segundo}`

    div_relogio.innerHTML = horaFormatada

    //CONTROLE DO ALARME
    if(alarme_ativado && !alarme_tocando){

        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio, 1000)



/*
getDate()           = DIA DO MES
getDay()            = DIA DA SEMANA (NÚMERO)´
getFullYear()       = ANO COM 4 DIGITOS
getHours()          = HORAS
getMilliseconds()   = MILLISEGUNDOS
getMinutes()        = MINUTOS
getMonth()          = MÊS
getSeconds()        = SEGUNDOS
getTime() Timestanp = (MILLISEGUNDOS DESDE 1 DE JANEIRO DE 1970, 00:00:00 UTC)
toDateString()      = DATA COMPLETA
*/