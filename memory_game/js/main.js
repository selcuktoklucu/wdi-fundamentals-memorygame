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
		if(cardsInPlay[0]===cardsInPlay[1]){
			alert("You found match!");

	}
	else{
			alert("Sorry Try again!");
	}
} 
}
var flipCard = function (cardId){
	console.log("the card was flipped over "+ cards[cardId].rank);
	cardsInPlay.push(cards[cardId]);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	//instructions are not clear at project pbecause it shows both cardOne and cardTwo

	checkForMatch();
}


flipCard(0);
flipCard(2);

