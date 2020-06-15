class AutoPlay{
    Run (player){
        if(!player.muted){
            player.muted = true;
        }
        player.play();
    }
}

export default AutoPlay;