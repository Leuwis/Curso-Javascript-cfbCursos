const Nave = function(energia){
    this.Energia    = energia
    this.Disparos   = 100
}

const n1 = new Nave(100)

Nave.prototype.Vidas = 3
Nave.prototype.Disparar=function(){
    if(this.Disparos > 0){
        this.Disparos --
    }
}

for(let i = 0; i<10; i++){
    n1.Disparar()
    console.log(n1.Disparos)
}

console.log(Nave)
console.log(n1)
console.log(n1.Vidas)