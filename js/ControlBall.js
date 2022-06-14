class ControlBall{
    constructor() {
        this.lvl = new Level().getLvl();
        this.size = 100 / Number(`1.${this.lvl}`);
        this.speed = 5 * this.lvl;
        this.interval = 50;
    }
    init(){
        this.generateBall();
        this.move()
    }
    generateBall(){
        this.ball = new Ball(this.size, this.generateX())
        this.ball.addEventListener('click', () => {
            this.lvl.addCount()
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
                clearInterval(this.moveInterval)
                this.destroy()
            }
        }, this.interval)
    }
}
