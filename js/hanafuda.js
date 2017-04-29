var cardDeck = [];
var p1Hand = [];
var p1Stash = [];
var p2Hand = [];
var p2Stash = [];
var gameBoard = [];
var out = "";
var divOut = document.getElementById("output");

function prepare() {
    //init everything for start of game
    cardDeck = shuffle(cardsBase);
    p1Hand = [];
    p1Stash = [];
    p2Hand = [];
    p2Stash = [];
    gameBoard = [];
    //deal, assuming p1 is oya
    do {
        p2Hand.push(cardDeck.pop());
        p2Hand.push(cardDeck.pop());
        gameBoard.push(cardDeck.pop());
        gameBoard.push(cardDeck.pop());
        p1Hand.push(cardDeck.pop());
        p1Hand.push(cardDeck.pop());
    } while (p1Hand.length < 8);
    out = "Player one's hand consists of the following cards:<br/>" + hTS(p1Hand) + "<br/>Player two's hand consists of the following cards:<br/>" + hTS(p2Hand) + "<br/>The board consists of the following cards:<br/>" + hTS(gameBoard);
    divOut.innerHTML = out;
}

function hTS(array) {
    var str = "";
    for (var card of array) {
        str += card.name;
    }
    str.pop();
    return str;
}

var cardsBase = [
{
    id: "pine1a",
    month: 1,
    name: "Pine",
    points: 1
},
{
    id: "pine1b",
    month: 1,
    name: "Pine",
    points: 1
},
{
    id: "pine5",
    month: 1,
    name: "Pine with Ribbon",
    points: 5
},
{
    id: "pine20",
    month: 1,
    name: "Pine with Crane",
    points: 20
},
{
    id: "plum1a",
    month: 2,
    name: "Plum",
    points: 1
},
{
    id: "plum1b",
    month: 2,
    name: "Plum",
    points: 1
},
{
    id: "plum5",
    month: 2,
    name: "Plum with Ribbon",
    points: 5
},
{
    id: "plum10",
    month: 2,
    name: "Plum with Warbler",
    points: 10
},
{
    id: "cherry1a",
    month: 3,
    name: "Cherry Blossom",
    points: 1
},
{
    id: "cherry1b",
    month: 3,
    name: "Cherry Blossom",
    points: 1
},
{
    id: "cherry5",
    month: 3,
    name: "Cherry Blossom with Ribbon",
    points: 5
},
{
    id: "cherry20",
    month: 3,
    name: "Cherry Blossom with Curtain",
    points: 20
},
{
    id: "wist1a",
    month: 4,
    name: "Wisteria",
    points: 1
},
{
    id: "wist1b",
    month: 4,
    name: "Wisteria",
    points: 1
},
{
    id: "wist5",
    month: 4,
    name: "Wisteria with Ribbon",
    points: 5
},
{
    id: "wist10",
    month: 4,
    name: "Wisteria with Cuckoo",
    points: 10
},
{
    id: "iris1a",
    month: 5,
    name: "Iris",
    points: 1
},
{
    id: "iris1b",
    month: 5,
    name: "Iris",
    points: 1
},
{
    id: "iris5",
    month: 5,
    name: "Iris with Ribbon",
    points: 5
},
{
    id: "iris10",
    month: 5,
    name: "Iris with Planks",
    points: 10
},
{
    id: "peony1a",
    month: 6,
    name: "Peony",
    points: 1
},
{
    id: "peony1b",
    month: 6,
    name: "Peony",
    points: 1
},
{
    id: "peony5",
    month: 6,
    name: "Peony with Ribbon",
    points: 5
},
{
    id: "peony10",
    month: 6,
    name: "Peony with Butterfly",
    points: 10
},
{
    id: "clover1a",
    month: 7,
    name: "Clover",
    points: 1
},
{
    id: "clover1b",
    month: 7,
    name: "Clover",
    points: 1
},
{
    id: "clover5",
    month: 7,
    name: "Clover with Ribbon",
    points: 5
},
{
    id: "clover10",
    month: 7,
    name: "Clover with Boar",
    points: 10
},
{
    id: "grass1a",
    month: 8,
    name: "Zebra Grass",
    points: 1
},
{
    id: "grass1b",
    month: 8,
    name: "Zebra Grass",
    points: 1
},
{
    id: "grass10",
    month: 8,
    name: "Zebra Grass with Geese",
    points: 10
},
{
    id: "grass20",
    month: 8,
    name: "Zebra Grass with Moon",
    points: 20
},
{
    id: "chrys1a",
    month: 9,
    name: "Chrysanthemum",
    points: 1
},
{
    id: "chrys1b",
    month: 9,
    name: "Chrysanthemum",
    points: 1
},
{
    id: "chrys5",
    month: 9,
    name: "Chrysanthemum with Ribbon",
    points: 5
},
{
    id: "chrys10",
    month: 9,
    name: "Chrysanthemum with Sake Cup",
    points: 10
},
{
    id: "maple1a",
    month: 10,
    name: "Maple",
    points: 1
},
{
    id: "maple1b",
    month: 10,
    name: "Maple",
    points: 1
},
{
    id: "maple5",
    month: 10,
    name: "Maple with Ribbon",
    points: 5
},
{
    id: "maple10",
    month: 10,
    name: "Maple with Deer",
    points: 10
},
{
    id: "willow1",
    month: 11,
    name: "Willow with Lightning",
    points: 1
},
{
    id: "willow5",
    month: 11,
    name: "Willow with Ribbon",
    points: 5
},
{
    id: "willow10",
    month: 11,
    name: "Willow with Swallow",
    points: 10
},
{
    id: "willow20",
    month: 11,
    name: "Willow with Calligrapher",
    points: 20
},
{
    id: "paul1a",
    month: 12,
    name: "Paulownia",
    points: 1
},
{
    id: "paul1b",
    month: 12,
    name: "Paulownia",
    points: 1
},
{
    id: "pine1c",
    month: 12,
    name: "Paulownia",
    points: 1
},
{
    id: "paul20",
    month: 12,
    name: "Paulownia with Phoenix",
    points: 20
}];

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}