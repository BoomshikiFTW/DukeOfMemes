"use strict";

/**
 * Maintains the board state including hand, deck, life, etc. for a single player.
 * Just a container.
 */
class PlayerBoard {

    constructor(player, hand, deck, board, graveyard) {
        this.player = player;
        this.hand = hand;
        this.deck = deck;
        this.board = board;
        this.graveyard = graveyard;
    }

    set_deck(deck) {
        this.deck = deck;
    }

    draw() {
        this.hand.add_card(this.deck.draw());
    }
}

module.exports = PlayerBoard;