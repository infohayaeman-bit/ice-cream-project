const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
  searchBarContainerEl.classList.toggle("active");
});

  VanillaTilt.init(document.querySelectorAll(".data-tilt"), {
    max: 15,
    speed: 400
  });






  AOS.init({
    duration: 2500,
    autoplay: true
  });





  $(document).ready(function () {
    $('.slider-client').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,

      arrows: false,
      dots: true,
      autoplay:true,
      autoplaySpeed: 3000,
      speed:800,
      accessibility: true,
      draggable: true,
      swipe: true,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });


$('.blog-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

