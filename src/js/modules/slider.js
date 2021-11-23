export default (function() {
    if ($(".review__slider").length) {
        $('.review__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            variableWidth: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 768,
                    // settings: 'unslick',
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 380,
                    // settings: 'unslick',
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
    }
}());