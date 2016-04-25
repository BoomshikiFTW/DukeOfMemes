"use strict";
var GameObject = require('./GameObject');

/**
 * Maintains the minions that one player has in play.
 * TODO: add field cards
 */
class Board extends GameObject {

    constructor(match) {
        super(match);
        this.minions = [];
        this.field_card = null;
    }

    addMinion(minion) {
        minion.setBoard(this);
        this.minions.append(minion);
    }


    setFieldCard(field_card) {
        minion.setBoard(this);
        this.minions.append(minion);
    }
}

module.exports = Board;