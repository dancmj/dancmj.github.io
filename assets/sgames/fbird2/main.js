//Main part 2
var game = new Phaser.Game(400,490,Phaser.AUTO,'gameDiv');

var mainState = {
    preload: function(){

        game.stage.backgroundColor='#71c5cf';

        game.load.image('bird', '/assets/sgames/fbird2/assets/bird.png');
        game.load.image('pipe', '/assets/sgames/fbird2/assets/pipe.png');  
        //Load new audio files for when the player jumps, scores and hits a pipe.
        game.load.audio('jump', '/assets/sgames/fbird2/assets/jmp.wav');
        game.load.audio('score', '/assets/sgames/fbird2/assets/score.wav');
        game.load.audio('hit', '/assets/sgames/fbird2/assets/hit.wav');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.bird = this.game.add.sprite(100,245,'bird');
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1000; 
        //Sets the rotation of the bird NOT to the middle.
        this.bird.anchor.setTo(-0.2, 0.5); 

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump,this);
        
        this.pipes = game.add.group();
        this.pipes.enableBody = true; 
        this.pipes.createMultiple(20, 'pipe');
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this);
        //This creates an instance of the 'jump'/'score'/'hitPipe' file we loaded.
        this.jumpSound = game.add.audio('jump');  
        this.scoreSound = game.add.audio('score'); 
        this.hitPipeSound = game.add.audio('hit');
        
        this.score = 0; //Moved the score position so it gets drawn on top of the other sprites.
        this.labelScore = game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });  


    },  
    update: function(){
        //Calls a new function 'hitPipe' instead of just resetting the game.
        game.physics.arcade.overlap(this.bird, this.pipes, this.hitPipe, null, this);  
        
        //Adds a simple animation to Frank as if it were falling forward.
        if(this.bird.angle<20){
            this.bird.angle+=1;
        }

        if(!this.bird.inWorld){
            this.restartGame();
        }
    },

    jump: function() {  
        //If Frank is dead then he can't jump
        if(!this.bird.alive){
            return;
        }
        
        this.bird.body.velocity.y = -320;
        //Here we play the jumping sound.
        this.jumpSound.play("",0,.15); //I set the default parameters except for the 3rd, which is the volume.
        
        // Create Frank's animation & set the animation to 
        // change the angle of the sprite to -20° in 100 milliseconds
        // and then srtart Frank's animation.
        var animation = game.add.tween(this.bird).to({angle: -20}, 100).start();
  
    },
    restartGame: function() {  
        game.state.start('main');
    },

    addOnePipe: function(x, y) {  
        var pipe = this.pipes.getFirstDead();

        pipe.reset(x, y);

        pipe.body.velocity.x = -200; 
        
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    
    addRowOfPipes: function() {  
        this.score += 1;
        this.labelScore.text = this.score; 
        //Whenever the player scores, this makes noise.
        this.scoreSound.play();

        var hole = Math.floor(Math.random() * 5) + 1;

        for (var i = 0; i < 8; i++){
            if (i != hole && i != hole + 1) {
                this.addOnePipe(400, i * 60 + 10);  
            }
        }
    },
    //New function hitPipe, it's called when Frank smashes into a pipe.
    hitPipe: function(){
        //If the bird already hit a pipe, we won't run this code again.
        if(!this.bird.alive){
            return;
        }
    
        //Play an exagerated sound when Frank smashes his face on a pipe.
        this.hitPipeSound.play("",0,.4);
        
        //Kill Frank the Bird, RIP.
        this.bird.alive=false;
        
        //Stop pipes from appearing.
        game.time.events.remove(this.timer);
        
        //Iterate through the pipes and stop movement.
        this.pipes.forEachAlive(function(p){
            p.body.velocity.x=0;
        },this);
    },
};

game.state.add('main',mainState);
game.state.start('main');