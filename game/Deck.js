"use strict";

class Deck {
    constructor() {
        console.log("Deck made");
    }

    draw() {
        return new Card()
    }
}

module.exports = Deck;