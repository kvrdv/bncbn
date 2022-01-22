// header parallax
const homeHeader = document.querySelector('.header__tagline-home');
const imgLeft1 = document.querySelector('.header__home-img-left-1');
const imgLeft2 = document.querySelector('.header__home-img-left-2');
const imgLeft3 = document.querySelector('.header__home-img-left-3');
const imgRight1 = document.querySelector('.header__home-img-right-1');
const imgRight2 = document.querySelector('.header__home-img-right-2');
const imgRight3 = document.querySelector('.header__home-img-right-3');

document.addEventListener('mousemove', function (event) {
  let x = event.clientX / window.innerWidth;
  imgLeft1.style.transform = 'translate(-' + x * 30 + 'px)';
  imgLeft2.style.transform = 'translate(-' + x * 60 + 'px)';
  imgLeft3.style.transform = 'translate(-' + x * 90 + 'px)';
  imgRight1.style.transform = 'translate(+' + x * 30 + 'px)';
  imgRight2.style.transform = 'translate(+' + x * 60 + 'px)';
  imgRight3.style.transform = 'translate(+' + x * 90 + 'px)';
});
