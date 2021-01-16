document.addEventListener("DOMContentLoaded", () => {

let cardArray = [ 
    { name: "pic1", img: "images/pic1.png", }, 
    { name: "pic1", img: "images/pic1.png", }, 
    { name: "pic2", img: "images/pic2.png", },
    { name: "pic2", img: "images/pic2.png", },
    { name: "pic3", img: "images/pic3.png", },
    { name: "pic3", img: "images/pic3.png", },
    { name: "pic4", img: "images/pic4.png", },
    { name: "pic4", img: "images/pic4.png", }, 
    { name: "pic5", img: "images/pic5.png", },
    { name: "pic5", img: "images/pic5.png", },
    { name: "pic6", img: "images/pic6.png", }, 
    { name: "pic6", img: "images/pic6.png", }, 
    { name: "pic7", img: "images/pic7.png", },
    { name: "pic7", img: "images/pic7.png", },
    { name: "pic8", img: "images/pic8.png", },
    { name: "pic8", img: "images/pic8.png", },
    { name: "pic9", img: "images/pic9.png", },
    { name: "pic9", img: "images/pic9.png", },
    { name: "pic10", img: "images/pic10.png", },
    { name: "pic10", img: "images/pic10.png", },
    { name: "pic11", img: "images/pic11.png", },
    { name: "pic11", img: "images/pic11.png", }, 
    { name: "pic12", img: "images/pic12.png", },
    { name: "pic12", img: "images/pic12.png", },
    { name: "pic13", img: "images/pic13.png", },
    { name: "pic13", img: "images/pic13.png", },
    { name: "pic14", img: "images/pic14.png", },
    { name: "pic14", img: "images/pic14.png", },
    { name: "pic15", img: "images/pic15.png", },
    { name: "pic15", img: "images/pic15.png", },
    ]; 
const numOfRows=5;
const numOfColumns=6;
var cardsMatched = 0;
var cardsFlipped = 0; 
let deck = $('#deck')

function loadGame(){
    $("re-btn").click(createBoard);
    createBoard();
}

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/back.jpg');
        card.setAttribute('data-id', i);
        card.className='card';
        //card.addEventListener('click', flipCard);
        deck.append(card);
    }
}

 
// Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}


loadGame();
});