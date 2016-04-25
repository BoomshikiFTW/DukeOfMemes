"use strict";
var GameObject = require('./GameObject');

class Deck extends GameObject{
    constructor(match) {
        super(match);
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    /**
     * Draws a random card from this deck.
     * @returns {*} the Card object. Null if no cards are left.
     */
    draw() {
        var rnd_i = Math.floor(Math.random() * this.cards.length);

        if (this.cards.length > 0) {
            var card = this.cards.splice(rnd_i, 1)[0];
            return card;
        }
        else
            return null
    }
}

module.exports = Deck;