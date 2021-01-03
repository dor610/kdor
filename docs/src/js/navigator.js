const navBar = document.getElementById('nav')
const navContainer = document.getElementById('nav-container');

const homeBtn = document.getElementById('home-btn')
const worksBtn = document.getElementById('work-btn')
const aboutBtn = document.getElementById('about-btn')

const homeContent = document.getElementById('home-content')
const workContent = document.getElementById('work-content')
const aboutContent = document.getElementById('about-content')

let currentPage = homeBtn;
currentPage.classList.add('active-btn');

homeBtn.addEventListener('click', () =>{
    currentPage.classList.remove('active-btn');
    currentPage = homeBtn;
    currentPage.classList.add('active-btn');
    openPageTransition();

});

worksBtn.addEventListener('click', () =>{
    currentPage.classList.remove('active-btn');
    currentPage = worksBtn;
    currentPage.classList.add('active-btn');
    openPageTransition();
});

aboutBtn.addEventListener('click', () =>{
    currentPage.classList.remove('active-btn');
    currentPage = aboutBtn;
    currentPage.classList.add('active-btn');
    openPageTransition();

});
const closeMenuBtnHover = () =>{
    menuBtn.playSegments([0, 35],true);
}

const openMenuBtnHover = () =>{
    menuBtn.playSegments([60, 95],true);
}

const openMenu = () =>{
  menuBtn.playSegments([38, 54], true);
  menuBtnContainer.removeEventListener('mouseover', closeMenuBtnHover);
  menuBtnContainer.addEventListener('mouseover', openMenuBtnHover);
  menuBtnContainer.removeEventListener('click', openMenu);
  menuBtnContainer.addEventListener('click', closeMenu);
  navContainer.classList.remove('half-right-slide');
}
const closeMenu = () =>{
  menuBtn.playSegments([53, 38], true);
  menuBtnContainer.addEventListener('mouseover', closeMenuBtnHover);
  menuBtnContainer.removeEventListener('mouseover', openMenuBtnHover);
  menuBtnContainer.addEventListener('click', openMenu);
  menuBtnContainer.removeEventListener('click', closeMenu);
  navContainer.classList.add('half-right-slide');
}

menuBtnContainer.addEventListener('mouseover', closeMenuBtnHover);

menuBtnContainer.addEventListener('click', openMenu);



const openPageTransition = () =>{
  navContainer.classList.add('right-slide');
  pageTransElement.classList.remove('hide-v');
  pageTransition.playSegments([0,120], true);
  setTimeout(() =>{
    navContainer.classList.remove('right-slide');
    pageTransElement.classList.add('hide-v');
  },2000);
}

const openNavBar = () =>{
  navContainer.classList.remove('right-slide');
  navContainer.classList.add('half-right-slide');
}

const hideNavBar = () =>{
  navContainer.classList.add('right-slide');
  navContainer.classList.remove('half-right-slide');
}
