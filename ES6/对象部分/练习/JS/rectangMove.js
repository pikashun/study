
class RectangMove {
    constructor(width,height,left,top,speedX,speedY,dom) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.speedX = speedX;
        this.speedY = speedY;
        this.dom = dom;
    }

    rende() {
        this.dom.style.width = this.width + 'px';
        this.dom.style.height = this.height + 'px';
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';
    }

    move() {
        this.computeSpeedY && this.computeSpeedY();
        this.left += this.speedX;
        this.top += this.speedY;
        this.moveOn && this.moveOn();
        this.rende();
    }
}