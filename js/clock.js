/** @format */

const clock = document.querySelector(".js-clock");

function getCurrentTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursString = hours < 10 ? `0${hours}` : hours;
  const minutesString = minutes < 10 ? `0${minutes}` : minutes;
  const secondsString = seconds < 10 ? `0${seconds}` : seconds;

  clock.innerText = `${hoursString}:${minutesString}:${secondsString}`;
}

function init() {
  setInterval(getCurrentTime, 1000);
}

if (clock) {
  init();
}
