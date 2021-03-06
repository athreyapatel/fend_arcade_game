// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    this.sprite = 'images/enemy-bug.png';
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.speed=speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    this.x +=this.speed*dt;
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x>550) {
      this.x=-100;
      this.speed=100+Math.floor(Math.random()*512);
    }
    if (player.x<this.x+60 && player.x+37>this.x && player.y<this.y+5 && 50+player.y>this.y) {
      player.x+200;
      player.y=400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.sprite = 'images/char-boy.png';
}
//Update the player's position, required method of the game.
Player.prototype.update = function() {

	if (this.y > 420) {
		this.y = 400;
	}
	if (this.x > 400) {
		this.x = 400;
	}
	if (this.y < 0) {
		this.y = 400;
	}
	if (this.x < 0) {
		this.x = 0;
	}
};
// Draw the player on the screen, required method for the game.
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Handle input method is used to make use of funtioning of the key.
Player.prototype.handleInput = function (key) {
  switch (key) {
//Handles arrow keys
    case 'left':
      this.x -=this.speed+50;
      break;
    case 'up':
      this.y -=this.speed+20;
      break;
    case 'down':
      this.y +=this.speed+20;
      break;
    case 'right':
      this.x +=this.speed+50;
      break;
// If you use other than arrow keys, it will alert you.
    default: alert("Use only arrow keys only!");
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies =[];
const positionX=[0,0,0];
const positionY=[60,140,220];
(function createEnemy() {
  for (var i = 0; i < positionX.length; i++) {
    const enemy= new Enemy(positionX[i],positionY[i],100+Math.floor(Math.random()*512));
    allEnemies.push(enemy);
  }
})();
// Player is reset  to the starting position.
const player=new Player(200,400,50);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
