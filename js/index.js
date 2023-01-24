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


  tailwind.config = {
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

  const btn = document.querySelector('.menu-btn')
  const navBtn = document.querySelector('.nav-btn')

  btn.onclick = function(){
    let menu = document.querySelector('.menu-links')

    if(menu.style.display=="block"){
      menu.style.display = 'none'
    }else{
      menu.style.display = 'block'
    }
  }

  navBtn.onclick = function() {
    let menu = document.querySelector('.menu-links')
    console.log('clicked');
    menu.style.display = 'block'
  }

  const accordionShw = document.querySelector('.show')
  const accordionHide = document.querySelector('.hide')
  const accordionShw1 = document.querySelector('.show1')
  const accordionHide1 = document.querySelector('.hide1')
  const accordionShw2 = document.querySelector('.show2')
  const accordionHide2 = document.querySelector('.hide2')

  accordionShw.onclick = function (){
    let accordTxt = document.querySelector('.accordion-txt')
    accordTxt.style.display = 'block'
    accordionHide.style.display = 'block'
    accordionShw.style.display = 'none'
  }

  accordionHide.onclick = function (){
    let accordTxt = document.querySelector('.accordion-txt')
    accordTxt.style.display = 'none'
    accordionHide.style.display = 'none'
    accordionShw.style.display = 'block'
  }

  accordionShw1.onclick = function (){
    let accordTxt = document.querySelector('.accordion-txt1')
    accordTxt.style.display = 'block'
    accordionHide1.style.display = 'block'
    accordionShw1.style.display = 'none'
  }

  accordionHide1.onclick = function (){
    let accordTxt = document.querySelector('.accordion-txt1')
    accordTxt.style.display = 'none'
    accordionHide1.style.display = 'none'
    accordionShw1.style.display = 'block'
  }

  accordionShw2.onclick = function (){
    let accordTxt = document.querySelector('.accordion-txt2')
    accordTxt.style.display = 'block'
    accordionHide2.style.display = 'block'
    accordionShw2.style.display = 'none'
  }

  accordionHide2.onclick = function (){
    let accordTxt = document.querySelector('.accordion-txt2')
    accordTxt.style.display = 'none'
    accordionHide2.style.display = 'none'
    accordionShw2.style.display = 'block'
  }