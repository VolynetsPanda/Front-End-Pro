class Score{
    constructor() {
        this.score = 0
    }
    createScore(){
        console.log(this.score)
    }
    addScore(){
        this.score++
        this.createScore()
    }
}
