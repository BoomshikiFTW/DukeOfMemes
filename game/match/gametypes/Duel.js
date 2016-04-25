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





}

module.exports = Duel;