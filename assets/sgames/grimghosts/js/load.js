var loadState = {
    preload: function(){
        var loadingLabel = game.add.text(game.world.centerX,150,'loading...',{font: '32px "Press Start 2P"', fill: '#ffffff'});
        loadingLabel.anchor.setTo(0.5,0.5);
                                         
        var progressBar = game.add.sprite(game.world.centerX,200,'progressBar');
        progressBar.anchor.setTo(0.5,0.5);
        game.load.setPreloadSprite(progressBar);
        
        //game.load.spritesheet('player','./assets/player2.png',20,20);
        game.load.spritesheet('player','./assets/grim.png',20,20);
        game.load.spritesheet('mute', './assets/muteButton.png',28,22);
        
        game.load.image('tileset','./assets/tileset.png');
        game.load.tilemap('map','./assets/map3.json',null,Phaser.Tilemap.TILED_JSON);
        
        //game.load.image('enemy', './assets/enemy.png');
        game.load.spritesheet('ghost1', './assets/ghost1.png',20,20);
        //game.load.image('coin','./assets/coin.png');
        game.load.spritesheet('skull', './assets/skull.png',20,20);
        game.load.image('background','./assets/blak.png');
        game.load.image('pixel', './assets/pixel.png');
        
        game.load.image('jumpButton', './assets/jumpButton.png');
        game.load.image('rightButton', './assets/rightButton.png');
        game.load.image('leftButton', './assets/leftButton.png');

        game.load.audio('jump',['./assets/jump.ogg', './assets/jump.mp3']);
        game.load.audio('coin',['./assets/coin.ogg', './assets/coin.mp3']);
        game.load.audio('dead',['./assets/dead.ogg', './assets/dead.mp3']);
        
    },
    
    create: function(){
        game.state.start('menu');
    },
    
    
}