"use strict";
var Card = require('./../match/objects/card/MinionCard');

var NodeCouchDb = require('node-couchdb');

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
    constructor(name, type, privilege) {
        this.name = name;
        this.type = type;
        this.privilege = privilege;

        this.attack = null;
        this.health = null;
        this.privilege = null;
    }

    /**
     * Creates a Card instance for the given player
     * @param player
     */
    makeCardFor(match, player_board) {
        if (this.type == 'minion') {
            return new MinionCard(match, player_board, this);
        }
        else {
            return null;
        }
    }

    toString() {
        return "CardTemplate: " + this.name
    }
}

module.exports = CardTemplate;