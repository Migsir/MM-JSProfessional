import MediaPlayer from './MediaPlayer'
import Autoplay    from './Plugins/Autoplay'
import AutoPause   from './Plugins/AutoPause'


const video  = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video, 
    plugins:[new Autoplay(), new AutoPause()]
});

const playButton: HTMLElement = document.querySelector("#playbutton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#mutebutton");
muteButton.onclick = () => player.toggleMute();

if("serviceWorker" in navigator){
    console.log("Has service worker");
    navigator.serviceWorker.register("/sw.js").catch(
        error =>{
            console.log(error.message);
        }
    );
}