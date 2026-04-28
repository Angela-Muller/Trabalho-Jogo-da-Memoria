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

   /*Executa quando o HTML é carregado*/
document.addEventListener("DOMContentLoaded", () => {
  /*pega a div que contem as cartas*/
  const container = document.querySelector(".cards");
  /*paga o botão do reset*/
  const botaoReset = document.getElementById("reset");
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

    cartas.forEach(carta => {
      const img = carta.querySelector(".card-img");

      img.classList.add("hide");

      container.appendChild(carta);
    });
  }

  botaoReset.addEventListener("click", resetarJogo);

  resetarJogo();
});