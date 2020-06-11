function MediaPlayer(config)
{
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){  
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted;
        },
        set muted(value){
            this.media.muted = value;
        }
    }
    this.plugins.forEach(plugin => {
        plugin.Run(player);
    });
}

MediaPlayer.prototype.play = function()
{
    this.media.paused ? this.media.play() : this.media.pause();
}

MediaPlayer.prototype.pause = function()
{
    this.media.pause();
}

MediaPlayer.prototype.mute = function()
{
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function()
{
    this.media.muted = false;
}

MediaPlayer.prototype.togglePlay = function()
{
    this.media.paused ? this.media.play() : this.media.pause();
}

MediaPlayer.prototype.toggleMute = function(){
    this.media.muted = this.media.muted ? false : true;
}

export default MediaPlayer;