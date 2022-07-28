class Game{
    constructor() {
        this.interval = 1000;
        this.score = new Score();
        this.live = new Live(this.gameOver.bind(this));
    }
    start(){
        this.balls = []
        this.intervalStart = setInterval(() => {
            this.balls.push(new ControlBall(this.score, this.live).init())
        }, this.interval)
    }
    gameOver(){
        console.log('Game over')
        clearInterval(this.intervalStart)
        document.body.innerHTML = ''
    }
}
