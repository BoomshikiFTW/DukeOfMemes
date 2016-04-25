"use strict";
var shortid = require('shortid');

/**
 * A minion, spell, card, field card, in a game.
 * Has a unique identifiable ID.
 */
class GameObject {

    constructor(match) {
        this.id = shortid.generate();
        this.match = match;
        match.add_gameobject(this); //adds itself to the match
    }
}

module.exports = GameObject;