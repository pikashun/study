const landDom = document.querySelector('.land');
const landStyle = window.getComputedStyle(landDom);

class Land extends RectangMove {
    constructor() {
        super(landStyle.width,landStyle.height,0,skyStyle.height - landStyle.height,-8,0,landDom);
    }

    moveOn() {
        (this.left <= -parseInt(landStyle.width) / 2) && (this.left = 0);
    }
}
const land = new Land();