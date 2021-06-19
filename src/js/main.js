$(function(){
    $('.about__slider').slick({
        prevArrow: '<button class="about__slider-btn about__slider-btn-left"><svg class="about__left-arrow" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"></svg></button>',
        nextArrow: '<button class="about__slider-btn about__slider-btn-right"><svg class="about__right-arrow" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"></svg></button>',
        infinite: false,
        asNavFor: ".about__text-slider"
    });

    $('.about__text-slider').slick({
        asNavFor: '.about__slider',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        infinite: !1
      });

    $('.accordion__item-title').on('click', function(){
        $('.accordion__item').removeClass('accordion__item--active');
        $(this).parent().addClass('accordion__item--active');
    });

    $('#fullpage').fullpage({
		//options here
		autoScrolling: true,
        scrollHorizontally: true,
        sectionSelector: '.section',
        scrollOverflow: true, //добавили ключевую строчку
        menu: '#header__nav',
        anchors: ['intro', 'about', 'advantages', 'specifications', 'questions', 'contacts'],
    });

    $('.menu__btn').on ('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__link').on ('click', function(){
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });
});