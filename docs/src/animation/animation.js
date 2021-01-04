const loader = document.getElementById('loader')
const loaderContainer = document.getElementById('loader-container')
const pageTransElement = document.getElementById('page-transition')
const menuBtnContainer = document.getElementById('menu-btn')
const topMenuBtnContainer = document.getElementById('top-menu-btn')

let loaderAni = lottie.loadAnimation({
  container: loaderContainer, // the dom element that will contain the animation
  renderer: 'canvas',
  loop: true,
  autoplay: true,
  path: 'src/animation/loader.json'//, // the path to the animation json
  //rendererSettings:{ preserveAspectRatio:'none' }
});

let pageTransition = lottie.loadAnimation({
  container: pageTransElement, // the dom element that will contain the animation
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  path: 'src/animation/pageTransition.json', // the path to the animation json
  rendererSettings:{ preserveAspectRatio:'none' }
});

let menuBtn = lottie.loadAnimation({
  container: menuBtnContainer,
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  path: 'src/animation/menuBtn.json',
  rendererSettings:{ preserveAspectRatio:'none' }
});

let topMenuBtn = lottie.loadAnimation({
  container: topMenuBtnContainer,
  renderer: 'canvas',
  loop: false,
  autoplay: false,
  path: 'src/animation/menuBtn.json',
  rendererSettings:{ preserveAspectRatio:'none' }
});

const openLoader = () =>{
  loader.classList.remove('hide-d');
  loader.classList.remove('hide-o');
  document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';
}
//openLoader();

const closeLoader = () =>{
  loader.classList.add('hide-o');
  document.getElementsByTagName('BODY')[0].style.overflow = 'visible';
  document.getElementsByTagName('BODY')[0].style.overflowX = 'hidden';
  setTimeout(()=>{
    loader.classList.add('hide-d');
    openNavBar();
  },2000);
}
