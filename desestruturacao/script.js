//#region 
// let a, b, c, d

// ({a, b, c, d}={a:"verde", b:"amarelo", c:"azul", d:"vermelho"})


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// let numeros = [10, 20, 30, 40]
// let [a, b, c, d] = numeros

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


// let a, b, c, d
// [a,b=0,c=0,d=0]=[10]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)



// let a = 10;
// let b = 20;

// [a,b]=[b,a]

// console.log(a)
// console.log(b)


// let numeros =()=>{
//     return [10, 20, 30, 40]
// }

// let[a,b,c,d]=numeros()

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//#endregion

// let numeros = [10,20,30,40,50,60,70,80]

// let[a,b,c,...d]=numeros

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// let obj = {nome:"Deivid", curso:"javascript"}
// let {nome, curso} = obj

// console.log(nome)
// console.log(curso)

// const cores =()=>{
//     return ["verde", "amarelo", "azul", "branco"]
// }

// let[c1,c2, ,c3]=cores()

// console.log(c1)
// console.log(c2)
// console.log(c3)

let texto = "curso de javascript"

let [...t] = texto.split(" ")

console.log(t)