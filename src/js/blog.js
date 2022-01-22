// vscode parallax
const vscodePost = document.querySelector('.blog__vscode');
let gears = document.querySelector('.blog__vscode-gears');

vscodePost.addEventListener('mousemove', function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  gears.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
