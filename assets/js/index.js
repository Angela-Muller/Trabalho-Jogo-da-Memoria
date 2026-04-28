// seleciona todas as imagens e coloca dentro de um 'array'
const images = document.querySelectorAll(".card-img")
// seleciona todos os botões e coloca dentro de um 'array'
const buttons = document.querySelectorAll(".card-btn")

// para cara do botão, ele vai adicionar um evento 
buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
     // pega a imagem (por índice) e ativa
    images[index].classList.toggle('hide')

    // se o texto é 'esconder', troca para 'mostrar'
    if(btn.textContent === 'ESCONDER') {
        btn.textContent = 'MOSTRAR'
    } else {
        btn.textContent = 'ESCONDER'
    }

    
  })  
})

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards");
  const cartas = Array.from(container.children);

  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  embaralhar(cartas);

 
  container.innerHTML = "";


  cartas.forEach(carta => container.appendChild(carta));
});
   
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".cards");
  const botaoReset = document.getElementById("reset");

  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function resetarJogo() {
    const cartas = Array.from(container.children);

    embaralhar(cartas);

    container.innerHTML = "";

    cartas.forEach(carta => {
      const img = carta.querySelector(".card-img");

      img.classList.add("hide");

      container.appendChild(carta);
    });
  }

  botaoReset.addEventListener("click", resetarJogo);

  resetarJogo();
});