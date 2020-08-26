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
        spaceBetween: 0,
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

});
