const pessoa = {
    nome:"Bruno",
    canal:"CFB Cursos",
    curso:"Javascript",
    aulas:{
        aula01:"Introdução",
        aula02:"Variáveis",
        aula03:"Condicional"        
    }
}

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas.aula01)

const string_pessoa = '{"nome":"Bruno","canal":"CFB Cursos","curso":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'

const s_jsonPessoa = JSON.stringify(pessoa) //CONVERTE OBJ EM STRING JSON
const obj_jsonPessoa = JSON.parse(string_pessoa) //CONVERTE STRING JSON EM OBJ

console.log(pessoa)
console.log(s_jsonPessoa)
console.log(obj_jsonPessoa)