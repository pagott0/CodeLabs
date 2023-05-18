class Cachorro {
    constructor(nome, idade, porte, cor){
        this.nome = nome
        this.idade = idade
        this.porte = porte
        this.cor = cor

    }
}
let vetCachorros = []

function armazenador() {
    let dog = new Cachorro(document.querySelector("#Nome").value, document.querySelector("#Idade").value, document.querySelector("#Porte").value, document.querySelector("#Cor").value)
    vetCachorros.push(dog)
    vetCachorros.forEach((cachorro) => {
        alert(cachorro.nome)
        alert(cachorro.idade)
        alert(cachorro.porte)
        alert(cachorro.cor)
    })
}