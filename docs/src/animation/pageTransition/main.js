const demo = document.getElementById('page-transition');


let pageTransition = lottie.loadAnimation({
  container: demo, // the dom element that will contain the animation
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'src/animation/pageTransition/data.json', // the path to the animation json
  rendererSettings:{ preserveAspectRatio:'none' }
});
