const container = document.querySelector(".cards");
const btnCards = document.querySelectorAll(".cards1");
const btnReset = document.getElementById("reset");

const cartas = Array.from(container.children);


btnCards.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector(".card-img");
    const back = btn.querySelector(".back");

    img.classList.remove("hide");
    back.classList.add("hide");
  });
});


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

    container.appendChild(carta);
  });
}


btnReset.addEventListener("click", resetarJogo);


resetarJogo();