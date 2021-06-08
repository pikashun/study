const gameWidth = parseFloat(window.getComputedStyle(gameDom).width);
const pipeUpDom = document.querySelector('.pipeUp');
const pipeDownDom = document.querySelector('.pipeDown');
const landTop = parseFloat(landStyle.top);


const getRandom = (min,max) => {
    return (max - min)*Math.random() + min;
}

class Pipe extends RectangMove {
    constructor(height, left, top, speedX, dom) {
        super(52, height, left, top, speedX, 0, dom);
    }

    moveOn() {
        if(this.left <= 0){
            this.dom.remove();
        }
    }
}

class PipePare {
    constructor() {
        this.spaceHeight = 150;
        this.pipeUpHeight = getRandom(80,250);
        const upDom = document.createElement('div')
        upDom.className = 'pipe-up';
        this.pipeUp = new Pipe(this.pipeUpHeight,gameWidth,0,speedX,upDom);
        this.pipeDownHeight = landTop - this.spaceHeight - this.pipeUpHeight;
        this.pipeDownTop = landTop - this.pipeDownHeight;
        const downDom = document.createElement('div');
        downDom.className = 'pipe-down';
        this.pipeDown = new Pipe(this.pipeDownHeight,gameWidth,this.pipeDownTop,speedX,downDom);
    }
}

const