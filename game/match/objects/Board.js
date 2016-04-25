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

    add_minion(minion) {
        minion.set_board(this);
        this.minions.append(minion);
        //TODO: trigger on minion played event.
    }


    set_field_card(field_card) {
        minion.setBoard(this);
        this.minions.append(minion);
    }
}

module.exports = Board;