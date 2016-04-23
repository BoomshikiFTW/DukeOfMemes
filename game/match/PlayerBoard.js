"use strict";

/**
 * Maintains the board state including hand, deck, life, etc. for a single player.
 */
class PlayerBoard {

    constructor(player, hand, deck, board) {
        this.player = player;
        this.hand = hand;
        this.deck = deck;
        this.board = board;
    }

    draw() {
        this.hand.addCard(this.deck.draw());
    }
}

module.exports = PlayerBoard;