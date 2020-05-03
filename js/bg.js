/** @format */

const body = document.querySelector("body");

function getRandom() {
  return Math.floor(Math.random() * 5);
}

function setNewBackground() {
  const imageName = `${getRandom() + 1}.jpg`;
  const img = new Image();
  img.src = `images/${imageName}`;
  img.className = "bgImage";

  body.prepend(img);
}

function init() {
  setNewBackground();
}

if (body) {
  init();
}
