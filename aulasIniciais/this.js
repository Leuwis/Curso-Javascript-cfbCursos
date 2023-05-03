//"use strict";
function aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;

    this.dadosArrow = function(){
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota);
        }, 2000)
    }

}

const chamada = new aluno("deivid", 5);

chamada.dadosArrow();