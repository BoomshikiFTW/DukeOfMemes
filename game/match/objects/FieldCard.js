"use strict";

/**
 * In game instance of a field card which in play or in the graveyard.
 */
class FieldCard extends GameObject {

    constructor(match, board, card) {
        super(match);
        this.board = board;
        this.card_template = card.card_template;
    }
}

module.exports = FieldCard;