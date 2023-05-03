//  import { Login } from "./telaLogin.js";
import {Cxmsg} from "../headerReaproveitavel/caixaMsg.js"

const callback_ok=()=>{
}

const callback_naook=()=>{
    const config={
        cor:"#800",
        tipo:"ok",
        textos:null,
        comando_sn:null,
     }
    Cxmsg.mostrar(config,"Erro","Login não efetuado! Usuário ou senha incorretos.");
}

const configLogin={
    cor:"048",
    img:"./img/logo.png",
    endpoint:"https://loginv1.cfbcursos.repl.co/"
}

Login.login(callback_ok, callback_naook, configLogin);