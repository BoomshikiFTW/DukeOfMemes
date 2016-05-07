var cardStates = {
    DECK: 1000,
    HAND: 2000,
    FIELD: 3000,
    DEAD: 4000
}
Object.freeze(cardStates);

//  Here is a custom game object
MemeCard = function (game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'blueeyes');
    
    this.scale.x = 0.16;
    this.scale.y = 0.16;
};

MemeCard.prototype = Object.create(Phaser.Sprite.prototype);
MemeCard.prototype.constructor = MemeCard;

CardBack = function(game, x, y) {
    Phaser.Sprite.call(this, game, x, y, 'cardback');
}

CardBack.prototype = Object.create(Phaser.Sprite.prototype);
CardBack.prototype.constructor = CardBack;

/**
 * Automatically called by World.update
 */
var i =0;
MemeCard.prototype.update = function() {
    //this.angle += this.rotateSpeed;
    //console.log(++i);
};

var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
var hand = [];

function preload() {
    game.load.image('blueeyes', 'img/dragon.jpg');
    game.load.image('cardback', 'img/yugiohback.png');
    game.load.audio('cardflip', 'sounds/card-flip.wav');
}

function create() {
    // var card = new MemeCard(game, 200, 300);
    // card.anchor.setTo(0.5, 0.5);
    var static_cardback = new CardBack(game, 10, game.world.centerY);
    var cardback = new CardBack(game, 10, game.world.centerY);
    var fx = game.add.audio('cardflip');

    cardback.inputEnabled = true;
    cardback.events.onInputDown.add(draw(cardback, fx), this);

    //game.add.existing(card);
    game.add.existing(static_cardback);
    game.add.existing(cardback);

    createOpponent();
}

function createOpponent() {
    var opp_cardback = new CardBack(game, game.world.bounds.width-10, game.world.centerY);
    opp_cardback.scale.x = -1;
    opp_cardback.scale.y = -1;

    game.add.existing(opp_cardback);
}

function draw(card, sound) {
    return function () {
        card.inputEnabled = false;
        
        var drawCardTween = game.add.tween(card);

        drawCardTween.to({y:game.world.bounds.height}, 250, Phaser.Easing.Exponential.In);
        drawCardTween.onComplete.add(function() {
            var newcard = new MemeCard(game, 0, game.world.bounds.height);
            newcard.anchor.setTo(0.5, 0.5);
            newcard.position.x = newcard.width/2 + 30;
            newcard.inputEnabled = true;
            newcard.events.onInputOver.add(function() {}, this);
            
            game.add.existing(newcard);
            hand.push(newcard);

            console.log(newcard);

            var raiseCardTween = game.add.tween(newcard);
            raiseCardTween.to({y:game.world.bounds.height-newcard.height/2-10}, 400, Phaser.Easing.Exponential.Out);
            raiseCardTween.onComplete.add(function() {
                updateHand();
                card.inputEnabled = true;
                card.position.y = game.world.centerY;
            }, this);
            raiseCardTween.start();
        }, this);
        drawCardTween.start();
        sound.play();
    }
}

function updateHand() {
    var _cardSpace = 130; // 130 is the assumed card width
    var handWidth = _cardSpace * hand.length;
    var handTween;
    
    for (var i = 0; i < hand.length; i++) {
        handTween = game.add.tween(hand[i]);
        handTween.to({x: game.world.bounds.width/2 + handWidth/2 - _cardSpace*i}, 600, Phaser.Easing.Exponential.Out);
        handTween.start();
    }
}