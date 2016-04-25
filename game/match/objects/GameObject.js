"use strict";
var shortid = require('shortid');

/**
 * A minion, spell, card, field card, etc. in a match.
 * Has a unique identifiable ID.
 */
class GameObject {

    constructor(match) {
        this.id = shortid.generate();
        this.match = match;
        match.add_game_object(this); //adds itself to the match
    }

    /**
     * Abstract action method.
     * Makes the action for this GameObject.
     * I.e The action for a card in the hand is to play it.
     * @param target The target GameObject of the action.
     * @returns Boolean: whether this is a valid action or not.
     */
    action(target) {
        // implemented by subclasses
        return false;
    }
}

module.exports = GameObject;