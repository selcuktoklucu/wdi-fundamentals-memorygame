console.log("Up and running!")

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];
/////----------
var cardsInPlay=[];
var checkForMatch= function(){

	
	if(cardsInPlay.length == 2){
		if(cardsInPlay[0].rank===cardsInPlay[1].rank){
			alert("You found match!");

	}
	else{
			alert("Sorry Try again!");
	}
} 
}
var flipCard = function (){
	var cardId = this.getAttribute('data-id');
	console.log("the card was flipped over "+ cards[cardId].rank);
	cardsInPlay.push(cards[cardId]);

	console.log(cards[cardId].cardImage);
	this.setAttribute('src',cards[cardId].cardImage);


	console.log(cards[cardId].suit);

	//instructions are not clear at project pbecause it shows both cardOne and cardTwo

	checkForMatch();
}


//flipCard(0);
//flipCard(2);

var createBoard = function(){

	for (var i = 0; i < cards.length; i++) {
    // Logic here
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('src',"images/back.png");
    	cardElement.setAttribute('data-id',i);
    	
    	cardElement.addEventListener('click',flipCard);
    	document.getElementById("game-board").appendChild(cardElement);
}
	

}
createBoard();

