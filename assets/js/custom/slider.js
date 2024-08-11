const slider = () => {
  $('.hero-gallery-slider').slick({
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    draggable: true,
    arrows: true,
    prevArrow:
      '<button class="slick-arrow btn-prev"><i class="fa-regular fa-house"></i></button>',
    nextArrow:
      '<button class="slick-arrow btn-next"><i class="fa-solid fa-chevron-right"></i></button>',
    slidesToScroll: 1,
    variableWidth: true,
    loop: true,
    dots: false,
    speed: 1500,
    rtl: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  })
}
