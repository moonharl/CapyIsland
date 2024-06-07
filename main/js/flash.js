function trackMouse(event) {
  document.documentElement.style.setProperty(
    '--cursorXPos',
    `${event.clientX}px`
  )
  document.documentElement.style.setProperty(
    '--cursorYPos',
    `${event.clientY}px`
  )
}
​
document.addEventListener('mousemove', trackMouse)
