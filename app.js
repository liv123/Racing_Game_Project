
// OOP Racing Game example boilerplate code

var tracksize = 20

  function Game() {
    // Create a new instance of player 1
    // this.player1 = ...
    this.player1 = new Player (108, 'red', ".track1");
    //console.log ("player 1 created");

    //Do the same for a player 2
    //this.player2 = ...
    this.player2 = new Player (97, 'blue', '.track2');
    //console.log ("player 2 created"); 
  }; 

    // `Game.prototype.init` kicks off a new game with a board and two players
    // when play btn pressed, clears board and starts in cell 1 
    Game.prototype.init = function() {
      $("td").removeClass("active");
      $("td:first-child").addClass("active");
    };


    




    Player.prototype.move = function(e) {
      //console.log('this move works');
      var i=0
        if (e.which == game.player1.letter) { //&& (i<tracksize)) {
          //console.log("e.which == this.letter");
          $(game.player1.location + " .active").removeClass("active").next().addClass("active");
        }
        if (e.which == game.player2.letter) {
          //console.log("e.which == 2nd this.letter")
          $(game.player2.location + " .active").removeClass("active").next().addClass("active");
        }
    };    
         
    Player.prototype.win = function()  {
      console.log("player1 win prototype works");
      // if ($('.active')){
      //   console.log("player 1 Wins");
      //   window.alert("Player 1 Wins!");
      // }
    };


  // A starter Player constructor.
  function Player(letter, color, location) {
    this.letter= letter;
    this.color = color;
    this.location = location;
  };

 


//Start the game!
 var game = new Game();
  


  

$(document).ready(function() {
//attach listeners
 $('#btn_play').click(Game.prototype.init);
 $(document).keypress(Player.prototype.move);
 $('.active').on(Player.prototype.win);
  
});