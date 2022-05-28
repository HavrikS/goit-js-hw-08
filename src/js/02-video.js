import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function ({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);    
};

player.on('timeupdate', throttle(onPlay, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.setCurrentTime(setTime());

function setTime() {
    const sawedTime = localStorage.getItem('videoplayer-current-time');
    let currentTime = 0;    
    if (sawedTime && parseFloat(sawedTime) !== 0) {
        currentTime = parseFloat(localStorage.getItem('videoplayer-current-time'));                
    }
    return currentTime;
}
