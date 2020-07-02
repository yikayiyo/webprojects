const app_qr = document.querySelector(".app-qr");
app_qr.addEventListener("mouseover", showQR);
app_qr.addEventListener("mouseout", hideQR);

function showQR(e) {
  const el = this.querySelector(".app-qr-expand");
  el.style = "display: inline-block; overflow: auto;";
}

function hideQR(e) {
  const el = this.querySelector(".app-qr-expand");
  el.style = "display: none;";
}
