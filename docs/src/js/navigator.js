const navBar = document.getElementById('nav')

const homeBtn = document.getElementById('home-btn')
const worksBtn = document.getElementById('work-btn')
const contactBtn = document.getElementById('contact-btn')
const aboutBtn = document.getElementById('about-btn')

const homeContent = document.getElementById('home-content')
const productContent = document.getElementById('product-content')
const aboutContent = document.getElementById('about-content')
const contactContent = document.getElementById('contact-content')

let currentPage = 'home';

homeBtn.addEventListener('click', () =>{
  if(currentPage !== 'home'){
    pageTransition.playSegments([0,120], true);
    currentPage = 'home';
    hideNavBar();
    setTimeout(() =>{
      openNavBar();
    },500);
  }
});

worksBtn.addEventListener('click', () =>{
  if(currentPage !== 'product'){
    pageTransition.playSegments([0,120], true);
    currentPage = 'product';
    hideNavBar();
    setTimeout(() =>{
      openNavBar();
    },500);
  }
});

contactBtn.addEventListener('click', () =>{
  if(currentPage !== 'contact'){
    pageTransition.playSegments([0,120], true);
    currentPage = 'contact';
    hideNavBar();
    setTimeout(() =>{
      openNavBar();
    },500);
  }
});

aboutBtn.addEventListener('click', () =>{
  if(currentPage !== 'about'){
    pageTransition.playSegments([0,120], true);
    currentPage = 'about';
    hideNavBar();
    setTimeout(() =>{
      openNavBar();
    },600);
  }
})

const openNavBar = () =>{
  navBar.classList.remove('right-slide');
}

const hideNavBar = () =>{
  navBar.classList.add('right-slide');
}
