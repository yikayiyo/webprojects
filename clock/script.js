const secondHand = document.getElementById("second-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

const clockFace = document.querySelector(".clock-face");

function breath() {
  clockFace.classList.toggle("breath");
}

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360;
  const minsDegrees = (mins / 60) * 360;
  const hoursDegrees = (hours / 12) * 360;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
window.onload = breath;
setInterval(breath, 7000);
