// seleciona todas as imagens e coloca dentro de um 'array'
const images = document.querySelectorAll(".card-img")
// seleciona todos os botões e coloca dentro de um 'array'
const buttons = document.querySelectorAll(".card=btn")

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