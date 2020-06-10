function MediaPlayer(config)
{
    this.media = config.el
}

MediaPlayer.prototype.play = function()
{
    this.media.paused ? this.media.play() : this.media.pause();
}

MediaPlayer.prototype.pause = function()
{
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function()
{
    this.media.paused ? this.media.play() : this.media.pause();
}

export default MediaPlayer;