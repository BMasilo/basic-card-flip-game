// selecting all elements from the document with class ='memory-card'
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add('flip');

  if(hasFlippedCard != true){
    hasFlippedCard = true;
    firstCard = this;
  } else{
    hasFlippedCard = false;
    secondCard = this;

    // do cards match?
    (firstCard.dataset.framework === secondCard.dataset.framework) ? 
    //if they match
    (firstCard.removeEventListener('click', flipCard), secondCard.removeEventListener('click', flipCard)) : 
    //if they don't match
    (firstCard.classList.remove('flip'), secondCard.classList.remove('flip')) 
  }
}

//to shuffle cards when the page loads
(function newBoard(){
  cards.forEach(card => {
    card.style.order = Math.floor(Math.random() * 12);
  })
})();

cards.forEach(card => card.addEventListener('click', flipCard));
