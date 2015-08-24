
// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...
  this.player1 = new Player ('red', 'x', 97, 'track1');
  console.log ("player 1 created");

  //Do the same for a player 2
  //this.player2 = ...
  this.player2 = new Player ('blue', 'i', 108, 'track1');
  console.log ("player 2 created");
  //Create the track
  //this.track = ...

}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function(track1, track2) {
  $("table td").removeClass("active");
  $("table td:first-child").addClass("active");
  
    $(document).ready(function() {
  //attached listeners
      $(".play").click(play);
        $(document).keypress();

    });
};

// A starter Player constructor.
function Player(color, position, letterUsed, track) {
  this.color = 'color';
  this.position = 0;
  this.letterUsed = 'letterUsed';
  this.track = 'track';
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function(player) {
  //update player's position
  //when player hits key: move fwd 1 until end is reached
  $player.forEach() {
       $(player.active).removeClass("active").next().addClass("active");
       
    }
    else {
      if (x<tracksize) {
        alert("player 1 wins!");  
      }
    }
  }
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
