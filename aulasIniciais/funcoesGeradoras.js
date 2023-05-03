// function* cores(){
//     yield 'vermelho';
//     yield 'verde';
//     yield 'azul';
// }

// const itc = cores();
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

// function* perguntas(){
//     const nome = yield 'Qual o seu nome'
//     const esporte = yield 'Qual o seu esporte favorito'

//     return "Seu nome é: " + nome + " e seu esporte favorito é: " + esporte;
// }

// const itp = perguntas();
// console.log(itp.next().value);
// console.log(itp.next('Deivid!').value);
// console.log(itp.next('Comer sua mãe!').value);

function* contador(){
    let i = 0;
    while(true){
        yield i++
        if(i > 20){
            break;
        }
    }
}

const itp = contador();

for (const o of itp) {
    console.log(o);
}