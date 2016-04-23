"use strict";

var Random = require('random-js');
var eng = Random.engines.nativeMath;

/**
 * In game instance for a 1v1 match.
 */
class Duel extends Match {

    // TODO: inputs here shouldn't be player boards rather players and starting decks
    constructor(player_board1, player_board2) {
        this.player_boards = [ player_board1, player_board2 ]
        this.whos_turn = null;
        this.starting_cards = 15;
    }

    make_action(player_id, source_id, target_id) {

    }

    /**
     * Starts the game for both players.
     * Each draws a card.
     * The first turn is decided randomly.
     */
    startgame() {
        this.whos_turn = this.player_boards[Random.integer(0, 1)(eng)];

        // draws cards for each player
        for (var i = 0; i < this.starting_cards; i++) {
            this.player_boards[0].draw();
            this.player_boards[1].draw();
        }
    }



}

module.exports = Duel;