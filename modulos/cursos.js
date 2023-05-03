//  const cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++"]
//  const carros = ["Polo", "T-cross", "Golf", "Onix", "Cruze", "Argo", "Cronos"]

// const getTodosCursos=()=>{
//     return cursos
// }


// export default function getCurso(ind){
//     return cursos[ind]
// }



//  //EXPORTANDO 
//  export {cursos, carros, getTodosCursos}

//  //DEFININDO A EXPORTAÇÃO PADRÃO
// //  export default(getTodosCursos)

class Cursos{
    static cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++"]
    constructor(){
    }

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso(ind){
            return this.cursos[ind]
    }

    static addCurso = (novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCurso = () =>{
        this.cursos=[]
    }
}

export default Cursos