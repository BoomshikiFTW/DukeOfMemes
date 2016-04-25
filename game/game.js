"use strict";

var Random = require('random-js');
var eng = Random.engines.nativeMath;

var CardTemplate = require('./templates/CardTemplate.js');
var Player = require('./match/objects/Player.js');
var Deck = require('./match/objects/Deck.js');
var Card = require('./match/objects/Card.js');
var Hand = require('./match/objects/Hand.js');
var Board = require('./match/objects/Board.js');
var Match = require('./match/Match');
var PlayerBoard = require('./match/PlayerBoard.js');

function start(req, res){
    // game initialization

    var player1 = new Player();
    var deck1 = new Deck();
    var hand1 = new Hand();
    for (var i = 0; i < 13; i++) {
        var new_card = new CardTemplate('Pepe' + i, 'Minion', Random.integer(0, 4)(eng)).makeCardFor(player1);
        deck1.addCard(new_card);
    }
    var player_board1 = new PlayerBoard(player1, hand1, deck1, new Board());

    var player2 = new Player();
    var deck2 = new Deck();
    var hand2 = new Hand();
    for (var i = 0; i < 13; i++) {
        var new_card = new CardTemplate('Pepe' + i, 'Minion', Random.integer(0, 4)(eng)).makeCardFor(player2);
        deck2.addCard(new_card);
    }
    var player_board2 = new PlayerBoard(player2, hand2, deck2, new Board());

    var duel = new Duel(player_board1, player_board2);

    duel.startgame();

    if (res)
        res.send('You are the <b>Duke Of Memes</b>');
}


module.exports = {
    start:start
}