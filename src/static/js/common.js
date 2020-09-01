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

    $(".more-btn").click(function () {
        var $this = $(this);
        var elem = $(this).next().slideToggle();
        $this.toggleClass("is-active");
    });

    $('.catalog-list__links-top>li').hover(function () {
        $('.catalog-list__hidden').slideUp();
        $(".more-btn").removeClass('is-active');
    });

    $(".dropdownmenu__list>li").click(function (e) {
        console.log(e.target);
        if (e.target.tagName == 'LI') {
            var $this = $(this);
            var elem = $(this).find('.dropdownmenu__inner');

            if (!$this.hasClass("is-active")) {
                $(".dropdownmenu__inner").slideUp();
                $(".dropdownmenu__list>li").removeClass("is-active");
            }

            $this.toggleClass("is-active");
            elem.slideToggle();
        }
    });

    function showStickyMenu() {
        $(this).toggleClass('is-active');
        $('.dropmenu-main').fadeToggle();
    }

    var flag = true;

    function stickyMenu(scrollTopEl, elPosition, elHeight) {
        if (scrollTopEl >= elPosition.top) {
            $('.header').css('height', elHeight + 'px');
            $('.header__bottom-wrap').addClass('stickytop');
            if (flag) {
                flag = false;
                $('.dropmenu-main').fadeOut();
            }
            $('.dropdownmenu').addClass('is-sticky');
        }
        else {
            $('.header__bottom-wrap').removeClass('stickytop');
            $('.header').removeAttr('style');
            $('.dropdownmenu').removeClass('is-sticky');
            flag = true;
            $('.dropmenu-main').fadeIn();
            $('.catalog-show').removeClass('is-active');
        }
    }

    $(function () {
        var headerHeight = $(".header").height();
        var position = $(".header__bottom").offset();
        var windwoTop = $(window).scrollTop();

        stickyMenu(windwoTop, position, headerHeight);

        if (windwoTop >= position.top) {
            var el = document.querySelector('.catalog-show');
            el.addEventListener('click', showStickyMenu);
        }

        $(window).scroll(function () {
            var el = document.querySelector('.catalog-show');
            var scrollTopDinamic = $(this).scrollTop();
            stickyMenu(scrollTopDinamic, position, headerHeight);
            if (scrollTopDinamic >= position.top) {
                el.addEventListener('click', showStickyMenu);
            } else {
                el.removeEventListener('click', showStickyMenu);
            }
        });
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
