import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_DURATION = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(TIME_DURATION, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(TIME_DURATION);
if (currentTime) {
  player.setCurrentTime(currentTime);
}
