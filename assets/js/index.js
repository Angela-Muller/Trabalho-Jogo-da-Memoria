const container = document.querySelector(".cards");
const btnCards = document.querySelectorAll(".cards1");
const btnReset = document.getElementById("reset");

const cartas = Array.from(container.children);

<<<<<<< HEAD

btnCards.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector(".card-img");
    const back = btn.querySelector(".back");

    img.classList.remove("hide");
    back.classList.add("hide");
  });
});
=======
let pontos = 0;

let tentativa = 0;

// para cara do botão, ele vai adicionar um evento 
btnCards.forEach((btn, index) => {
  btn.addEventListener('click', () => {
     // pega a imagem (por índice) e ativa
    images[index].classList.toggle('hide')
    fundo[index].classList.toggle('hide')
  })  
})
>>>>>>> 92fcfbd5cd698db03bd11bd4e986b54444cfadb0


function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function resetarJogo() {

  embaralhar(cartas);

  container.innerHTML = "";

  cartas.forEach(carta => {
    const img = carta.querySelector(".card-img");
    const back = carta.querySelector(".back");


    img.classList.add("hide");
    back.classList.remove("hide");

<<<<<<< HEAD
    container.appendChild(carta);
  });
}


btnReset.addEventListener("click", resetarJogo);


resetarJogo();
=======
  resetarJogo();
>>>>>>> 92fcfbd5cd698db03bd11bd4e986b54444cfadb0
