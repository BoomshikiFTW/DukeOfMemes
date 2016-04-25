"use strict";
var GameObject = require('./GameObject');

class Player extends GameObject {
    constructor(match) {
        super(match);
    }
}

module.exports = Player;