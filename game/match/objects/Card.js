"use strict";

var GameObject = require('./GameObject.js');

/**
 * In game instance of a card.
 * A card can exist in the deck, hand or graveyard
 */
class Card extends GameObject{

    constructor(match, player, card_template) {
        super(match);
        this.player = player;
        this.card_template = card_template;
    }
}

module.exports = Card;