/** @format */

const greetingForm = document.querySelector(".js-greetingForm");
const inputName = greetingForm.querySelector("input");
const greetingText = document.querySelector(".js-greeting");

const USER = "name";
const SHOWING = "showing";

const currentUser = localStorage.getItem(USER);

function saveName(name) {
  localStorage.setItem(USER, name);
}

function printGreeting(name) {
  greetingText.classList.add(SHOWING);
  greetingForm.classList.remove(SHOWING);
  greetingText.innerText = `Have a good day, ${name}`;
}

function askForName() {
  greetingForm.classList.add(SHOWING);
}

function handleSubmit(e) {
  e.preventDefault();

  if (inputName.value !== "") {
    printGreeting(inputName.value);
    saveName(inputName.value);
    inputName.value = "";
  }
}

function loadName() {
  if (currentUser === null) {
    askForName();
  } else {
    printGreeting(currentUser);
  }
}

function init() {
  greetingForm.addEventListener("submit", handleSubmit);
  loadName();
}

if (greetingForm) {
  init();
}
