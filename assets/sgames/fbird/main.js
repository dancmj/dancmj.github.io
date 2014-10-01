//This initializes phaser on a 400x490px screen.
var game = new Phaser.Game(400,490,Phaser.AUTO,'gameDiv');

//Creates the "main state" of the game. It contains the game.
var mainState = {
    preload: function(){
        //This function will be executed when everything starts.
        //Load everything here. Assets & stuff.

        //Change the background color of the viewport.
        game.stage.backgroundColor='#71c5cf';

        //Load the bird's sprite
        game.load.image('bird', '/assets/sgames/fbird/assets/bird.png');
        game.load.image('pipe', '/assets/sgames/fbird/assets/pipe.png');  
    },
    create: function(){
        //This is called after the preload,
        //It sets up the game, displays sprites & more.
        
        
        this.score = 0; //Soring system! 
        this.labelScore = game.add.text(20, 20, "0", { font: "30px Arial", fill: "#ffffff" });  

        //This sets up the physics system. Pretty simple, huh?
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //Display the bird on the screen.
        this.bird = this.game.add.sprite(100,245,'bird');

        //Add gravity to the birdie.
        game.physics.arcade.enable(this.bird);
        this.bird.body.gravity.y = 1300; //Default 1000

        //Call the 'jump' function when the SPACE key is hit.
        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump,this);
        
        //The group will contain 20 pipes that we will be able to use as we want.
        //So its easier to use a group for the pipes.
        this.pipes = game.add.group(); // Create a group  
        this.pipes.enableBody = true;  // Add physics to the group  
        this.pipes.createMultiple(20, 'pipe'); // Create 20 pipes  
        this.timer = game.time.events.loop(1500, this.addRowOfPipes, this); //Adds the pipes into the game.


    },  
    update: function(){
        //THis function is called 60 times per seconds.
        //Game logic goes here.
        
        //Kill Frank the Bird if it collides with a pipe.
        game.physics.arcade.overlap(this.bird, this.pipes, this.restartGame, null, this);  
        
        //If the bird is out of the viewport:
        if(!this.bird.inWorld){
            this.restartGame();
        }
    },


    // Make the bird jump 
    jump: function() {  
        // Add a vertical velocity to the bird
        this.bird.body.velocity.y = -270; // DEfault -350
    },

    // Restart the game
    restartGame: function() {  
        // Start the 'main' state, which restarts the game
        game.state.start('main');
    },
    
    //By default, all the pipes contained in the group are dead and not displayed. 
    //So it picks up a dead pipe, display it, and make sure to automatically kill it when it's no longer visible.
    addOnePipe: function(x, y) {  
        // Get the first dead pipe of the group
        var pipe = this.pipes.getFirstDead();
        
        // Set the new position of the pipe
        pipe.reset(x, y);
        
        // Add velocity to the pipe to make it move left
        pipe.body.velocity.x = -200; 
        
        // Kill the pipe when it's no longer visible 
        pipe.checkWorldBounds = true;
        pipe.outOfBoundsKill = true;
    },
    
    //So, the previous function displays just one pipe.
    //Now here is a function that does that six times PLUS an awesome hole somewhere inbetween.
    addRowOfPipes: function() {  
        this.score += 1;  //Inxreases the score each time a column of pipes is created.
        this.labelScore.text = this.score;  
        
        // Pick where the hole will be
        var hole = Math.floor(Math.random() * 5) + 1;
        
        // Add the 6 pipes 
        for (var i = 0; i < 8; i++){
            if (i != hole && i != hole + 1) {
                this.addOnePipe(400, i * 60 + 10);  
            }
        }
    },
};

game.state.add('main',mainState);
game.state.start('main');