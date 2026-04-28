// seleciona todas as imagens e coloca dentro de um 'array'
const images = document.querySelectorAll(".card-img")
// seleciona todos os botões e coloca dentro de um 'array'
const btnCards = document.querySelectorAll(".card-btn")
// seleciona todos os fundos das cartas e coloca dentro de um `array`
const fundo = document.querySelectorAll(".back")
// Seleciona todo o container das cartas
const container = document.querySelector(".cards");
// Seleciona todos os botões das cartas
const btnReset = document.getElementById("reset");

// para cara do botão, ele vai adicionar um evento 
btnCards.forEach((btn, index) => {
  btn.addEventListener('click', () => {
     // pega a imagem (por índice) e ativa
    images[index].classList.toggle('hide')
    fundo[index].classList.toggle('hide')

    // se o texto é 'esconder', troca para 'mostrar'
    if(btn.textContent === 'ESCONDER') {
        btn.textContent = 'MOSTRAR'
    } else {
        btn.textContent = 'ESCONDER'
    }
  })  
})
   
document.addEventListener("DOMContentLoaded", () => {

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
    const cartas = Array.from(container.children);

    embaralhar(cartas);

    container.innerHTML = "";

    cartas.forEach((carta, index) => {

      images [index].classList.toggle("hide")
      fundo [index].classList.toggle("hide")

      container.appendChild(carta);
    });
  }

  btnReset.addEventListener("click", resetarJogo);
});