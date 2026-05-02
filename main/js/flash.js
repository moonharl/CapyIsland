const flashlight = document.querySelector('.flashlight');

document.addEventListener('mousemove', (e) => {
    flashlight.style.left = e.clientX + 'px';
    flashlight.style.top = e.clientY + 'px';
});
