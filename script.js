//slick

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },
    ],
  
    nextArrow:"<button type='button' class='slick-next btn btn-default pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
    prevArrow:"<button type='button' class='slick-prev btn  btn-default pull-left'><i class='fa fa-arrow-left' aria-hidden='true'></i></button>",
  });



  //dark mode 
  function darkMode() {
    let element = document.body;
    let darkModeBtn = document.querySelector('.btn-dark-mode')
    element.classList.toggle("dark-mode");
    if (darkModeBtn.innerHTML === "Light Mode" )
    {
        darkModeBtn.innerHTML = "Dark Mode" 
    }
    else {
        darkModeBtn.innerHTML = "Light Mode" 
    }
  }