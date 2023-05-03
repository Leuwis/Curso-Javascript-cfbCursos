// import getTodosCursos, { cursos } from "./cursos.js"
// import { cursos as c, carros as carangos} from "./cursos.js"
// import getTodosCursos from "./cursos.js"
// console.log(c)
// console.log(carangos)
// console.log(getTodosCursos())



//IMPORTANDO TODOS OS ELEMENTOS DO MODULO
// import * as m_cursos from './cursos.js'

// console.log(m_cursos.cursos)
// console.log(m_cursos.carros)
// console.log(m_cursos.getTodosCursos())
// console.log(m_cursos.default(1))


import Cursos from './cursos.js'

Cursos.addCurso("C#")
console.log(Cursos.getTodosCursos())