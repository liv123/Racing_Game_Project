
// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...
  player1 = new Player ('red', 'x', 97);
  console.log ("player 1 created");

  //Do the same for a player 2
  //this.player2 = ...
  player2 = new Player ('blue', 'i', 108);
  console.log ("player 2 created");
  //Create the track
  //this.track = ...

}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  $("table td").removeClass("active");
  $("table td:first-child").addClass("active");
  i=1;
  x=1;

  $(document).ready(function() {
  //attach listeners
    $(".play").click(play);
    $(document).keypress(hitKey);


  });
};

// A starter Player constructor.
function Player(color, position, letterUsed) {
  this.color = color;
  this.position = 0;
  this.letterUsed = letterUsed;
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game.init();
