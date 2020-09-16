const curtainImg = document.querySelector("#bottomImage");
window.addEventListener("mousemove",(e) => {
  curtainImg.style.left = e.clientX + "px";
});
