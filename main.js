import{giraDado,getDado, trocaTurno} from "./logicaDoJogo.js";

/*const botaoIniciar = document.querySelector("#btnIniciar");
botaoIniciar.addEventListener("click", giraDado());*/

const dado = getDado();
document.querySelector("#dado").textContent = dado;

console.log(`${dado}`);





