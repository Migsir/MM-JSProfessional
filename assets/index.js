import MediaPlayer from './MediaPlayer.js'
import Autoplay from './Plugins/Autoplay.js'
import AutoPause from './Plugins/AutoPause.js'


const video  = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video, 
    plugins:[new Autoplay(), new AutoPause()]
});

const playButton = document.querySelector("#playbutton");
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector("#mutebutton");
muteButton.onclick = () => player.toggleMute();

if("serviceWorker" in navigator){
    console.log("Has service worker");
    navigator.serviceWorker.register("/sw.js").catch(
        error =>{
            console.log(error.message);
        }
    );
}