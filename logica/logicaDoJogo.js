document.addEventListener("DOMContentLoaded", function () {
  var celTabela = document.querySelector("td");
  celTabela.forEach(function (celTabela) {
    celTabela.addEventListener("click", function () {
      selecionaCelula(celTabela);
    });
  });
});

const btn = document.querySelector('btnIniciar');
btn.addEventListener('click', function(){
    
});

let player = {
  nome: 'bot',
  operacao1: function giraDado() {
    return Math.floor(Math.random() * 6) + 1;
  },
  operacao2: function trocaQuemJoga(nome) {
    if (nome == user) {
        return nome;
        nome = "bot";
    } else {
        return nome;
        nome = "user";
    }
  },
  operacao3: function jogadaPlayerAtual(){
    if(nome==bot){
        let dado = this.giraDado();
        let table = document.getElementById('tabelaBot');
        let tds = table.getElementsByTagName('td');
        let randomTd = tds[Math.floor(Math.random() * tds.length)];
        randomTd.innerHTML = dado;
        randomTd.style.color = "white";
    }else{
        
    }
  }  
};

function selecionaCelula() {
    celTabela = giraDado();
}

function iniciaJogo(){
    if (btnIniciar) {
        
    }
}

export {trocaQuemJoga, jogadaPlayerAtual};
