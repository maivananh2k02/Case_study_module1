let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let sound = document.getElementById('sound');
let music = document.getElementById('music');
let point = 0;
let speed = 10;

let enemys = [];

document.addEventListener("keydown", moveCar);
let move;

function moveCar(event) {
    let key = event.keyCode;
    if (key === 37) {
        move = "LEFT";
    } else if (key === 39) {
        move = "RIGHT";
    }
}


function checkCrash(car, enemy) {
    if ((enemy.x > car.x && enemy.x < car.x + car.width - 7) || (enemy.x < car.x && enemy.x + car.width - 7 > car.x)) {
        if ((enemy.y > car.y && enemy.y < car.y + car.height) || (enemy.y < car.y && enemy.y + enemy.height > car.y)) {
            return true;// va chạm.
        }
    }
    return false;
}

//hàm tăng điểm
function checkWin(car, enemys) {
    for (let i = 0; i < enemys.length; i++) {
        if (checkCrash(car, enemys[i])) {
            return true;
        }
    }
    return false;

}

function update() {

//di chuyển
    if (move === "LEFT" && car.x > 0) {
        car.x = car.x - 20;
        move = null;
    } else if (move === "RIGHT" && car.x < 650) {
        car.x = car.x + 20;
        move = null;
    }

    for (let i = 0; i < enemys.length; i++) {
        if (enemys[i].y >= 600) {
            enemys[i].x = Math.random() * 650;
            enemys[i].y = 0;
            point += 1;
            if (i % 5 === 4) {
                speed++;
                console.log(speed)
            }
            if (point > hiscoreval) {
                hiscoreval = point;
                localStorage.setItem("max", JSON.stringify(hiscoreval));
                
            }
        } else {
            enemys[i].y += speed;
        }
        document.getElementById("point").innerHTML = "Point: " + point;
        document.getElementById("maxPoint").innerHTML = "Max Point: " + max;

    }
    backgroundImg.draw();

    car.draw();

    enemy.draw();

    if (checkWin(car, enemys)) {
        document.getElementById("gameOver").innerHTML = "GAME OVER";
        document.getElementById("pointEnd").innerHTML = "Point: " + point;
        clearInterval(game);
        document.getElementById("restartGame").innerHTML = `<button  onclick="restart()" style="position: absolute; top:400px; left: 280px; z-index: 1">Restart</button>`
        document.getElementById("maxPoint").style.display = "none";
        document.getElementById("point").style.display = "none";
        sound.pause();
        music.play();
    }
}


function restart() {
    location.reload();
}

function start() {
    game = setInterval(update, 100);
    document.getElementById("startGame").style.display = "none";
    document.getElementById("title").style.display = "none";
    sound.play();

}

let max = localStorage.getItem("max");
if (max < point) {
    hiscoreval = 0;
    localStorage.setItem("max", JSON.stringify(hiscoreval))
} else {
    hiscoreval = JSON.parse(max);
}