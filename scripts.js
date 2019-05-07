const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
  } else{
    hasFlippedCard = false;
    secondCard = this;

    // do cards match?
    (firstCard.dataset.framework === secondCard.dataset.framework) ? 
    (firstCard.removeEventListener('click', flipCard), secondCard.removeEventListener('click', flipCard)) : (firstCard.classList.remove('flip'), secondCard.classList.remove('flip')) 
  }
}

(function newBoard(){
  cards.forEach(card => {
    card.style.order = Math.floor(Math.random() * 12);
  })
})();

cards.forEach(card => card.addEventListener('click', flipCard));
