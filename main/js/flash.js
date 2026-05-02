const flashlight = document.querySelector('.flashlight');

document.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  flashlight.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
})
