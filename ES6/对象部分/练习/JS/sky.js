const skyDom = document.querySelector('.sky');
const skyStyle = window.getComputedStyle(skyDom);

class Sky extends RectangMove {
    constructor() {
        super(skyStyle.width,skyStyle.height,0,0,-6,0,skyDom);
    }

    moveOn() {
        (this.left <= -parseFloat(skyStyle.width) /2) && (this.left = 0);
    }

} 
const sky = new Sky();