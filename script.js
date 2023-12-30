var swiper = new Swiper(".gallery-swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      autoplay:{
        delay:3000,
        disableOnInteraction: false,
      }
    });

 var swiper = new Swiper(".review-slider", {
      grabCursor: true,
       loop: true,
       centeredSlides: true,
       spaceBetween: 20,
        autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
      pagination: {
        el: ".swiper-pagination",
      },
    });
 var swiper = new Swiper(".activity-slider", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

 AOS.init({
  duration:800,
  delay:400
});
