const soma = (...valores)=>{
    const somar = (val)=>{
        let res = 0;
        for (const i of val) {
            res+= i;
        }

        return res;
    }
    return somar(valores)
}

console.log(soma(12, 14, 15));
