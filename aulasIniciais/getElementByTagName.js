const colecaoHtml = [...document.getElementsByTagName("div")];


colecaoHtml.map((el) => {
    el.innerHTML = "alterado";
})
console.log(colecaoHtml);