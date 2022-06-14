class Game{
    constructor() {
        this.interval = 1000;
    }
    start(){
        this.balls = [];
        this.intervalStart = setInterval(() => {
            this.balls.push(new ControlBall().init())
        }, this.interval)
    }
    gameOver(){
        this.balls.forEach(el => el.destroy())
        clearInterval(this.intervalStart)
    }
}
