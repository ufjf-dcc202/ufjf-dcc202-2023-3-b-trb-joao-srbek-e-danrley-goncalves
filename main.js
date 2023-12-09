import{giraDado,getDado, jogada} from "./logicaDoJogo.js";

/*const botaoIniciar = document.querySelector("#btnIniciar");
botaoIniciar.addEventListener("click", giraDado());*/
let turno = true;
const jogadaRola =jogada(dado);
const dado = getDado();
const celulas = document.querySelectorAll('.espacoUser');

document.querySelector("#dado").textContent = dado;


celulas.forEach(celula => {
  celula.addEventListener('click', function() {
    if (celula.textContent === 0) {
       celula.textContent = giraDado(); 
    }
    else{
        return;
    }
  });
});

console.log(`${dado}`);





