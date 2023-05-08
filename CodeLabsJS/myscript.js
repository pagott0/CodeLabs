function clique() {
    document.body.style.background = "black";
}

let cont = 0;
function countclick() {
    
    cont = cont + 1;
    if(cont > 10){
        alert("Limite alcançado");
        cont = 0;
        document.getElementById("Contador").innerHTML = cont;
    }
    else{
        document.getElementById("Contador").innerHTML = cont;
    }
    
}

function replicartexto() {
    let musica = document.getElementById("Chorão").innerHTML;
    document.getElementById("Chorão").innerHTML = musica + '<br>' + '<br' + musica;
   
}