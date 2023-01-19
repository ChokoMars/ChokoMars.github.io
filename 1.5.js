const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
        clickable:true,
    },
    direction:"horizontal",
    // slidesPerView:1.2,
    centeredSlides:true,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1.2,
        },
        // when window width is >= 480px
        400: {
          slidesPerView: 1.5,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 1.7,
        }
      }
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
  });
