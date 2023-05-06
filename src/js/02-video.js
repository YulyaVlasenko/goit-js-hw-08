import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));
//Перевірка
const savedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (savedTime) {
  player.setCurrentTime(savedTime);
}

console.log(typeof(savedTime));
