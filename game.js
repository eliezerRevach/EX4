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
    const maxFlipped = 2;
    let flipped = [];
    let cardsMatched = 0;
    let cardsFlipped = 0;
    let scoreDisplay = $('#scoreNum');
    let movesDisplay= $('#movesNum');
    let deck = $('#deck');
    let modal = $(".popup")
    let closeicon = $(".close");

    function loadGame(){
        $("#re-btn").click(restartGame);
        shuffle(cardArray);
        createBoard();
        scoreDisplay.html(" "+cardsMatched);
        movesDisplay.html(" "+cardsFlipped);
    }

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            let card = $('<img />', { 
                id: ''+i,
                src: "images/back.jpg",
                class: 'card',
                alt: cardArray[i].name
            });
            card.click(flipCard);
            deck.append(card);
        }
    }

    function restartGame(){
        location.reload()
    }

    function flipCard(event){
        let id = event.target.id;
        if( flipped.findIndex((element) => element.id==id) >= 0)
            return;
        else if(flipped.length < maxFlipped){
            flipFront(id);
            
            if((flipped.length  ==  maxFlipped) && checkForMatch()){ // a match!
                scoreDisplay.html(" " + (++cardsMatched));
                for (let i = 0; i < maxFlipped; i++)
                    $('#'+flipped[i].id).unbind();

                if(cardsMatched == 15)
                    congratulations();
            }
        }
        else if(flipped.length  ==  maxFlipped){
            if(!checkForMatch()){
                for (let i = 0; i < maxFlipped; i++)
                    flipBack(flipped[i].id);
            }
            for(let i=0; i< maxFlipped ; i++)
                flipped.pop();
            flipFront(id);
        }
        movesDisplay.html(" " + (++cardsFlipped));

    }

    function flipFront(i){
        $('#'+i).attr("src", cardArray[i].img);
        flipped.push({"name": cardArray[i].name, "id": i});
    }

    function flipBack(i){
        $('#'+i).attr("src", "images/back.jpg");
    }

    function checkForMatch() {
        let name = flipped[0].name; 
        if(flipped.every((element)=> element.name == name)){  //all flipped match
            return true;
        }
        return false;
    }
    function congratulations() {
        modal.addClass("show");
        closeModal();
    }

    function closeModal(){
        closeicon.click(function(e){
            modal.removeClass("show");
            restartGame();
        });
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




