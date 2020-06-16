class MediaPlayer {
    
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlugins();
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