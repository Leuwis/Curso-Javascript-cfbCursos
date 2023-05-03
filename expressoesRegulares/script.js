let nome = new String("Deivid Lima Gonçalves 2003")
let email = "deivid@mail.com"

// console.log(nome.search(/IV/i))  //i NÃO USAR CASE SENSITIVE

// console.log(nome.match(/d/ig))   //g RETORNA TODAS AS OCORRENCIA LOCALIZADAS

// console.log(nome.replace(/i/ig, "teste"))


// console.log(nome.match(/[da]/ig))            //PROCURA TODOS OS D E A 

// console.log(nome.match(/[a-l]/ig))           //PROCURA TODAS AS LETRAS DE a ATÉ l 
// console.log(nome.match(/[a-l | 0-2]/ig))     //A MESMA COISA DO ANTERIOR E TAMBEM PESQUISA NUMEROS DE 0 2

//METACARACTERES
// console.log(nome.match(/\d/ig))          //RETORNA SOMENTE DIGITOS
// console.log(nome.match(/\s/ig))          //RETORNA SOMENTE ESPACOS
// console.log(nome.match(/\ba/))           //RETORNA SOMENTE CARACTERES ESPECIFICOS

//QUANTIFICADORES
// console.log(nome.match(/d+/ig))  //RETORNA TODOS AS OCORRENCIAS ENCONTRADAS SEPARANDO POR PALAVRAS
console.log(nome.match(/de*/ig))    //RETORNA OU O de OU SÓ O d 