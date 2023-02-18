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

  navbarMenu.classList.remove('open')
});

const button = document.querySelector('.contact_button')

button.addEventListener('click', ()=>{
  scrollIntoView('#contact')
})


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth",});
  
}

//home screen fade when scroll down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  home.style.opacity = (1 - window.scrollY / homeHeight);
}

)

// arrow button

const arrowBtn = document.querySelector('.arrowBtn')

document.addEventListener('scroll', ()=>{
  if(scrollY > homeHeight / 2){
    arrowBtn.classList.add('btnShow')
  } else {
    arrowBtn.classList.remove('btnShow')
  }
  
})

arrowBtn.addEventListener('click', ()=>{
  scrollIntoView('#home')
})

// work projects

const workBtnContainer = document.querySelector('.myWork__buttons');
const projectsContainer = document.querySelector('.myWork__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e)=>{
  const filter = e.target.dataset.filter || e.target.parentElement.dataset.filter;

  if(filter == null){
    return;
  }

  projectsContainer.classList.add('animation-out');
  
  projects.forEach((project) => {
    if(filter === '*' || filter === project.dataset.type){
      project.classList.remove('invisible')
    } else{
      project.classList.add('invisible')
    }
  })
})

//toggle button

function openToggleBtn(){
  navbarMenu.classList.toggle('open')
}

<<<<<<< Updated upstream
const toggleBtn = document.querySelector('.navbar__toggle-btn')
toggleBtn.addEventListener('click', openToggleBtn)
=======
})


//toggle button
const toggleBtn = document.querySelector('.navbar__toggle-btn')

toggleBtn.addEventListener('click', ()=>{
  navbarMenu.classList.toggle('open')
})
>>>>>>> Stashed changes
