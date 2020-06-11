function AutoPlay() {}

AutoPlay.prototype.Run = function(player){
    if(!player.muted){
        player.muted = true;
    }
    player.play();
}

export default AutoPlay;