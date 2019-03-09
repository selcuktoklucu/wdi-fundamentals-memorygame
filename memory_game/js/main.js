console.log("Up and running!")


var cards = ["queen","queen","king","king"];
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
	console.log("the card was flipped over "+ cards[cardId]);
	cardsInPlay.push(cardId);

	//instructions are not clear at project pbecause it shows both cardOne and cardTwo

	checkForMatch();
}



flipCard(0);
flipCard(2);

