import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = parseFloat(localStorage.getItem('videoplayer-current-time'));

const onPlay = function ({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds);
    console.log(seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.setCurrentTime(currentTime);


