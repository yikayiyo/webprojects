const bar = document.querySelector(".speed-bar");
const speed = document.querySelector(".speed");
const video = document.querySelector(".flex");

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  //   console.log("pageY: " + e.pageY);
  //   console.log("offsetTop: " + this.offsetTop);
  //   console.log("Y: " + y);
  const per = y / this.offsetHeight;
  const min = 0.5;
  const max = 3.0;
  const height = Math.round(per * 100) + "%";
  const rate = per * (max - min) + min;
  bar.style.height = height;
  bar.textContent = rate.toFixed(2) + "x";
  video.playbackRate = rate;
}

speed.addEventListener("mousemove", handleMove);
