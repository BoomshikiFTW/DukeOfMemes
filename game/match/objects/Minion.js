"use strict";

var GameObject = require('GameObject');

/**
 * In minion in play on the game board.
 */
class Minion extends GameObject {

    constructor(board, card) {
        super();
        this.card_template = card.card_template;
    }
}

module.exports = Minion;