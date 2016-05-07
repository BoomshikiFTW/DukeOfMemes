var resX = 1024;
var resY = 768;

var poly1, poly2, poly3, poly4;
var graphics, game;
var _cardDimensions = [[0,0],[100,0],[100,250],[0,250]];
var cards = [];

function main() {
    game = new Phaser.Game(resX, resY, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
}

function preload() {
    game.load.image('blueeyes', 'http://pre06.deviantart.net/d4ed/th/pre/f/2013/112/6/7/blue_eyes_white_dragon_by_endergon_oscuro-d62ngx4.jpg');
}

function create() {
    graphics = game.add.graphics(200,500);

    drawHand(5);
}

// function update() {
//     graphics.clear();
//     if (cards[0].contains(game.input.x, game.input.y)) {
//         graphics.beginFill(0xFF3300);
//     } else {
//         graphics.beginFill(0xFF33ff);
//     }
//     graphics.drawRect(cards[0].points);
//     graphics.endFill();
// }

function drawHand(cardsAmount) {
    
    for (var i = 0; i < cardsAmount; i++) {
        cards.push(new Phaser.Rectangle(160*i,0,150,240));
    }

    graphics.beginFill(0xe6c300);

    // for (var i = 0; i < cardsAmount; i++) {
    //     graphics.drawRect(cards[i].x, cards[i].y, cards[i].width, cards[i].height);
    // }
    
    var gfix = [];
    for (var i = 0; i < cardsAmount; i++) {
        gfix.push(graphics.drawRect(160*i,0,150,240));
    }
    
    console.log(gfix);
    
    // for (var j = 0; j < gfix.length; j++) {
    //     gfix[j].mouseover(function() {console.log(j) });
    // }


    graphics.endFill();

}

function createHand() {
    
    var currentCards = 0;
    
    return function() {
        
    }
}

main();