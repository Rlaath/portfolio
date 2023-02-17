'use strict'

const navbar = document.querySelector('.navbar');
const navbarheight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  console.log(window.scrollY);
  console.log(`navbarheight = ${navbar.getBoundingClientRect().height}`)

  if(window.scrollY > navbarheight){
    navbar.classList.add('navbar__dark')
  }else{
    navbar.classList.remove('navbar__dark')
  }
});