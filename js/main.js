var elNavBarBtn = document.querySelector(".js-navbar-btn");

elNavBarBtn.addEventListener("click", function(){
    document.body.classList.toggle("navbar-show");
})

$('.corusel-responsive').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 2,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});