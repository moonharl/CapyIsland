const flashlight = document.getElementById("flashlight");

const isTouchDevice =
  'ontouchstart' in window || navigator.maxTouchPoints > 0;

function getMousePosition(e) {
  const x = isTouchDevice ? e.touches[0].pageX : e.pageX;
  const y = isTouchDevice ? e.touches[0].pageY : e.pageY;

  flashlight.style.setProperty("--Xpos", x + "px");
  flashlight.style.setProperty("--Ypos", y + "px");
}

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);
