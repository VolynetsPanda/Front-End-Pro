class ControlBall{
    constructor(score, live) {
        this.size = 100 ;
        this.speed = 5;
        this.interval = 50;
        this.score = score;
        this.live = live;
    }
    init(){
        this.generateBall();
        this.move()
    }
    generateBall(){
        this.ball = new Ball(this.size, this.generateX())
        this.ball.addEventListener('click', () => {
            this.score.addScore();
            this.destroy();
        })
    }
    generateX(){
        return Math.ceil(Math.random() * window.innerWidth) - this.size
    }
    destroy(){
        this.ball.remove();
        delete this;
    }
    move(){
        let y = 0;
        this.moveInterval = setInterval(() => {
            y += this.speed;
            this.ball.style.top = `${y}px`;
            if(y > window.innerHeight - this.size){
                this.live.updateLive()
                clearInterval(this.moveInterval)
                this.destroy()
            }
        }, this.interval)
    }
}
