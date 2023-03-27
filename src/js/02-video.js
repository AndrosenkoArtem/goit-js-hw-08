import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
  }, 1000),
);
