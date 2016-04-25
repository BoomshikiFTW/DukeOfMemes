"use strict";

var GameObject = require('./GameObject');

/**
 * Holds a list of cards
 */
class Hand extends GameObject {
    constructor(match) {
        super(match);
        this.cards = []
    }

    addCard(card) {
        if (card)
            this.cards.push(card);
    }
}

module.exports = Hand;