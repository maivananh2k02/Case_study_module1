class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

    }

    draw() {
        let ctx = canvas.getContext('2d');
        let img = new Image();
        img.src = 'image/player.png';
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    getY() {
        return this.y;
    }

    setY(y) {
        this.y = y;
    }

    getWidth() {
        return this.width;
    }

    setWidth(width) {
        this.width = width;
    }

    getHeight() {
        return this.height;
    }

    setHeight(height) {
        this.height = height;
    }
}


let car = new Car(200, 500, 50, 100);