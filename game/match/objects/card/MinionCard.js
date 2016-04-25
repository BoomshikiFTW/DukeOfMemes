"use strict";

var GameObject = require('./Card.js');
var GameObject = require('./../Minion.js');

/**
 * In game instance of a card.
 * A card can exist in the deck, hand or graveyard
 */
class MinionCard extends GameObject {

    constructor(match, player_board, card_template) {
        super(match, player_board, card_template);
    }

    /**
     * Generates a minion object from this card.
     */
    create_minion() {
        var new_minion = new Minion(this.match, this.card_template);

        new_minion.attack = this.card_template.attack;
        new_minion.health = this.card_template.health;
        // other immutable stats such as name and privilege cost are stored in this.card_template

        return new_minion;
    }

    /**
     * Summons a minion to the player's board.
     * Minion must be in the players hand.
     * @param target
     */
    action(target) {
        if (!this.player_board.hand.has_card(this))
            return false;

        var new_minion = this.create_minion();
        player_board.add_minion(new_minion);

        //remove this card from the hand from hand
        this.playerboard.hand.remove_card(this);

        return true;
    }

}

module.exports = MinionCard;