// Select the canvas and set its size
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Player settings
const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 20,
    color: 'blue'
};

// Bullet settings
const bullets = [];
const bulletSpeed = 5;

// Draw player
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Draw bullets
function drawBullets() {
    ctx.fillStyle = 'red';
    for (let bullet of bullets) {
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }
}

// Update bullet positions
function updateBullets() {
    for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].y -= bulletSpeed;
        // Remove bullets that are off-screen
        if (bullets[i].y < 0) {
            bullets.splice(i, 1);
        }
    }
}

// Handle shooting
function shoot() {
    const bullet = {
        x: player.x + player.width / 2 - 2.5,
        y: player.y,
        width: 5,
        height: 10
    };
    bullets.push(bullet);
}

// Event listener for shooting
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        shoot();
    }
});

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    updateBullets();
    drawBullets();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
