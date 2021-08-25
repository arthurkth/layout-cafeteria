const swiper = new Swiper(".swiper-container", {
   
    direction: "horizontal",
    loop: true,
    centeredSlider: true,
    paralax: true,
    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    autoplay:{
      delay:3000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });