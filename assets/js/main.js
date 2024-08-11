document.addEventListener('DOMContentLoaded', function () {
  /*
        AOS Scroll Animation
        ============================*/
  AOS.init({
    offset: 0,
    duration: 1000,
    once: true,
    easing: 'ease',
  })

  /*
        Counter Js
        ============================*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  })

  /*
        Popup video player
        ============================*/
  $('.video-play').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  })

  /*
        slick carousel
        ============================*/
  slider()

  /*
        smooth scrolling when clicking on a anchor link 
        ============================*/
  smoothScroll()

  /*
        scroll to top
        ============================*/
  scrollUp()
})
