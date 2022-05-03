docReady(function() {

    //$(".helperComplement").remove();


    $('.product-carousel .prateleira.vitrine ul').find('.helperComplement').remove();
    $('.product-carousel-last .prateleira.vitrine ul').find('.helperComplement').remove();

    $('.segmentos ul').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true
            }
        }]

    });



    $('#carouselbannerprod').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });

    $('.AreaBlog ul').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });
    $('.NossasTintas ul').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay: false,
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
    $('.ColecaoRelampago__dacar ul').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll:2,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });

    $('.Colecaolancamento ul').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });

    $(".slick-prev.slick-arrow").html(`
    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_319_18)">
    <ellipse cx="28.5" cy="24.5" rx="24.5" ry="24.5" transform="rotate(-180 28.5 24.5)" fill="white"/>
    </g>
    <path d="M34 12L22 24.5L34 37" stroke="#ED1B34" stroke-width="3"/>
    <defs>
    <filter id="filter0_d_319_18" x="0" y="0" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_319_18"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_319_18" result="shape"/>
    </filter>
    </defs>
    </svg>
    

`);
    $(".slick-next.slick-arrow").html(`
    <svg width="58" height="57" viewBox="0 0 58 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_320_19)">
    <ellipse cx="29.4102" cy="24.5" rx="24.5" ry="24.5" fill="white"/>
    </g>
    <path d="M23.9102 37L35.9102 24.5L23.9102 12" stroke="#ED1B34" stroke-width="3"/>
    <defs>
    <filter id="filter0_d_320_19" x="0.910156" y="0" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_320_19"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_320_19" result="shape"/>
    </filter>
    </defs>
    </svg>
    

`);

});