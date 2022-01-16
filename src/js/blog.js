// vscode parallax
let bg = document.querySelector('.blog__vscode-dots');

window.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
