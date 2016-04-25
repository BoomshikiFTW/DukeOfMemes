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

    add_card(card) {
        if (card) {
            this.cards.push(card);
        }
    }

    remove_card(card) {
        this.cards.remove(card);
        //todo: on card removed from hand trigger
    }

    has_card(card) {
        return this.cards.contains(card);
    }
}

module.exports = Hand;