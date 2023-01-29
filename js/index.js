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
  slidesPerView: 2,

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

createBtn.onclick = function() {
  let loginpage = document.querySelector('.loginSection')
  let createpage = document.querySelector('.createSection')
  createpage.style.display = 'initial'
  createpage.style.background = 'rgba(10,10,10,0.7)'
  loginpage.style.display = 'none'
}

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

closeCreateBtn.onclick = function() {
  let createpage = document.querySelector('.createSection')
    createpage.style.display='none'
}

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
// const accordionShw = document.querySelector('.show')
// const accordionHide = document.querySelector('.hide')
// const accordionShw1 = document.querySelector('.show1')
// const accordionHide1 = document.querySelector('.hide1')
// const accordionShw2 = document.querySelector('.show2')
// const accordionHide2 = document.querySelector('.hide2')

// accordionShw.onclick = function (){
//   let accordTxt = document.querySelector('.accordion-txt')
//   accordTxt.style.display = 'block'
//   accordionHide.style.display = 'block'
//   accordionShw.style.display = 'none'
// }

// accordionHide.onclick = function (){
//   let accordTxt = document.querySelector('.accordion-txt')
//   accordTxt.style.display = 'none'
//   accordionHide.style.display = 'none'
//   accordionShw.style.display = 'block'
// }

// accordionShw1.onclick = function (){
//   let accordTxt = document.querySelector('.accordion-txt1')
//   accordTxt.style.display = 'block'
//   accordionHide1.style.display = 'block'
//   accordionShw1.style.display = 'none'
// }

// accordionHide1.onclick = function (){
//   let accordTxt = document.querySelector('.accordion-txt1')
//   accordTxt.style.display = 'none'
//   accordionHide1.style.display = 'none'
//   accordionShw1.style.display = 'block'
// }

// accordionShw2.onclick = function (){
//   let accordTxt = document.querySelector('.accordion-txt2')
//   accordTxt.style.display = 'block'
//   accordionHide2.style.display = 'block'
//   accordionShw2.style.display = 'none'
// }

// accordionHide2.onclick = function (){
//   let accordTxt = document.querySelector('.accordion-txt2')
//   accordTxt.style.display = 'none'
//   accordionHide2.style.display = 'none'
//   accordionShw2.style.display = 'block'
// }

const property = document.querySelectorAll('.item')
property.forEach(item => {
  item.addEventListener('click', ()=>{
    let propertyModal = document.querySelector('.propertyModal')
    // console.log(propertyModal);
    propertyModal.style.display = 'block'
    
  })
});

const closeModal = document.querySelector('.closeModal')
closeModal.addEventListener('click', ()=>{
  let propertyModal = document.querySelector('.propertyModal')
    // console.log(propertyModal);
    propertyModal.style.display = 'none'
})