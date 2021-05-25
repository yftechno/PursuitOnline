const SUITS = ["s", "c", "h", "d"];
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }
}

class Card {
  constructor (suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value =>{
      return new Card(suit, value)
    })
  })
}

function Card(creationString) {
  creationString.toUpperCase();
  let curSuit = creationString.charAt(0);
  let visValue = creationString.charAt(1) + creationString.charAt(2);

  numValue = visValue;

  if(visValue == "K" || visValue == "Q" || visValue == "J") numValue = 11;
  else if(visValue == "A") numValue == 12;
  else numValue = Number(numValue);

  var temp = {suit: curSuit, value: visValue, number: numValue};
  return temp;
}

/*
function Card(vString) constructor{
	suit = string_char_at(vString, 1);
	suitNum = getSuitNum(suit);
	val = string_char_at(vString, 3) + string_char_at(vString, 4);

	if(val == "K" || val == "Q" || val == "J"){
		num = 11;
	}else if(val == "A") {
		num = 12;
	}else{
		num = real(val);
	}
	var temp = {
		suit: suit,
		suitNum: suitNum,
		val: val,
		num: num,
	}




	return temp;
}


function getSuitNum(suitStr){
	if(suitStr == "h")  return 0;
	if(suitStr == "d")  return 1;
	if(suitStr == "c")  return 2;
	if(suitStr == "s")  return 3;

	return -1;
}
*/

/*
global.deckSuits ={
	hearts : "h",
	diamonds : "d",
	spades : "s",
	clubs : "c",
	red : "hd",
	black : "sc",
	full : "hdsc"
}

function Deck(suits) constructor{
	deck = ds_list_create();
	show_debug_message("++++++++++++++++++++++++++++++++++++++++++++++");
	show_debug_message("+++++++++++        Values       ++++++++++++++");
	show_debug_message("++++++++++++++++++++++++++++++++++++++++++++++");


	for(var i = 1; i <= string_length(suits); i++){
		for(var j = 2; j <= 14; j++){
			var buf = "";
			if(j > 10){
				switch j
				{
					case 11: buf =  string_char_at(suits,i) + "_" + "J"; break;
					case 12: buf =  string_char_at(suits,i) + "_" + "Q"; break;
					case 13: buf =  string_char_at(suits,i) + "_" + "K"; break;
					case 14: buf =  string_char_at(suits,i) + "_" + "A"; break;

				}
			}else{
				buf =  string_char_at(suits,i) + "_" + string(j);
			}
			show_debug_message("Card Added: "+buf);
			ds_list_add(deck,buf);
		}
	}

	static shuffle = function (){
		ds_list_shuffle(deck);
	}

	static draw = function(){
		var card;
		card = deck[|0];
		ds_list_delete(deck, 0);
		if(ds_list_size(deck) < 1){
			show_error("YOU LOST THE GAME! DECK'd OUT", true);
		}

		return card;
	}
}

function addCardToHand(valueString, handArray){
	if(is_array(handArray)){
		//var pos = array_length(handArray)+1;
		var card = new Card(valueString);
		array_push(handArray, card);
		return handArray;
	}else{
		show_error("handArray is not an array.",true)
	}
}
*/
