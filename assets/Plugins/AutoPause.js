class AutoPause{
    
    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);
    }

    Run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.threshold
        })
        observer.observe(this.player.media);
    }

    handlerIntersection(entries) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        if(entry.intersectionRatio < 1){
            if(isVisible){
                this.player.play();
            }else{
                this.player.pause();
            }
        }
        console.log(entry);
    }
}

export default AutoPause;