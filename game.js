document.addEventListener("DOMContentLoaded", () => {

let cardArray = [ 
    { name: "pic1", img: "images/pic1.jpg", }, 
    { name: "pic1", img: "images/pic1.jpg", }, 
    { name: "pic2", img: "images/pic2.jpg", },
    { name: "pic2", img: "images/pic2.jpg", },
    { name: "pic3", img: "images/pic3.jpg", },
    { name: "pic3", img: "images/pic3.jpg", },
    { name: "pic4", img: "images/pic4.jpg", },
    { name: "pic4", img: "images/pic4.jpg", }, 
    { name: "pic5", img: "images/pic5.jpg", },
    { name: "pic5", img: "images/pic5.jpg", },
    { name: "pic6", img: "images/pic6.jpg", }, 
    { name: "pic6", img: "images/pic6.jpg", }, 
    { name: "pic7", img: "images/pic7.jpg", },
    { name: "pic7", img: "images/pic7.jpg", },
    { name: "pic8", img: "images/pic8.jpg", },
    { name: "pic8", img: "images/pic8.jpg", },
    { name: "pic9", img: "images/pic9.jpg", },
    { name: "pic9", img: "images/pic9.jpg", },
    { name: "pic10", img: "images/pic10.jpg", },
    { name: "pic10", img: "images/pic10.jpg", },
    { name: "pic11", img: "images/pic11.jpg", },
    { name: "pic11", img: "images/pic11.jpg", }, 
    { name: "pic12", img: "images/pic12.jpg", },
    { name: "pic12", img: "images/pic12.jpg", },
    { name: "pic13", img: "images/pic13.jpg", },
    { name: "pic13", img: "images/pic13.jpg", },
    { name: "pic14", img: "images/pic14.jpg", },
    { name: "pic14", img: "images/pic14.jpg", },
    { name: "pic15", img: "images/pic15.jpg", },
    { name: "pic15", img: "images/pic15.jpg", },
    ]; 
const numOfRows = 5;
const numOfColumns = 6;
let cardsMatched = 0;
let cardsFlipped = 0; 
let scoreDisplay = $('#scoreNum')
let movesDisplay= $('#movesNum')
let deck = $('#deck')

function loadGame(){
    $("#re-btn").click(restartGame);
    shuffle(cardArray);
    createBoard();
}

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = $('<img />', { 
            id: ''+i,
            src: "images/back.jpg",
            class: 'card card-back',
            alt: 'MyAlt'
        });
        card.click(flipCard);
        deck.append(card);
    }
}

function restartGame(){
    alert("restart");
}

function flipCard(event){
    let index = event.target.id;
    $('#'+index).attr("src", cardArray[index].img);
    let name = a
    if()
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