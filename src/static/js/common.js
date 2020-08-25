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

});
