"use strict";

var GameObject = require('GameObject');

/**
 * In game instance of a card.
 * A card can exist in the deck, hand or graveyard
 */
class Card extends GameObject{

    constructor(player, card_template) {
        super()
        this.player = player;
        this.card_template = card_template;
    }
}

module.exports = Card;