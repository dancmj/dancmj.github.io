var menuState = {
    
    create: function(){
        
        if(!localStorage.getItem('highScore')){
            localStorage.setItem('highScore',0);
        }
        
        if(game.global.score > localStorage.getItem('highScore')){
            localStorage.setItem('highScore',game.global.score);
        }
        
        //game.add.sprite(0,0,'background');
        
        if(game.global.score!=0){
            var titleText = 'Game Over!';
        }else{
            var titleText = 'GrimVsGhosts';
        }
        var nameLabel = game.add.text(game.world.centerX,80,titleText,{font: '32px "Press Start 2P"', fill: '#ffffff', align: 'center' });
        nameLabel.anchor.setTo(0.5, 0.5);
        
        var scoreText = 'Score: '+game.global.score + "\nHigh Score: "+localStorage.getItem('highScore');
        
        var scoreLabel = game.add.text(game.world.centerX, game.world.centerY,scoreText,{font: '16px "Press Start 2P"', fill: '#ffffff', align: 'center' });
        scoreLabel.anchor.setTo(0.5, 0.5);
        
        if(game.device.desktop){
            var startText = 'press SPACEBAR to start';
        }else{
            var startText = 'Touch to start!';
        }
        var startLabel = game.add.text(game.world.centerX, game.world.height-80, startText,{ font: '16px "Press Start 2P"', fill: '#ffffff' });
        startLabel.anchor.setTo(0.5, 0.5);

        nameLabel.smoothed=false;
        //game.add.tween(nameLabel.font).to('36px "Press Start 2P"', 1, Phaser.Easing.Linear.None, true, 1000, 1000, true).start();
//        game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();
//        game.add.tween(startLabel).to({alpha: 0}, 1000).to({alpha: 1}, 1).loop().start();
        game.add.tween(startLabel).to({alpha:0}, 1, Phaser.Easing.Linear.None, true, 1000, 1000, true).start();
        
        this.muteButton = game.add.button(20,20,'mute',this.toggleSound, this);
        if(game.sound.mute){this.muteButton.frame=1;};
        this.muteButton.input.useHandCursor = true;
        
        var spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceBar.onDown.addOnce(this.start,this);
        //game.input.onDown.addOnce(this.start, this);

    },
    
    start: function(){
        game.state.start('play');
    },
    
    toggleSound: function(){
        game.sound.mute = !game.sound.mute;
        
        this.muteButton.frame = game.sound.mute ? 1 : 0;
    }
    
}