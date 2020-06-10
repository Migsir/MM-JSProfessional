function MediaPlayer(config)
{
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function(){    
    this.plugins.forEach(plugin => {
        plugin.Run(this);
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