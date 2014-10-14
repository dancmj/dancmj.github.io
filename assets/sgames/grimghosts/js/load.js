var loadState = {
    preload: function(){
       var addressPrepend = '/assets/sgames/grimghosts';
        var loadingLabel = game.add.text(game.world.centerX,150,'Loading...',{font: '32px "Press Start 2P"', fill: '#ffffff'});
        loadingLabel.anchor.setTo(0.5,0.5);
                                         
        var progressBar = game.add.sprite(game.world.centerX,200,'progressBar');
        progressBar.anchor.setTo(0.5,0.5);
        game.load.setPreloadSprite(progressBar);
        
        game.load.spritesheet('player', addressPrepend +'/assets/grim.png',20,20);
        game.load.spritesheet('mute',  addressPrepend +'/assets/muteButton.png',28,22);
        
        game.load.image('tileset', addressPrepend +'/assets/tileset.png');
        game.load.tilemap('map', addressPrepend +'/assets/map3.json',null,Phaser.Tilemap.TILED_JSON);
        
        game.load.spritesheet('ghost1', addressPrepend +'/assets/ghost1.png',20,20);
        game.load.spritesheet('skull', addressPrepend +'/assets/skull.png',20,20);
        game.load.image('pixel', addressPrepend +'/assets/pixel.png');
        
        game.load.image('jumpButton', addressPrepend +'/assets/jumpButton.png');
        game.load.image('rightButton', addressPrepend +'/assets/rightButton.png');
        game.load.image('leftButton', addressPrepend +'/assets/leftButton.png');

        game.load.audio('jump', [ addressPrepend +'/assets/jump.ogg', addressPrepend +'./assets/jump.mp3']);
        game.load.audio('coin', [ addressPrepend +'/assets/coin.ogg', addressPrepend +'./assets/coin.mp3']);
        game.load.audio('dead', [ addressPrepend +'/assets/dead.ogg', addressPrepend +'./assets/dead.mp3']);
    },
    
    create: function(){
        game.state.start('menu');
    },
}