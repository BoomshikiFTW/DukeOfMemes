"use strict";

var GameObject = require('GameObject');

/**
 * In minion in play on the game board.
 */
class Minion extends GameObject {

    constructor(match, card_template) {
        super(match);
        this.card_template = card_template;
        this.board = null;
        this.attack = null;
        this.health = null;
    }

    set_board(board) {
        this.board = board;
    }

}

module.exports = Minion;