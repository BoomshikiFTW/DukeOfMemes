"use strict";

var GameObject = require('./../GameObject.js');

/**
 * In game instance of a card.
 * A card can exist in the deck, hand or graveyard
 */
class Card extends GameObject {

    constructor(match, player_board, card_template) {
        super(match);
        this.player_board = player_board;
        this.card_template = card_template;
        this.is_in_hand = false;
    }
}

module.exports = Card;