jQuery(document).ready(function ($) {

  /* efeito header */
  if (document.querySelector("#header")) {

    window.addEventListener("scroll", () => {
      let header = document.querySelector("#header");
      if (window.pageYOffset != 0) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    });
  }

  /* SUB-MENU */
  $('.arrow > a').click(function (e) {
    e.preventDefault();
  });
  $('.arrow').click(function () {
    $(this).toggleClass('active');
    $(this).find('.sub-menu').slideToggle();
  });

  /* MENU MOBILE */
  $('.hamburguer').click(function () {
    $(this).toggleClass('active');
    $('.menu-mobile').toggleClass('active');
  });

  /* Swiper */
  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    autoplay: {
      delay: 6000,
    },
    speed: 2000,
    watchOverflow: true,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });

  /* MASK PHONE */

  $(".phone").mask("(99) 9999-9999");

});