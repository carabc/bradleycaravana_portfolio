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
const navLink = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', navResize);

function navResize() {
  if (window.scrollY > navHeight) {
    landingContent.style.marginTop = navBar.offsetHeight + 'px';
    navBar.style.minHeight = 50 + 'px';
    document.body.classList.add('resize');
  } else {
    landingContent.style.marginTop = 0;
    navBar.style.minHeight = 70 + 'px';
    document.body.classList.remove('resize');
  }
}
////END STICKY NAV

////RESPONSIVE NAV
const burger = document.querySelector('.burger');
const ul = document.querySelector('.responsive-ul');
let showMenu = false;
burger.addEventListener('click', dropDown);

function dropDown() {
  if (showMenu == false) {
    ul.classList.add('drop');
    showMenu = true;
  } else if (showMenu == true) {
    ul.classList.remove('drop');
    showMenu = false;
  }
}
//END RESPONSIVE NAV

//MODAL IMAGE
const modal0 = document.querySelector('.modal0');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');
const modal4 = document.querySelector('.modal4');
const btn0 = document.querySelector('.close0');
const btn1 = document.querySelector('.close1');
const btn2 = document.querySelector('.close2');
const btn3 = document.querySelector('.close3');
const btn4 = document.querySelector('.close4');
const img0 = document.querySelector('.img0');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');

let showModal = false;

img0.addEventListener('click', modalShow0);
img1.addEventListener('click', modalShow1);
img2.addEventListener('click', modalShow2);
img3.addEventListener('click', modalShow3);
img4.addEventListener('click', modalShow4);

function modalShow0() {
  if (showModal == false) {
    modal0.style.display = 'block';
    showModal = true;
    console.log(showModal);
  }
}

function modalShow1() {
  console.log('im working');
  if (showModal == false) {
    console.log(showModal);
    modal1.style.display = 'block';
    showModal = true;
  }
}

function modalShow2() {
  if (showModal == false) {
    modal2.style.display = 'block';
    showModal = true;
  }
}

function modalShow3() {
  console.log('im working');
  if (showModal == false) {
    modal3.style.display = 'block';
    showModal = true;
  }
}

function modalShow4() {
  if (showModal == false) {
    modal4.style.display = 'block';
    showModal = true;
  }
}

btn0.addEventListener('click', closeModal0);
btn1.addEventListener('click', closeModal1);
btn2.addEventListener('click', closeModal2);
btn3.addEventListener('click', closeModal3);
btn4.addEventListener('click', closeModal4);

function closeModal0() {
  if (showModal == true) {
    modal0.style.display = 'none';
    showModal = false;
  }
}

function closeModal1() {
  if (showModal == true) {
    modal1.style.display = 'none';
    showModal = false;
  }
}

function closeModal2() {
  if (showModal == true) {
    modal2.style.display = 'none';
    showModal = false;
  }
}

function closeModal3() {
  if (showModal == true) {
    modal3.style.display = 'none';
    showModal = false;
  }
}

function closeModal4() {
  if (showModal == true) {
    modal4.style.display = 'none';
    showModal = false;
  }
}
////END MODAL IMAGE
