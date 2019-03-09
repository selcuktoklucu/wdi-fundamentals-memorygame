console.log("Up and running!")


var cards = ["queen","queen","king","king"];
var cardsInPlay=[];
var cardOne=cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped "+cardsInPlay);

var cardTwo=cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped "+cardsInPlay);
//instructions are not clear at project pbecause it shows both cardOne and cardTwo

if(cardsInPlay.length == 2){
	if(cardsInPlay[0]===cardsInPlay[1]){
		alert("You found match!");

	}
	else{
		alert("Sorry Try again!");
	}
}