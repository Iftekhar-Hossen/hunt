$(function () {

    // preloader
    $(window).on("load", function () {
        $(".preloader").delay(100).fadeOut(500);
    });

    $('.bannerSlider').slick({
        prevArrow: ".bannerPrev",
        nextArrow: ".bannerNext",
        fade: true,
        autoplay: true,
        speed: 700
    });

    $('.portSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.slideItems').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: ".scrollDown",
        nextArrow: ".scrollUp",
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    });


    $(".testiSliderMain").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".clinetsImage",
    });
    $(".clinetsImage").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".testiSliderMain",
        dots: false,
        arrows: true,
        prevArrow: '.prev',
        nextArrow: '.next',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
        responsive: [{
                breakpoint: 769,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                },
            }
        ],
    });


    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    // brand slider
    $('.brandMain').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 300,
        centerMode: true,
        centerPadding: '0px',
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    centerMode: true,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    slidesToScroll: 1,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    slidesToScroll: 1,
                    centerPadding: '15px',
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    slidesToScroll: 1,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '60px',
                }
            },
        ]
    });

    // lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        positionFromTop: 100,
    })

    // back to top
    $("#backToTop").hide();
    $("#backToTop").on("click", function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            10
        );
    });
    smartScroll.init({
        speed: 500,
        offset: 80

    })

    $(window).scroll(function () {
        var scrollAmount = $(window).scrollTop()
        if (scrollAmount > 100) {
            $("#backToTop").show()
            $(".navbar").addClass("stickyNav")
        } else {
            $("#backToTop").hide()
            $(".navbar").removeClass("stickyNav")
        }
    })



    AOS.init({
        delay: 5, // values from 0 to 3000, with step 50ms
        duration: 2000, // 
    });

})