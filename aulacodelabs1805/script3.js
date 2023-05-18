class Retangulo {
    constructor(altura, largura, cor) {
        this.altura = altura
        this.largura = largura
        this.cor = cor
    }
}

function armazenador() {
    let ret = new Retangulo(document.querySelector("#Altura"), document.querySelector("#Largura"), document.querySelector("#Cor"))
    let retanguloDiv = document.getElementById("Resultado")
    retanguloDiv.style.width = ret.largura + "px";
}