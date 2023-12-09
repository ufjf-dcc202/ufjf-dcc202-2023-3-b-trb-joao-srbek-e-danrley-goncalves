const tabuleiroPlayer = [[0,0,0],[0,0,0],[0,0,0]];
const tabuleiroBot = [[0,1,0],[2,0,0],[0,0,0]];

let turnoJogador= false;

/*function trocaTurno(){
    if (turnoJogador === true) {
      turnoJogador = false;
    }else{
      turnoJogador = true;
    }
}*/

//const dado = document.querySelector("dado");

function giraDado(){
  let valorDado = Math.floor(Math.random()*6)+1;
   return valorDado;
}

function getDado(){
    return giraDado();
}



export{giraDado,getDado,trocaTurno};