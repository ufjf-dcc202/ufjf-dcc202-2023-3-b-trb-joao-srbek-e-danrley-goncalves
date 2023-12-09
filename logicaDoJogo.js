const tabuleiroPlayer = [[],[],[]];
const tabuleiroBot = [[],[],[]];

//const dado = document.querySelector("dado");

function giraDado(){
  let valorDado = Math.floor(Math.random()*6)+1;
   return valorDado;
}

function getDado(){
    return giraDado();
}


export{giraDado,getDado};