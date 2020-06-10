import MediaPlayer from './MediaPlayer.js'
import Autoplay from './Plugins/Autoplay.js'


const video  = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins:[new Autoplay()]});

const playButton = document.querySelector("#playbutton");
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector("#mutebutton");
muteButton.onclick = () => player.toggleMute();
