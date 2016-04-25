"use strict";
var Deck = require('../objects/Deck');

/**
 * In game instance for a 1v1 game.
 */
class DeckTemplate {

    constructor() {
        this.cards_templates = [];
        this.size_limit = 10;
    }

    addCardTemplate(card_template) {
        if (this.card_templates.length < size_limit){
            this.card_templates.append(card_template)
        }
    }

    /**
     *
     * @param match
     * @param player
     * @returns the new Deck object.
     */
    createDeck(match, player_board) {
        var new_deck = new Deck();
        for (var card_template in this.cards_templates) {
            new_deck.addCard(card_template.makeCardFor(match, player_board));
        }
        player_board.set_deck(this);
        return new_deck;
    }
}

module.exports = DeckTemplate;