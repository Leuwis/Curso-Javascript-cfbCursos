const objetos = document.getElementById("objetos")

let computador = {

    cpu: "",
    ram: "",
    hd: "",

    info:function(){
        console.log(`Cpu: ${this.cpu}`)
        console.log(`Ram: ${this.ram}`)
        console.log(`Hd: ${this.hd}`)
    }
}
computador["monitor"] = "22 polegadas"
computador.placaVideo = "rtx 2060"


//REMOVENDO PROPRIEDADE DO COMPUTADOR
delete(computador.hd)


//CLONANDO COMPUTADOR PARA C1
const c1 = Object.assign({}, computador)
console.log(computador)
c1.info()

//CRIANDO OBJETO DO TIPO COMUPUTADOR
const c2 = Object.create(computador)
c2.cpu = "i9"
c2.ram = "32gb"
c2.hd = "2tb"
c2.info()

const o1 = {obj1: '1'}
const o2 = {obj2: '2'}
const o3 = {obj3: '3'}
const o4 = Object.assign(o1, o2, o3)    //MESCLANDO CONTEUDOS

const computadores=[
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i7",
        ram: "32gb",
        hd: "2tb"
    },
    {
        cpu: "i5",
        ram: "16gb",
        hd: "1tb"
    }
]

computadores.forEach((c)=>{
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br>" + c.ram + "<br>" + c.hd
    div.classList = "computador"
    objetos.appendChild(div)
})

// computador.info()
// console.log(computador)
// objetos.innerHTML = `${computador.cpu} - ${computador.ram} - ${computador.hd}`
// objetos.innerHTML = JSON.stringify(computadores)

