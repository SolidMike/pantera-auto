/**
 * 1.svg for everebody
 * 2.Fixed header
 * 3.Show and hide password
 * 4.fancybox modals & gallery
 * 5.Service-slider
 * 6.Brands-slider
 * 7.Reviews-slider
 * 8.Hero-slider
 * 9.Toggle text
 * 10.Custom sandwich with overlay
 * 11.Custom responsive menu
 * 12.Highlight active menu item
 * 13.Hide & show menu elements
 * 14.btn-up
 * 15.maskedInput
 * 16.parallax
 * 17.Aos init
 * 18.Accordion
 * 19.Examples-slider
 */

//1.svg for everebody
$(document).ready(function () {
    svg4everybody({});
});

//2.Fixed header
$(function () {
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector('.header').offsetHeight;
    const contentHeight = document.querySelector('.wrapper').offsetHeight;

    if ((contentHeight - headerHeight) > windowHeight) {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('.header').addClass('header_fixed');
            } else {
                $('.header').removeClass('header_fixed');
            }
        });
    }
});

//3.Show and hide password
/*function togglePass(event) {
    const target = event.target
    const passInput = target.nextElementSibling
    if (passInput.type === "password") {
        passInput.type = "text";
        target.classList.remove('is-active')
    } else {
        passInput.type = "password";
        target.classList.add('is-active')
    }
}*/

//4.fancybox modals & gallery
$(document).ready(function() {
    $(".modal-btn").fancybox();

    $('.fancybox').fancybox({})
})

// 5. Service-slider
const serviceSwiper = new Swiper('.js-service-slider-init', {
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },

    // If we need pagination
    pagination: {
        el: '.js-service-slider-pagination',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.js-service-slider-btn-next',
        prevEl: '.js-service-slider-btn-prev',
    },
})

// 6. Brands-slider
const brandsSwiper = new Swiper('.js-brands-slider-init', {
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1300: {
            slidesPerView: 6,
            spaceBetween: 30,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.js-brands-slider-btn-next',
        prevEl: '.js-brands-slider-btn-prev',
    },
})

// 7. Reviews-slider
const reviewsSwiper = new Swiper('.js-reviews-slider-init', {
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.js-reviews-slider-btn-next',
        prevEl: '.js-reviews-slider-btn-prev',
    },
})

// 8. Hero-slider
const heroSwiper = new Swiper('.js-hero-slider-init', {
    loop: true,
})

// 9. Toggle text
const toggleTextBtn = document.querySelector('.js-text-spoiler-toggle')
if (toggleTextBtn) {
    function toggleText() {
        const btnLabel = toggleTextBtn.getElementsByClassName('btn__label')
        const hiddenText = document.querySelector('.js-text-spoiler')
        toggleTextBtn.addEventListener('click', function () {
            hiddenText.classList.toggle('is-open')
            if (hiddenText.classList.contains('is-open')) {
                btnLabel[0].textContent = 'Скрыть'
            } else {
                btnLabel[0].textContent = 'Показать еще'
            }
        })
    }
    toggleText()
}

// 10.Custom sandwich with overlay
const sandwichToggle = function () {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    let sandwichElements = document.querySelectorAll('.js-sandwich-toggle');
    // Проходим циклом по всем эдементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс
    sandwichElements.forEach((item) => {
        item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
        let targetId = this.getAttribute('data-target-id'),
            targetClassToggle = this.getAttribute('data-target-class-toggle');
        this.classList.toggle('is-active');
        if (targetId && targetClassToggle) {
            document.getElementById(targetId).classList.toggle(targetClassToggle);
        }
        $(document).mouseup(function (e) {
            var container = $(".nav-mobile");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                document.querySelector('.js-sandwich-toggle').classList.remove('is-active');
                document.getElementById(targetId).classList.remove(targetClassToggle);
            }
        });
    }
};
sandwichToggle();

// 11.Custom responsive menu
$(window).on("load resize", function () {
    if (this.matchMedia("(max-width: 991px)").matches) {
        const menu = $('.menu')
        const menuLink = menu.find('a')

        menuLink.on('click', function(event) {
            event.preventDefault()
            if ($(this).parent().hasClass('is-active') && $(this).parent().children('.dropdown__menu').length > 0) {
                if ($(this).length && $(this).attr('href')) {
                    location.href = $(this).attr('href');
                }
            } else if ($(this).parent().children('.dropdown__menu').length === 0) {
                if ($(this).length && $(this).attr('href')) {
                    location.href = $(this).attr('href');
                }
            }
            $(this).closest('li').toggleClass('is-active')
        })
    }
})

// 12.Highlight active menu item
$(function () {
    $('nav ul li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).parents('li').addClass('is-active');
        }
    });
});

// 13.Hide & show menu elements
const navMobile = document.querySelector('.nav-mobile')
const navHeader = document.querySelector('.header__nav')
const btnHeader = document.querySelector('.header__btn')
const sandwich = document.querySelector('.sandwich')
const contactsHeader = document.querySelector('.header__contacts')
$(window).on("load resize", function () {
    if ($(window).width() <= 1170) {
        navMobile.appendChild(contactsHeader)

    } else {
        document.querySelector('.header__top-panel').prepend(contactsHeader)
    }
   if ($(window).width() <= 1100) {
        navMobile.appendChild(navHeader)
    } else {
        document.querySelector('.header__content').appendChild(navHeader)
    }
    if ($(window).width() <= 500) {
       navMobile.appendChild(btnHeader)
   } else {
       document.querySelector('.header__btns').insertBefore(btnHeader, sandwich)
   }
})

// 14.btn-up
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.js-top-btn').fadeIn(500);
        } else {
            $('.js-top-btn').fadeOut(500);
        }
    });
    if ($(this).scrollTop() != 0) {
        $('.js-top-btn').fadeIn();
    } else {
        $('.js-top-btn').fadeOut();
    }
    $('.js-top-btn').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});

// 15.maskedInput
$(function(){
    $('input[name="phone"]').mask("+7 (999) 999-99-99");
});

// 16.parallax
var parallaxInstance, scene = document.getElementById('scene');
null !== scene && (parallaxInstance = new Parallax(scene));

var parallaxInstance2, scene2 = document.getElementById('scene2');
null !== scene && (parallaxInstance2 = new Parallax(scene2, {limitY: 0}));

// 17.Aos init
AOS.init({
    duration: 1200,
    offset: 50,
    easing: 'ease-in-out-back',
    disable: 'phone',
});

// 18.accordion
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.js-accordion-toggle');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('is-active');

        if (!e.data.multiple) {
            $el.find('.accordion__inner').not($next).slideUp().parent().removeClass('is-active');
        }
    }

    var accordion = new Accordion($('.accordion'), false);
});

// 19. Examples-slider
const examplesSwiper = new Swiper('.js-examples-slider', {
    loop: false,

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        800: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.js-examples-slider-btn-next',
        prevEl: '.js-examples-slider-btn-prev',
    },
})