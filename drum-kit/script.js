const keys = document.querySelectorAll(".key");
window.addEventListener("keydown", playSound);

// 过渡完成后执行动作
keys.forEach((elm) => {
  elm.addEventListener("transitionend", removeTrans);
});

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const elm = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.play();
  elm.classList.add("playing");
  // 不推荐的写法
  // setInterval(() => elm.classList.remove("playing"), 500);
}

function removeTrans(e) {
  if (e.propertyName === "transform") {
    this.classList.remove("playing");
  }
}
