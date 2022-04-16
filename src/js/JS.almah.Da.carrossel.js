docReady(function() {

    //$(".helperComplement").remove();


    $('.product-carousel .prateleira.vitrine ul').find('.helperComplement').remove();
    $('.product-carousel-last .prateleira.vitrine ul').find('.helperComplement').remove();

    $('.fullbanner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true
            }
        }]

    });




    $('.product-carousel .prateleira.vitrine ul').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }]

    });


  /*  $('.product-carousel-side .prateleira.vitrine ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }]

    });*/



    $('.cb-BannerMeio .row .col-12').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }]

    });

    $('.cb-iconeMeio .row .col-12').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]

    });

   /* $('.cb-BannerFinal .row').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }]

    });*/
    $('#homeCardsCarousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]

    });





    $('#carouselbrands').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        }]

    });


    $('#novcategorias').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]

    });


    $('#maincats').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });



    $('#carouselpropostas').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });

    $('#carouseldeptos').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });




    $(".slick-prev.slick-arrow").html(`
<svg xmlns="http://www.w3.org/2000/svg" width="39.523" height="50.523" viewBox="0 0 39.523 50.523">
  <path fill="none" stroke="rgb(255,199,1)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M27.76157527 11.76157527l-16 14 16 13"/>
</svg>

`);
    $(".slick-next.slick-arrow").html(`
<svg xmlns="http://www.w3.org/2000/svg" width="39.523" height="50.523" viewBox="0 0 39.523 50.523">
  <path fill="none" stroke="rgb(255,199,1)" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="5" d="M11.7615601 38.76156629l16.00001574-13.99998203-15.9999854-13.00001797"/>
</svg>

`);

});