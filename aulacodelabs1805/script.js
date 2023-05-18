class Pessoa{
    constructor(nome, data) {
        this.nome = nome;
        this.data = data;
    }
    get idade (){
        return 2023 - this.data;
    }
}



function calculadoraIdade(){
    nomeInput = document.querySelector("#Nome").value;
    dataInput = document.querySelector("#Data de Nascimento").value;
    let usuario = new Pessoa(nomeInput, dataInput)
    document.querySelector("#Idade").innerHTML = usuario.idade;


}