"use strict";

/**
 * In game instance of a card.
 */
class Card {

    constructor(player, card_template) {
        this.player = player;
        this.card_template = card_template;
    }
}

module.exports = Card;