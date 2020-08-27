$(document).ready(function () {
    $('.search-desctop').hover(function () {
        $(this).toggleClass('is-active');
    });

    $('.catalog-show').click(function () {
        $('.catalog-list').toggleClass('is-active');
    });

    $('.burger').click(function () {
        $(this).toggleClass('is-active');
        $('.dropdownmenu').toggleClass('is-active');
    });

    var bannerSlider = new Swiper('.banner-slider', {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    var contSlider = new Swiper('.sale-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-sale',
            prevEl: '.swiper-button-prev-sale',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    var newsSlider = new Swiper('.news-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-news',
            prevEl: '.swiper-button-prev-news',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    var leadSlider = new Swiper('.lead-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-lead',
            prevEl: '.swiper-button-prev-lead',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1279: {
                slidesPerView: 4,
                spaceBetween: 20,
            }
        }
    });

    var complectSliderL = new Swiper('.csl', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-cl',
            prevEl: '.swiper-button-prev-cl',
        }
    });

    var complectSliderR = new Swiper('.csr', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-cr',
            prevEl: '.swiper-button-prev-cr',
        }
    });

});
