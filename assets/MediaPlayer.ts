class MediaPlayer {
    
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }

    private initPlayer(){
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.Run(this);
        });
    }

    play() {
        this.media.paused ? this.media.play() : this.media.pause();
    }

    pause() {
        this.media.pause();
    }

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    togglePlay() {
        this.media.paused ? this.media.play() : this.media.pause();
    }
    
    toggleMute() {
        this.media.muted = this.media.muted ? false : true;
    }
}

export default MediaPlayer;