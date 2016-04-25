"use strict";
var GameObject = require('./GameObject');

class Graveyard extends GameObject{
    constructor(match) {
        super(match);
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

}

module.exports = Graveyard;