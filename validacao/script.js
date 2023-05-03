const f_nome = document.getElementById("f_nome")
const f_nota = document.getElementById("f_nota")
const f_msg = document.getElementById("f_msg")

document.getElementById("btn_validar").addEventListener("click", (evt)=>{
    
    //let msg = null
    let estadoValidacao = null

    if(f_nota.validity.valueMissing){
        
        f_nota.setCustomValidity("este campo é obrigatório")
        console.log("entrou")
    }

    f_nota.reportValidity()
    // f_msg.innerHTML = msg
    evt.preventDefault()
})

//METODOS DE VALIDAÇÃO DO DOM
//checkValidity()
//setCustomValidity()


//PROPRIEDADE DE VALIDAÇÃO DO DOM
//validity
//validationMessage


//PROPRIEDADES DE VALIDAÇÃO
/*  
customError:        TRUE, SE UMA MENSAGEM DE VALIDAÇÃO PERSONALIZADA FOR DEFINIDA
patternMismatch:    TRUE, SE O VALOR DE UM ELEMENTO NÃO CORRESPONDER AO SEU ATRIBUTO PADRÃO
rangeOverflow:      TRUE, SE O VALOR DE UM ELEMENTO FOR MAIOR QUE SEU ATRIBUTO MAXIMO
rangeUnderflow:     TRUE, SE O VALOR DE UM ELEMENTO FOR MENOR QUE SEU ATRIBUTO MAXIMO
stepMismatch:       TRUE, SE O VALOR DE UM ELEMENTO FOR INVÁLIDO POR SEU ATRUBUTO STEP
tooLong:            TRUE, SE O VALOR DE UM ELEMENTO EXCEDER SEU ATRIBUTO DE MAXLENGTH
typeMismatch:       TRUE, SE O VALOR DE UM ELEMENTO FOR INVÁLIDO POR SEU ATRIBUTO TYPE
valueMissing:       TRUE, SE UM ELEMENTO (COM ATRIBUTO OBRIGATÓRIO) NÃO TIVER VALOR
valid:              TRUE, SE O VALOR DE UM ELEMENTO FOR VÁLIDO
*/