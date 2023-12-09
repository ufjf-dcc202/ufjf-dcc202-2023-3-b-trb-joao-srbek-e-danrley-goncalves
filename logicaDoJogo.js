const tabuleiroPlayer = [[], [], []];
const tabuleiroBot = [[], [], []];
//const dado = document.querySelector("dado");

function giraDado(){
   return Math.floor(Math.random()*(6-1)+1);
}

export{giraDado};