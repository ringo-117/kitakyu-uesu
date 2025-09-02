

// const slideCount = document.querySelectorAll('.swiper-slide').length;
// const enableLoop = slideCount > 4;
const uesuSwiper = new Swiper(".uesu-slider", {
  // slidesPerView: "auto",
  slidesPerView: 1.2,
  slidesPerGroup: 1,
  // centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  loop: false,
  effect: 'slide',
  speed: 800,
  // watchOverflow: false,

  // pagination: {
  //   el: ".swiper-pagination",
  //    type: "fraction",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 画面幅によって設定を変える
  breakpoints: {
    // 0px以上（スマホなど）
    0: {
      slidesPerView: 1.2,
      // slidesPerView: "auto",
      // slidesPerGroup: 1,
      spaceBetween: 20,
    },
    // 640px以上（タブレットなど）
    640: {
      slidesPerView: 1.5,
      // slidesPerView: "auto",
      // slidesPerGroup: 1,
      spaceBetween: 25,
      // centeredSlides: false,

    }
    ,
    // 1024px以上（PC）
    1024: {
      enabled: false,
    }
  }
});


// // ヒーロースライダー
const heroSwiper = new Swiper(".hero-swiper", {
  effect: "fade",       // フェード切り替え
  loop: true,           // ループ
  autoplay: {
    delay: 3400,        // 3秒ごとに切り替え
    disableOnInteraction: false,
  },
  speed: 2500,          // フェードの速さ（1秒）
});