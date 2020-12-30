const loader = document.getElementById('loader');
const loaderContainer = document.getElementById('loader-container');

let loaderAni = lottie.loadAnimation({
  container: loaderContainer, // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'src/animation/loader/data.json'//, // the path to the animation json
  //rendererSettings:{ preserveAspectRatio:'none' }
});

const openLoader = () =>{
  loader.classList.remove('hide-d');
  loader.classList.remove('hide-o');
}
openLoader();

const closeLoader = () =>{
  loader.classList.add('hide-o');
  setTimeout(()=>{
    loader.classList.add('hide-d');
    openNavBar();
  },500);
}
