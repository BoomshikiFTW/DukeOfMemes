"use strict";

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
}

module.exports = DeckTemplate;