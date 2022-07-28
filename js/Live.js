class Live{
    constructor(end = () => {}) {
        this.live = 3
        this.end = end
    }
    updateLive(){
        if(this.live) {
            this.live--
            console.log(this.live)
        } else {
            this.end()
        }
    }
}
