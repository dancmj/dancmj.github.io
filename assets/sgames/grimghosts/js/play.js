var playState = {
    create: function(){
        
        this.cursor = game.input.keyboard.createCursorKeys();
        
        this.player = game.add.sprite(game.world.centerX,game.world.centerY,'player');
        this.player.anchor.setTo(0.5,0.5);
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y=500;
        this.player.animations.add('idle',[0,1],2,true);
        this.player.animations.add('right',[2,3],8,true);
        this.player.animations.add('left',[4,5],8,true);
        this.player.smoothed=false;
        this.player.jumpStartTime=0;
        this.player.lives=3;
        
        this.enemies = game.add.group();
        this.enemies.enableBody=true;
        this.enemies.createMultiple(10,'ghost1');
        
        this.coin = game.add.sprite(60,140,'skull');
        this.coin.animations.add('idle',[0,1],2,true);
        this.coin.animations.play('idle');
        game.physics.arcade.enable(this.coin);
        this.coin.anchor.setTo(0.5,0.5);
        this.coin.smoothed=false;
        this.coin.scale={x:2,y:2};

        game.global.score = 0;
        
        this.createWorld();
        this.nextEnemy = 0;
        
        this.jumpSound = game.add.audio('jump');
        this.coinSound = game.add.audio('coin');
        this.deadSound = game.add.audio('dead');
        this.jumpSound.volume=0.3;
        this.coinSound.volume=0.3;
        this.deadSound.volume=0.3;
        
        this.emitter = game.add.emitter(0,0,15);
        this.emitter.makeParticles('pixel');
        this.emitter.setYSpeed(-150,150);
        this.emitter.setXSpeed(-150,150);
        this.emitter.minParticleScale = 0.2;
        this.emitter.maxParticleScale = 0.7;
        this.emitter.minRotation = 10;
        this.emitter.maxRotation = 100;
        this.emitter.gravity = 100;
        
        this.scoreLabel = game.add.text(30,30,'score:0',{font: '16px "Press Start 2P"', fill: '#1e90d6'});
        this.lifeLabel = game.add.text(360,30,'Lives:'+this.player.lives ,{font: '16px "Press Start 2P"', fill: '#4ed35d'});
        
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,Phaser.Keyboard.SPACEBAR]);

        this.wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right:game.input.keyboard.addKey(Phaser.Keyboard.D),
            spaceBar:game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
        }; 
        
        if(!game.device.desktop){
            this.addMobileInput();
        }
    },
    
    update: function() {
		game.physics.arcade.collide(this.player, this.layer);
		game.physics.arcade.collide(this.enemies, this.layer);
		game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);
		game.physics.arcade.overlap(this.player, this.enemies, this.playerDie, null, this);

		this.movePlayer();
        
        if (this.nextEnemy < game.time.now) {
            var start = 4000, end = 1000, score = 100;
            
            var delay = Math.max(start - (start-end)*game.global.score/score, end);
            
            this.addEnemy();
            this.nextEnemy = game.time.now + delay;
        }

		
		if (!this.player.inWorld) {
			this.playerDie();
		}
	},
    
    movePlayer: function() {
		if (this.cursor.left.isDown || this.wasd.left.isDown || this.moveleft) {
			this.player.body.velocity.x = -200;
            this.player.animations.play('left');
		}
		else if (this.cursor.right.isDown || this.wasd.right.isDown) {
			this.player.body.velocity.x = 200;
            this.player.animations.play('right');
		}
		else {
			this.player.body.velocity.x = 0;
            this.player.animations.play('idle');
		}
    
		if (this.cursor.up.isDown || this.wasd.up.isDown || this.wasd.spaceBar.isDown || this.moveRight) {
            this.jumpPlayer();
		}      
	},
    
    takeCoin: function(player, coin) {
        this.coin.scale={x:0,y:0};
        game.add.tween(this.coin.scale).to({x: 2, y: 2}, 300).start();
        game.add.tween(this.player.scale).to({x: 1.3, y: 1.3}, 50).to({x: 1, y: 1}, 150).easing(Phaser.Easing.Sinusoidal.In).start();

        
        game.global.score += 5;
        this.scoreLabel.text = 'score:' + game.global.score;
        this.coinSound.play();
        this.updateCoinPosition();
    },
    
    updateCoinPosition: function() {
		var coinPosition = [
			{x: 140, y: 60}, {x: 360, y: 60}, 
			{x: 60, y: 140}, {x: 440, y: 140}, 
			{x: 130, y: 300}, {x: 370, y: 300} 
		];

		for (var i = 0; i < coinPosition.length; i++) {
			if (coinPosition[i].x === this.coin.x && coinPosition[i].y === this.coin.y) {
				coinPosition.splice(i, 1);
			}
		}

		var newPosition = coinPosition[game.rnd.integerInRange(0, coinPosition.length-1)];
		this.coin.reset(newPosition.x, newPosition.y);
	},
    
    addEnemy: function() {
		var enemy = this.enemies.getFirstDead();
		if (!enemy) {
			return;
		}

        enemy.animations.add('walk',[0,1],4,true);
        enemy.animations.play('walk');
		enemy.anchor.setTo(0.5, 1);
		enemy.reset(game.world.centerX, 0);
		enemy.body.gravity.y = 500;
		enemy.body.velocity.x = 100 * Phaser.Math.randomSign();
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.outOfBoundsKill = true;
	},
    
    createWorld: function() {
		this.map = game.add.tilemap('map');
        this.map.addTilesetImage('tileset');
        this.layer = this.map.createLayer('Tile Layer 1');
        //this.layer.resizeWorld();
        this.map.setCollision(1);
	},
    
    playerDie: function() {
        if(this.player.alive){
            this.player.kill();
            
            this.deadSound.play();
            this.emitter.x = this.player.x;
            this.emitter.y = this.player.y;
            this.emitter.start(true, 600, null, 15);
        
            if(this.player.lives>0){
                game.time.events.add(2000, function(){
                    this.player.lives--;
                    this.lifeLabel.text = 'Lives:' + this.player.lives;

                    this.player.kill();
                    this.player.reset(game.world.centerX,game.world.centerY);
                    this.enemies.forEach(function(){
                        var enemy = this.enemies.getFirstAlive()
                        if(!enemy){    
                            return;
                        }
                            enemy.kill();
                    },this);
                },this);
            }else{
                game.time.events.add(2000, this.startMenu, this);
            }
        };
    },
    
    startMenu: function() {
        game.state.start('menu');
    },

    addMobileInput: function(){
        this.jumpButton = game.add.sprite(350,247,'jumpButton');
        this.jumpButton.inputEnabled = true;
        this.jumpButton.events.onInputDown.add(this.jumpPlayer,this);
        this.jumpButton.alpha = 0.5;
        
        this.leftButton = game.add.sprite(50,247,'leftButton');
        this.leftButton.inputEnabled = true;
        this.leftButton.events.onInputOver.add(function(){this.moveLeft=true;},this);
        this.leftButton.events.onInputOut.add(function(){this.moveLeft=false;},this);
        this.leftButton.events.onInputDown.add(function(){this.moveLeft=true;},this);
        this.leftButton.events.onInputUp.add(function(){this.moveLeft=false;},this);
        this.leftButton.alpa = 0.5;
        
        this.rightButton = game.add.sprite(130,247,'rightButton');
        this.rightButton.inputEnabled = true;
        this.rightButton.events.onInputOver.add(function(){this.moveRight=true;},this);
        this.rightButton.events.onInputOut.add(function(){this.moveRight=false;},this);
        this.rightButton.events.onInputDown.add(function(){this.moveRight=true;},this);
        this.rightButton.events.onInputUp.add(function(){this.moveRight=false;},this);
        this.rightButton.alpha = 0.5;
        
        
    },
    
    jumpPlayer: function(){
        if(this.player.body.onFloor()){
            this.player.body.velocity.y=-260;
            this.player.jumpStarted = game.time.now;
            this.jumpSound.play();
        }else if(game.time.elapsedSince(this.player.jumpStarted)<200){
            this.player.body.velocity.y=-260;
        }
    }


}