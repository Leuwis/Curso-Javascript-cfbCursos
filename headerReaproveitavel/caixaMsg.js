class Cxmsg{
    static cor     = "#888"
    static divmsg  = null
    static destino = null
    static tipo    = null
    static comando_sn = null
    static textos = []


    static mostrar=(config, titulo, texto)=>{
        
        this.cor        = config.cor
        this.tipo       = config.tipo
        this.comando_sn = ()=>{config.comando_sn()}
        this.destino    = document.body
        this.titulo     = titulo
        this.texto      = texto
        this.textos     = config.textos

        this.divmsg = document.createElement("div")
        const estilo_divmsg = 
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "display: flex;"+
            "position: absolute;"+
            "alingn-items: center;"+
            "justify-content: center;"+
            "background-color: rgba(0,0,0,0.7);"+
            "z-index: 9999999;"
            
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)


        const estilo_areaCxmsg = 
            "z_index: 9999999;"+
            "display: flex;"+
            "margin-top: 20%;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"
        const areaCxmsg = document.createElement("div")
        areaCxmsg.setAttribute("style", estilo_areaCxmsg)
        divmsg.appendChild(areaCxmsg)


        const estilo_tituloCxmsg = 
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;" +
            "background-color:" + this.cor +";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px"
        const tituloCxmsg = document.createElement("div")
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)
         

        const estilo_corpoCxmsg =
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px"

        const corpoCxmsg = document.createElement("div")
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)
        corpoCxmsg.innerHTML = this.texto
        areaCxmsg.appendChild(corpoCxmsg)


        const estilo_rodapeCxmsg=
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"

        const rodapeCxmsg = document.createElement("div")
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg) 
        areaCxmsg.appendChild(rodapeCxmsg)

        
        const estilo_btnCxmsg = 
        "background-color:"+ this.cor+";"+
        "color: #fff;"+
        "padding: 10px 50px;"+
        "border-radius: 5px;"+
        "cursor:pointer;"+
        "text-transform: uppercase;"


    if(this.tipo == "S/N"){
        
        const btn_confirm = document.createElement("button")
        btn_confirm.setAttribute("style", estilo_btnCxmsg)
        btn_confirm.innerHTML = this.textos[0]

        btn_confirm.addEventListener("click", (evt)=>{
             this.comando_sn()
            this.ocultar()
         })

        const btn_cancelar = document.createElement("button")
        btn_cancelar.setAttribute("style", estilo_btnCxmsg)
        btn_cancelar.innerHTML = this.textos[1]

        btn_cancelar.addEventListener("click", (evt)=>{
             this.ocultar()
         })

        rodapeCxmsg.appendChild(btn_confirm)
        rodapeCxmsg.appendChild(btn_cancelar)

    }else{

        const btn_ok = document.createElement("button")
        btn_ok.setAttribute("style", estilo_btnCxmsg)
        btn_ok.innerHTML = "ok"
        btn_ok.addEventListener("click", (evt)=>{
            this.ocultar()
        })
        rodapeCxmsg.appendChild(btn_ok)
    }

     }

    static ocultar=()=>{
        this.divmsg.remove()
    }
}

export {Cxmsg}
