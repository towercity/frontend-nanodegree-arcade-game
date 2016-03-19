// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1s = 7,
    enemy2s = 4,
    enemy3s = 5,
    en1 = new Array(enemy1s),
    en2 = new Array(enemy2s),
    en3 = new Array(enemy3s),
    player = new Player(),
    score = 0,
    coin = new Coin();

for (var i = 0; i < en1.length; i++) {
    en1[i] = new Enemy1();
}
for (var i = 0; i < en2.length; i++) {
    en2[i] = new Enemy2();
}
for (var i = 0; i < en3.length; i++) {
    en3[i] = new Enemy3();
}

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

function gameOver() {
    document.getElementById('game-over').style.display = 'block';
    active = false;
}

function victory() {
    document.getElementById('victory').style.display = 'block';
    active = false;
}

function reset() {
    score = 0;
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('victory').style.display = 'none';
    player.x = 404;
    player.y = 392;
    coin.x += 1000;
    coin.y += 1000;
    coin.wait = 300;
    coin.visible = false;
    for (var enemy in en1) {
        en1[enemy].x = (Math.round(Math.random() * 10) * 90.9);
    }
    for (var enemy in en2) {
        en2[enemy].x = (Math.round(Math.random() * 10) * 90.9);
    }
    for (var enemy in en3) {
        en3[enemy].x = (Math.round(Math.random() * 10) * 90.9);
    }
    active = true;
}
