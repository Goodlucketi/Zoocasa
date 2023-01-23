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
  btn.onclick = function(){
    let menu = document.querySelector('.menu-links')

    if(menu.style.display=="block"){
      menu.style.display = 'none'
    }else{
      menu.style.display = 'block'
    }
    console.log('clicked');
  }
