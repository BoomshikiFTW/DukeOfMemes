var Deck = require('./Deck.js')
var Card = require('./Card.js')
var Player = require('./Player.js')
var CardTemplate = require('./CardTemplate.js')

function start(req, res){
    // game initialization

    var player1 = new Player(1);
    var pepe_template = new CardTemplate('Pepe', 'Minion', 1);

    var pepe_1 = pepe_template.makeCardFor(player1);

    res.send('You are the <b>Duke Of Memes</b>')
}


module.exports = {
    start:start
}