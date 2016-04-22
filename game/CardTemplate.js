"use strict";
var Card = require('./Card');

/**
 * CardTemplate is a template class for Card.
 *
 * Should contain no modifiers. Just a loader to load card from DB
 */
class CardTemplate {

    /**
     *
     * @param name
     * @param type
     */
    constructor(name, type, cost) {
        this.name = name;
        this.type = type;
        this.cost = cost
    }

    /**
     * Creates a Card instance for the given player
     * @param player
     */
    makeCardFor(player) {
        var new_card = new Card(player, this);
        new_card.name = this.name;
        new_card.type = this.type;
        new_card.cost = this.cost;

        return new_card;
    }

    toString() {
        return "CardTemplate: " + this.name
    }
}

module.exports = CardTemplate;