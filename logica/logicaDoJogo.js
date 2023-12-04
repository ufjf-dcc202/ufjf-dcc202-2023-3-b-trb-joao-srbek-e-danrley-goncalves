let jogadorAtual=' ';
function giraDado(){
    return Math.floor(Math.random()*6)+1;
}
function trocaQuemJoga(){
    if(jogadorAtual=='user'){
        jogadorAtual='bot';
    }else{
        jogadorAtual='user';
    }
}
function jogadaBot(){
    return espaco= Math.floor(Math.random()*9)+1;
}
function jogadaUser(){
    
}

export{giraDado,jogadaBot, trocaQuemJoga}