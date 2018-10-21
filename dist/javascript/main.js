////SMOOTH SCROLL
// console.log('working');

// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect();
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;

//   function animation(currentTime) {
//     if (startTime == null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// var link = document.querySelector('.nav-link');
// var about = document.getElementById('about');
// link.addEventListener('click', function() {
//   smoothScroll('about', 1000);
// });
////END SMOOTH SCROLL

////STICKY NAV
const navBar = document.querySelector('.main-nav');
const navHeight = navBar.offsetTop;
const landingContent = document.querySelector('.grid-home');

window.addEventListener('scroll', navResize);

function navResize() {
  console.log(navHeight, window.scrollY);
  if (window.scrollY >= navHeight) {
    landingContent.style.marginTop = navBar.offsetHeight + 'px';
    document.body.classList.add('resize');
  } else {
    landingContent.style.marginTop = 0;
    document.body.classList.remove('resize');
  }
}
////END STICKY NAV
