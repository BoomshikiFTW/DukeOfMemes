"use strict";
var shortid = require('shortid');

/**
 * A minion, spell, card, field card, in a game.
 * Has a unique identifiable ID.
 */
class GameObject {

    constructor() {
        this.id = shortid.generate();
    }
}

module.exports = GameObject;