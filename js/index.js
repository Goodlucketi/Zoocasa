const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    765:{
      slidesPerView:2,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



tailwind.config = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
    // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1240px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1080px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '880px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '765px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '480px'},
      // => @media (max-width: 480px) { ... }
    }
  }
}
const body = document.querySelector('body')
const btn = document.querySelector('.menu-btn')
const navBtn = document.querySelector('.nav-btn')
const closeBtn = document.querySelector('.closeBtn')
const loginBtn = document.querySelector('.loginBtn')
const createBtn = document.querySelector('.createBtn')
const resloginBtn = document.querySelector('.resloginBtn')
const closeloginBtn = document.querySelector('.logincloseBtn')
const closeCreateBtn = document.querySelector('.createcloseBtn')
const pwdshw = document.querySelector('.pwdshw')
const pwdhide = document.querySelector('.pwdhide')

btn.onclick = function(){
  let menu = document.querySelector('.menu-links')

  if(menu.style.display=="block"){
    menu.style.display = 'none'
  }else{
    menu.style.display = 'block'
  }
}

navBtn.onclick = function() {
  let menu = document.querySelector('.responsive-links')
    menu.style.display = 'block'
}

closeBtn.onclick = function() {
  let menu = document.querySelector('.responsive-links')
    menu.style.display = 'none'
}

loginBtn.onclick = function() {
  let loginpage = document.querySelector('.loginSection')
  loginpage.style.display = 'initial'
  loginpage.style.background = 'rgba(10,10,10,0.7)'
}

// createBtn.onclick = function() {
//   let loginpage = document.querySelector('.loginSection')
//   let createpage = document.querySelector('.createSection')
//   createpage.style.display = 'initial'
//   createpage.style.background = 'rgba(10,10,10,0.7)'
//   loginpage.style.display = 'none'
// }

// Responsive Navigation function
resloginBtn.onclick = function() {
  let loginpage = document.querySelector('.loginSection')
  loginpage.style.display = 'initial'
  loginpage.style.background = 'rgba(10,10,10,0.7)'
}

closeloginBtn.onclick = function() {
  let loginpage = document.querySelector('.loginSection')
    loginpage.style.display = 'none'
}

// closeCreateBtn.onclick = function() {
//   let createpage = document.querySelector('.createSection')
//     createpage.style.display='none'
// }

// Password Toggle function
pwdhide.onclick = function(){
  let passField = document.querySelector('.password')
  if(passField.type=='text'){
    passField.type = 'password'
    pwdhide.style.display = 'none'
    pwdshw.style.display = 'block'
  }
}
pwdshw.onclick = function(){
  let passField = document.querySelector('.password')
  if(passField.type=='password'){
    passField.type = 'text'
    pwdshw.style.display = 'none'
    pwdhide.style.display= 'block'
  }
}

// Accordion section ---------
const accordionShw = document.querySelectorAll('.accordion')

accordionShw.forEach(accordion => {
  accordion.addEventListener('click', ()=>{
    accordion.classList.toggle('active')
    // console.log(index);
  })
});

const dropdown = document.querySelectorAll('.relative')

dropdown.forEach(content => {
  content.addEventListener('click', (e)=>{
    content.classList.toggle('active')
    if(e.target !== content){
      content.classList.remove('active')
    }
  })
});



const property = document.querySelectorAll('.item')
property.forEach(item => {
  item.addEventListener('click', ()=>{
    let propertyModal = document.querySelector('.propertyModal')
    // console.log(propertyModal);
    propertyModal.style.display = 'block'
    
  })
});

const closeModal = document.querySelector('.closeModal')
// closeModal.addEventListener('click', ()=>{
//   let propertyModal = document.querySelector('.propertyModal')
//     // console.log(propertyModal);
//     propertyModal.style.display = 'none'
// })