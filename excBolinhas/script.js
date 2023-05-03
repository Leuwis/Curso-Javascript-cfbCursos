const constroles    = document.getElementById("controles")
const num_objetos   = document.getElementById("num_objetos")
const txt_qtde      = document.getElementById("txt_qtde")
const btn_add       = document.getElementById("btn_add")
const btn_remover   = document.getElementById("btn_remover")
const palco         = document.getElementById("palco")


let larguraPalco    = palco.offsetWidth //CAPTURANDO LARGURA DA TELA
let alturaPalco     = palco.offsetHeight //CAPTURANDO ALTURA DA TELA
let bolas           = []
let numBolas        = 0

class Bola{
    constructor(arrayBolas, palco){
        //DEFININDO O TAMANHO DA BOLINHA (10-19)
        this.Tam = Math.floor(Math.random()*10)+10


        //DEFININDO A COR DA BOLINHA (0-254)
        this.Red    = Math.floor(Math.random()*255)
        this.Green  = Math.floor(Math.random()*255)
        this.Blue   = Math.floor(Math.random()*255)


        //DEFININDO A POSIÇÃO ONDE A BOLINHA APARECE (0-TAMANHO TELA)
        this.Px     = Math.floor(Math.random()*(larguraPalco - this.Tam)) 
        this.Py     = Math.floor(Math.random()*(alturaPalco - this.Tam)) 


        //DEFININDO A VELOCIDADE DA BOLINHA NOS EIXOS X/Y (0.5 - 2.5)
        this.VelocidadeX   = Math.floor(Math.random()*2) + 0.5
        this.VelocidadeY   = Math.floor(Math.random()*2) + 0.5


        //DEFININDO A DIREÇÃO NO EIXO X (SE NUMERO > 1 BOLINHA SEGUE PARA DIREITA/CIMA. SE NÃO BOLINHA SEGUE PARA ESQUERDA/BAIXO)
        this.DirX   = (Math.random()*10) > 5 ? 1 : -1
        this.DirY   = (Math.random()*10) > 5 ? 1 : -1

        //DEFININDO ID DA BOLINHA (USANDO O TIMESTAMP E O RAMDOM PARA GARANTIR QUE CADA ID VAI SER UNICO)
        this.Id     = Date.now() + "_" + Math.floor(Math.random()*100000000000000)

        this.ArrayBolas = arrayBolas
        this.Palco      = palco

        //CRIANDO A BOLINHA
        this.desenhar()
        this.Controle   = setInterval(this.controlar,10) //FUNCÃO DE CONTROLE SENDO CHAMADA A CADA 10 MILISEGUNDOS

        //CAPTURANDO A BOLINHA
        this.Eu         = document.getElementById(this.Id)
        
        //ADICIONANDO A BOLINHA CRIADA NO CONTADOR
        this.numBolas ++

        //EXIBINDO A QUANTIDADE DE BOLINHAS NA TELA
        num_objetos.innerHTML = numBolas
    }



    //IDENTIFICAR A BOLINHA NO ARRAY BOLAS
    minhaPos=()=>{      
        return this.ArrayBolas.indexOf(this)
    }


    remover=()=>{
        
        clearInterval(this.controle) //PARANDO A BOLINHA NA TELA

        //REMOVENDO DO ARRAY
        bolas = bolas.filter((b)=>{
            if(b.Id != this.Id){
                return b
            }

             //REMOVENDO DA TELA
        this.Eu.remove()    
        numBolas--
        num_objetos.innerHTML = numBolas
        }) 

       
    }

    //CRIANDO A BOLINHA E ADICIONANDO NA TELA
    desenhar=()=>{
        const div = document.createElement("div")
        div.setAttribute("id", this.Id)
        div.setAttribute("class", "bola")
        div.setAttribute("style", `left:${this.Px}px; top:${this.Py}px; width:${this.Tam}px; height:${this.Tam}px; background-color:rgb(${this.Red},${this.Green},${this.Blue})`)
        this.Palco.appendChild(div)
        numBolas++
        num_objetos.innerHTML = numBolas
    }

    controle_bordas=()=>{
        if(this.Px + this.Tam >= larguraPalco){ //COLIDINDO DIREITA
            this.DirX = -1
        }else if(this.Px <= 0){//COLIDINDO ESQUERDA
            this.DirX = 1
        }

        if(this.Py + this.Tam >= alturaPalco){ //COLIDINDO EM CIMA
            this.DirY = -1
        }else if(this.Py <= 0){//COLIDINDO BAIXO
            this.DirY = 1
        }
    }

    //CONTROLAR A MOVIMENTAÇÃO DA BOLINHA
    controlar=()=>{     
        this.controle_bordas()

        this.Px += this.DirX * this.VelocidadeX //ATUALIZANDO A POSIÇÃO DA BOLINHA
        this.Py += this.DirY * this.VelocidadeY //ATUALIZANDO A POSIÇÃO DA BOLINHA
        this.Eu.setAttribute("style", `left:${this.Px}px; top:${this.Py}px; width:${this.Tam}px; height:${this.Tam}px; background-color:rgb(${this.Red},${this.Green},${this.Blue})`)

        //REMOVENDO A BOLINHA CASO ELA ESTEJA FORA DA TELA (REDIMENSIONAMENTO DA TELA)
        if((this.Px > larguraPalco) || (this.Py > alturaPalco)){
            this.remover()
        }
    }
}

//EVENTO PARA CAPTURAR A MUDANCA NO TAMANHO DA TELA
window.addEventListener("resize", ()=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})


btn_add.addEventListener("click", ()=>{
    const qtde = txt_qtde.value
    for(let i = 0; i < qtde; i++){
        bolas.push(new Bola(bolas, palco))
    }
})


btn_remover.addEventListener("click", ()=>{
    console.log("click")
    bolas.map((b)=>{
       b.remover()
    })
})