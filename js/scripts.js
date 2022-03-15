window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //manual slider
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.slider-btn');
    let currentSlide = 1;

    var manualNav = function (manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
            btns.forEach((btn) => {
                btn.classList.remove('active');
            })
        })
        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        })

    });

    //autoplay slider
    var repeat = function (activeClass) {
        let active = document.getElementsByClassName('active');
        let i = 1;

        var repeater = () => {
            setTimeout(function () {
                [...active].forEach((activeSlide) => {
                    activeSlide.classList.remove('active');
                })

                slides[i].classList.add('active');
                btns[i].classList.add('active');
                i++;

                if (slides.length == i) {
                    i = 0;
                }
                if (i > slides.length) {
                    return;
                }
                repeater();
            }, 5000);
        }
        repeater();
    }
    repeat();

    //swiper
    new Swiper(".swiper-container", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoPlay: {
            delay: 2500,
            pauseOnMouseEnter: true
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    })

});





