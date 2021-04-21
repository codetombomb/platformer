const keysDown = {};

window.addEventListener("keydown", function (e) {
    if (["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"].indexOf(e.key) > -1) {
        e.preventDefault();
    }
}, false);

window.addEventListener("keydown", function (e) {
    keysDown[e.key] = true;
});

window.addEventListener("keyup", function (e) {
    walking = false;
    delete keysDown[e.key];
    // direction = null;
});

const movePlayer = (mod) => {
    if ("ArrowLeft" in keysDown) {
        walking = true;
        direction = player.walkLeft;
        if (player.x > 0) {
            player.x -= player.speed * mod;
        }
    }
    if ("ArrowUp" in keysDown) {
        walking = true;
        direction = player.walkUp;
        if (player.y > 0) {
            player.y -= player.speed * mod;
        }
    }
    if ("ArrowRight" in keysDown) {
        walking = true;
        direction = player.walkRight;
        if (player.x < 556) {
            player.x += player.speed * mod;
        }
    }
    if ("ArrowDown" in keysDown) {
        walking = true;
        direction = player.walkDown;
        if (player.y < 356) {
            player.y += player.speed * mod;
        }
    }
}