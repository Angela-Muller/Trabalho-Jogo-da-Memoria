// seleciona todas as imagens
const images = document.querySelectorAll(".card-img");

// seleciona todos os botões
const btnCards = document.querySelectorAll(".cards1");

// seleciona os fundos
const fundo = document.querySelectorAll(".back");

// container
const container = document.querySelector(".cards");

// botão reset
const btnReset = document.getElementById("reset");

const btnStart = document.getElementById("tempo")

const pont = document.getElementById("pont");

const cartas = Array.from(container.children);



let primeiraCarta = null;
let segundaCarta = null;
let travar = false;
let pontos = 0;


btnCards.forEach((btn) => {
  btn.addEventListener("click", () => {

    if (travar) return;

    const img = btn.querySelector(".card-img");
    const back = btn.querySelector(".back");

    // evita clicar na mesma carta
    if (!img.classList.contains("hide")) return;

    // vira carta
    img.classList.remove("hide");
    back.classList.add("hide");

    // primeira carta
    if (!primeiraCarta) {
      primeiraCarta = btn;
      return;
    }

    // segunda carta
    segundaCarta = btn;
    travar = true;

 
    if (primeiraCarta.dataset.card === segundaCarta.dataset.card) {

      pontos += 10;
      pont.textContent = "Pontuação: " + pontos;

      primeiraCarta = null;
      segundaCarta = null;
      travar = false;

    } else {
      setTimeout(() => {

        if(pontos > 0){
          pontos -=5
        }
        desvirar(primeiraCarta);
        desvirar(segundaCarta);

        primeiraCarta = null;
        segundaCarta = null;
        travar = false;

      }, 800);
    }
  });
});


function desvirar(carta) {
  const img = carta.querySelector(".card-img");
  const back = carta.querySelector(".back");

  img.classList.add("hide");
  back.classList.remove("hide");
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}



function resetarJogo() {

  pontos = 0;
  pont.textContent = "Pontuação: 0";

  embaralhar(cartas);

  container.innerHTML = "";

  cartas.forEach(carta => {
    const img = carta.querySelector(".card-img");
    const back = carta.querySelector(".back");

    img.classList.add("hide");
    back.classList.remove("hide");

    container.appendChild(carta);
  });

  primeiraCarta = null;
  segundaCarta = null;
  travar = false;
}

// botão de resetar o jogo
btnReset.addEventListener("click", resetarJogo);

// inicia o jogo
resetarJogo();

let tempo = 0; // Tempo inicial em segundos
let intervalo;
const timer = document.getElementById("tempo");

function temporarizador() {
        clearInterval(intervalo); // evita múltiplos

    intervalo = setInterval(() => {
        tempo++;
        timer.innerHTML = `Tempo: ${tempo}`;
    }, 1000);

}

btnStart.addEventListener("click", temporarizador())