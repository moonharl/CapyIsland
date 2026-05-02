const flashlight = document.querySelector('.flashlight');

document.addEventListener('mousemove', (e) => {
  let x = e.clientX - (document.documentElement.clientWidth * 1.5);
  let y = e.clientY - (document.documentElement.clientHeight * 1.5);
  flashlight.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
})
