const birdDom = document.querySelector('.bird');
const birdStyle = window.getComputedStyle(birdDom);
const gameDom = document.querySelector('.game');

class Bird extends RectangMove {
    count = 0;
    constructor(g) {
        super(parseFloat(birdStyle.width),parseFloat(birdStyle.height),parseFloat(birdStyle.top),parseFloat(birdStyle.left),0,0,birdDom);
        this.g = g;
    }

    computeSpeedY() {
        this.speedY += this.g;
    }

    moveOn() {
        const minTop = 0;
        const maxTop = parseFloat(skyStyle.height) - parseFloat(landStyle.height) - parseFloat(birdStyle.height);
        (this.top >= maxTop) && (this.top = maxTop);
        (this.top <= minTop) && (this.top = minTop);
    }

    jump() {
        this.speedY = -40;
    }

    swin() {
        this.dom.classList.remove(`swin${this.count}`);
        this.count++;
        this.count %= 3;
        this.count++;
        this.dom.classList.add(`swin${this.count}`);
    }
}

const bird = new Bird(6);
gameDom.onclick = () => {
    bird.jump();
}