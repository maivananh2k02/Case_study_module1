class Background {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    draw() {
        let ctx = canvas.getContext('2d');
        let img = new Image();
        img.src = 'image/road.png';
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }
}

let backgroundImg = new Background(0, 0, 700, 600)

