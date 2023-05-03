class Npc{
    static alerta = false
    constructor(energia){
        this.Energia = energia
    }

    info = function(){
        console.log(`Energia: ${this.Energia}`)
        console.log(`Alerta: ${Npc.Alerta?"Sim":"Não"}`)
        console.log("------------------------------")
    }

    static alertar(){
        Npc.Alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(40)
Npc.alertar()

npc1.info()
npc2.info()
npc3.info()