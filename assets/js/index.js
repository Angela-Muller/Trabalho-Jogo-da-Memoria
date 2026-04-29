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

const cartas = [
  document.getElementById("buzz"),
  document.getElementById("hulk"),
  document.getElementById("jail"),
  document.getElementById("nho"),
  document.getElementById("rev")
]

let pontuacao = 0;

let tentativa = 0;

let tempo = 0;

// para cara do botão, ele vai adicionar um evento 
btnCards.forEach((btn, index) => {
  btn.addEventListener('click', () => {
     // pega a imagem (por índice) e ativa
    images[index].classList.toggle('hide')
    fundo[index].classList.toggle('hide')
  })  
})
   
document.addEventListener("DOMContentLoaded", () => {

  /*Começa um loop de embaralhar*/
  function embaralhar() {
    cartas.forEach(cartas => {
      cartas.querySelector("img").style.display = "none";
      cartas.style.backgroudColor = "";
    })
  }

  function resetarJogo() {
    const cartas = Array.from(container.children);
    pontuacao = 0;
    tempo = 0;
    tpm.innerHTML = `tempo ${tempo}`
    pont.innerHTML = `pontuacao ${pontuacao}`
    embaralhar(cartas);

    container.innerHTML = "";

    cartas.forEach((carta, index) => {

      images [index].classList.toggle("hide")
      fundo [index].classList.toggle("hide")

      container.appendChild(carta);
    });
  }

  function pontuacao_game(){
    tempo ++;
    pontuacao +=1
    tpm.innerHTML = `tempo ${tempo}`
    pont.innerHTML = `pontuacao ${pontuacao}`
  }

  btnReset.addEventListener("click", resetarJogo);
  btnstart.addEventListener("click",pontuacao_game)
});