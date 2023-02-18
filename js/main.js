'use strict'


// navbar move when scrolled
const navbar = document.querySelector('.navbar');
const navbarheight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  if(window.scrollY > navbarheight){
    navbar.classList.add('navbar__dark')
  }else{
    navbar.classList.remove('navbar__dark')
  }
});

//go to the id

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', (event)=>{
  const target = event.target;
  const link = target.dataset.link;

  if(link == null){
    return;
  }

  scrollIntoView(link);
});

const button = document.querySelector('.contact_button')

button.addEventListener('click', ()=>{
  scrollIntoView('#contact')
})


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth",block : "center" ,inline : "center"});
  
}