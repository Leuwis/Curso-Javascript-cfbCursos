//  QUANDO FUNÇÕES COM O MESMO NOME DESEMPENHAM PAPEIS DIFERENTES
class CarroPai{
    constructor(){

        //TORNANDO A CLASSE ABSTRATA
        if(this.constructor === CarroPai){
            //DISPARANDO UMA MENSAGEM DE ERRO
            throw new TypeError("Esta classe não pode ser instanciada")
        }

        //OBRIGANDO A IMPLEMENTAR O METODO LIGAR
        if(this.ligar===undefined){
            throw new TypeError("É obrigatório implementar o método ligar")
        }
    
        //OBRIGANDO A IMPLEMENTAR O METODO DESLIGAR
        if(this.desligar===undefined){
            throw new TypeError("É obrigatório implementar o método ligar")
        }
        this.Rodas = 4
        this.Portas = 4
        this.Ligado = false
    }
}

class Carro extends CarroPai{
    constructor(tipo, estagioTurbo){
        super()
        this.Turbo = new Turbo(estagioTurbo)
        if(tipo==1){
            this.VelMax = 140
            this.Nome = "Gol"
        }else if(tipo==2){
            this.VelMax = 200 
            this.Nome = "Golf"
        }else if(tipo==3){
            this.VelMax = 250
            this.Nome = "Porche"
        }
        this.VelMax += this.Turbo.Potencia
    }
   info(){
        console.log(`Nome: ${this.Nome}`)
        console.log(`Velocidade Máxima: ${this.VelMax}`)
        console.log(`Turbo: ${this.Turbo.Potencia}`)
        console.log(`Rodas: ${this.Rodas}`)
        console.log(`Portas: ${this.Rodas}`)
        console.log(`Ligado: ${this.Ligado}`)
        console.log("---------------")
   }

   ligar(){
        this.Ligado = true
   }

   desligar(){
        this.Ligado = false
   }
} 

class Turbo{
    constructor(estagios){
        if(estagios==0){
            this.Potencia = 0
        }else if(estagios==1){
            this.Potencia = 50
        }else if(estagios==2){
            this.Potencia = 75
        }else if(estagios==3){
            this.Potencia = 100
        }else if(estagios==4){
            this.Potencia = 125
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.TipoInfo = 1
        this.VelMax = 300 + this.Turbo.Potencia
        this.Nome = "Bugatti"
    }
    info(){
        if(this.TipoInfo == 0){
            super.info()
        }else{

            console.log("-------- O MAIS BRABO --------")
            console.log(`Nome..: ${this.Nome}`)
            console.log(`Velocidade máxima..: ${this.VelMax}`)
            console.log(`Turbo..: ${this.Turbo.Potencia}`)
            console.log(`Rodas..: ${this.Rodas}`)
            console.log(`Portas..: ${this.Rodas}`)
            console.log(`Ligado..: ${this.Ligado}`)
            console.log("---------------")
        }
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(2, 1)
const c3 = new CarroEspecial(4)
// const c4 = new CarroPai()

c1.info()
c2.info()
c3.info()