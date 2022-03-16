function Card(term, definition) {
  this.term = term;
  this.definition = definition;
}

var front = document.getElementById("front");
var back = document.getElementById("back");
var flip = document.getElementById("flip");
var submit = document.getElementById("submit");

var card1 = new Card(
  "Arbeiten",
  "Work"
);

var card2 = new Card(
  "Bruder",
  "Brother"
);

var card3 = new Card(
  "Essen",
  "Eat"
);

var card4 = new Card(
  "Haben",
  "Have"
);

var card5 = new Card(
  "Hallo",
  "Hello"
);

var card6 = new Card(
  "Lernen",
  "Learn"
);

var card7 = new Card(
  "Schwester",
  "Sister"
);

var card8 = new Card(
  "Strasse",
  "Street"
);

var card9 = new Card(
  "Tisch",
  "Table"
);

var card10 = new Card(
  "Und",
  "And"
);

var card11 = new Card(
  "Ich",
  "I"
);

var card12 = new Card(
  "Du",
  "You"
);

var card13 = new Card(
  "Er",
  "He"
);

var card14 = new Card(
  "Sie",
  "She/They/You (formal)"
);

var card15 = new Card(
  "Es",
  "It"
);

var card16 = new Card(
  "Wir",
  "We"
);

var card17 = new Card(
  "Ihr",
  "You (plural)"
);

var card18 = new Card(
  "Der",
  "The (Masculine definite artical, nominative form)"
);

var card19 = new Card(
  "Die",
  "The (Feminine definite artical, nominative form)"
);

var card20 = new Card(
  "Das",
  "The (Neuter definite artical, nominative form)"
);

var myCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20];
var cardNumber = 0;

front.innerHTML = card1.term;
back.innerHTML = card1.definition;
back.style.visibility = "hidden";

function flash() {
  if (front.style.visibility != "hidden") {
    front.style.visibility = "hidden";
    back.style.visibility = "visible";
  } else {
    front.style.visibility = "visible";
    back.style.visibility = "hidden";
  }
}

function nextCard() {
  cardNumber = (cardNumber + 1) % myCards.length;
  front.innerHTML = myCards[cardNumber].term;
  back.innerHTML = myCards[cardNumber].definition;
}

function prevCard() {
  if (cardNumber > 0)
    cardNumber = (cardNumber - 1);
  else if (cardNumber == 0) cardNumber = myCards.length-1;
  front.innerHTML = myCards[cardNumber].term;
  back.innerHTML = myCards[cardNumber].definition;

}
