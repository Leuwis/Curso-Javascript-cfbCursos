class Carro{ //CLASSE PAI / BASE
    constructor(nome, portas){
        this.Nome = nome
        this.Portas = portas
        this.Ligado = false
        this.Velocidade = 0
        this.Cor = undefined
    }

    ligar = function(){
        this.Ligado = true
    }

    desligar = function(){
        this.Ligado = false
    }

    setCor = function(cor){
        this.Cor = cor
    }
}

class Militar extends Carro{ //CLASSE FILHO 
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.Blindagem = blindagem
        this.Municao = municao
        this.setCor("Verde")
    }

    atirar = function(){
        if(this.Municao > 0){
            this.Municao --
        }
    }
}

const c1 = new Militar("lutador", 1, 100, 50)
c1.ligar()
c1.atirar()

console.log(`Nome: ${c1.Nome}`)
console.log(`Portas: ${c1.Portas}`)
console.log(`Ligado: ${c1.Ligado? "Sim" : "Não"}`)
console.log(`Velocidade: ${c1.Velocidade}`)
console.log(`Cor: ${c1.Cor}`)
console.log(`Blindagem: ${c1.Blindagem}`)
console.log(`Munição: ${c1.Municao}`)
console.log("------------------------")
