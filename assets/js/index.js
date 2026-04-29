// seleciona todas as imagens e coloca dentro de um 'array'
const images = document.querySelectorAll(".card-img")
// seleciona todos os botões e coloca dentro de um 'array'
const btnCards = document.querySelectorAll(".cards1")
// seleciona todos os fundos das cartas e coloca dentro de um `array`
const fundo = document.querySelectorAll(".back")
// Seleciona todo o container das cartas
const container = document.querySelector(".cards");
// Seleciona todos os botões das cartas
const btnReset = document.getElementById("reset");

const btnstart = document.getElementById("start");

const pont = document.getElementById("pont")

const tpm = document.getElementById("tpm")

const cartas = Array.from(container.children);

// para cara do botão, ele vai adicionar um evento 
btnCards.forEach((btn, index) => {
  btn.addEventListener('click', () => {
     // pega a imagem (por índice) e ativa
    images[index].classList.toggle('hide')
    fundo[index].classList.toggle('hide')
  })  
})


  /*Começa um loop de embaralhar*/
  function embaralhar(array) {
    /*gera um numero aleatoriamente entre 0 e i*/
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      /*Trpca as imagens de lugar*/
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function resetarJogo() {

    embaralhar(cartas);

    container.innerHTML = "";

    cartas.forEach(carta => {
      const img = carta.querySelector(".card-img");

      img.classList.toggle("none");

      container.appendChild(carta);
    });
  }

  btnReset.addEventListener("click", resetarJogo);

  resetarJogo();