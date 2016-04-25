"use strict";
var ActionHandler = require('./ActionHandler');
var Player = require('./objects/Player');
var Hand = require('./objects/Hand');
var Board = require('./objects/Board');
var Board = require('./objects/Graveyard');
var PlayerBoard = require('./PlayerBoard');


/**
 * Handles the game state for a single game.
 */
class Match {

    /**
     * Creates a Match. One player per given deck.
     * @param decks
     */
    constructor(deck_templates) {
        this.player_boards = [];
        this.whos_turn = null; //indexes this.players
        this.game_objects = {};
        this.actionHandler = new ActionHandler(this);

        for (var deck_template in deck_templates) {
            var new_player = new Player(this);
            var player_board = new PlayerBoard(new_player, new Hand(this), null, new Board(this), new Graveyard(this));
            deck_template.createDeck(this, player_board);

            this.player_boards.push(player_board);
        }
    }

    add_game_object(game_object) {
        this.game_objects[game_object.id] = game_object;
    }

    make_action(source_id, target_id) {
        this.actionHandler.make_action(source_id, target_id);
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
            for (var player_board in this.player_boards) {
                player_board.draw();
            }
        }
    }
}

module.exports = Match;