function AutoPlay() {}

AutoPlay.prototype.Run = function(player){
    player.mute();
    player.play();
}

export default AutoPlay;