const navBar = document.getElementById('nav')
const navContainer = document.getElementById('nav-container');

const homeBtn = document.getElementById('home-btn')
const worksBtn = document.getElementById('work-btn')
const aboutBtn = document.getElementById('about-btn')

const homeContent = document.getElementById('home-content')
const workContent = document.getElementById('work-content')
const aboutContent = document.getElementById('about-content')

const topNavContainer = document.getElementById('top-nav-container');

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
    topMenuBtn.playSegments([0, 35], true);
}

const openMenuBtnHover = () =>{
    menuBtn.playSegments([60, 95],true);
    topMenuBtn.playSegments([60, 95], true);
}

const openMenu = () =>{
  menuBtn.playSegments([38, 54], true);
  menuBtnContainer.removeEventListener('mouseover', closeMenuBtnHover);
  menuBtnContainer.addEventListener('mouseover', openMenuBtnHover);
  menuBtnContainer.removeEventListener('click', openMenu);
  menuBtnContainer.addEventListener('click', closeMenu);
  navContainer.classList.remove('menu-half-right-slide');
}
const closeMenu = () =>{
  menuBtn.playSegments([53, 38], true);
  menuBtnContainer.addEventListener('mouseover', closeMenuBtnHover);
  menuBtnContainer.removeEventListener('mouseover', openMenuBtnHover);
  menuBtnContainer.addEventListener('click', openMenu);
  menuBtnContainer.removeEventListener('click', closeMenu);
  navContainer.classList.add('menu-half-right-slide');
}
const openTopMenu = () =>{
  topMenuBtn.playSegments([38, 54], true);
  topMenuBtnContainer.removeEventListener('mouseover', closeMenuBtnHover);
  topMenuBtnContainer.addEventListener('mouseover', openMenuBtnHover);
  topMenuBtnContainer.addEventListener('click', closeTopMenu);
  topMenuBtnContainer.removeEventListener('click', openTopMenu);
  //topNavContainer.classList.remove('menu-slide-down');
  topNavContainer.classList.remove('menu-half-slide-down');
}
const closeTopMenu = () =>{
  topMenuBtn.playSegments([53, 38], true);
  topMenuBtnContainer.addEventListener('mouseover', closeMenuBtnHover);
  topMenuBtnContainer.removeEventListener('mouseover', openMenuBtnHover);
  topMenuBtnContainer.addEventListener('click', openTopMenu);
  topMenuBtnContainer.removeEventListener('click', closeTopMenu);
  //topNavContainer.classList.add('menu-slide-down');
  topNavContainer.classList.add('menu-half-slide-down');
}

menuBtnContainer.addEventListener('mouseover', closeMenuBtnHover);

menuBtnContainer.addEventListener('click', openMenu);

topMenuBtnContainer.addEventListener('mouseover', closeMenuBtnHover);
topMenuBtnContainer.addEventListener('click', openTopMenu);



const openPageTransition = () =>{
  navContainer.classList.add('menu-right-slide');
  pageTransElement.classList.remove('hide-v');
  pageTransition.playSegments([0,120], true);
  setTimeout(() =>{
    navContainer.classList.remove('menu-right-slide');
    pageTransElement.classList.add('hide-v');
  },2000);
}

const openNavBar = () =>{
  navContainer.classList.remove('menu-right-slide');
  navContainer.classList.add('menu-half-right-slide');
}

const hideNavBar = () =>{
  navContainer.classList.add('menu-right-slide');
  navContainer.classList.remove('menu-half-right-slide');
}
