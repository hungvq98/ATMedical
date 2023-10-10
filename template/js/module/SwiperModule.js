// import SearchModule from './SearchModule.js'
export default function SwiperModule() {
    function functionSlider(element, customizeOption, typePagi) {
        const swiperSlider = document.querySelectorAll(element)
        if (swiperSlider) {
            swiperSlider.forEach(item => {
                const swiper = item.querySelector('.swiper')
                const pagi = item.querySelector('.swiper-pagination')
                const next = item.querySelector('.swiper-next')
                const prev = item.querySelector('.swiper-prev');
                if (!typePagi) {
                    typePagi = 'bullets'
                }
                var slide = new Swiper(swiper, {
                    watchSlidesProgress: true,
                    pagination: {
                        el: pagi,
                        type: typePagi,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: next,
                        prevEl: prev,
                    },
                    fadeEffect: {
                        crossFade: true
                    },
                    ...customizeOption,
                });
            })
        }
    }

    functionSlider('.element', {
        speed: 1200,
        autoplay: {
            delaY: 5000,
        },
        // slidesPerGroup: 2,
        initialSlide: 0,
        centeredSlides: false,
        loop: false,
        spaceBetween: 24,
        effect: "slide",
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                freeMode: true,
            },
            500: {
                slidesPerView: 2.2,

            },
            768: {
                slidesPerView: 3,

            },
            1200: {
                slidesPerView: 3,
            }
        },
    })

    // var swiperBlogMain = new Swiper(".blog-slider-main .swiper", {
    //     slidesPerView: "auto",
    //     spaceBetween: 0,
    //     effect: "fade",
    //     pagination: {
    //         el: ".blog-slider-main .swiper-pagination",
    //         clickable: true,
    //     },
    // });
    // var swiperBlogThumb = new Swiper(".blog-slider-thumb .swiper", {
    //     slidesPerView: "auto",
    //     spaceBetween: 0,
    //     effect: "fade",
    //     navigation: {
    //         prevEl: ".blog-slider-thumb .swiper-prev",
    //         nextEl: ".blog-slider-thumb .swiper-next",
    //     }
    // });

    // swiperBlogMain.controller.control = swiperBlogThumb;
    // swiperBlogThumb.controller.control = swiperBlogMain;

    functionSlider('.prod-slider', {
        speed: 1200,
        autoplay: {
            delaY: 5000,
        },
        initialSlide: 0,
        centeredSlides: false,
        loop: false,
        spaceBetween: 0,
        effect: "slide",
        slidesPerView: 'auto',
    })


    // home
    var swiperHomeThumb = new Swiper(".homes-bn-thumb .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "slide",

    });
    var swiperHomeTop = new Swiper(".homes-bn-top .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "fade",
        thumbs: {
            swiper: swiperHomeThumb,
        },
        pagination: {
            el: ".homes-bn-top .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    functionSlider('.homes-slider-clip', {
        speed: 1200,
        autoplay: {
            delaY: 5000,
        },
        initialSlide: 1,
        centeredSlides: false,
        loop: false,
        spaceBetween: 0,
        effect: "slide",
        slidesPerView: 'auto',
    })


    // home why
    var swiperWhyThumb = new Swiper(".homes-why-mid .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "slide",
        direction: "vertical",
        pagination: {
            el: ".homes-why-mid .swiper-pagination",
            clickable: true,
        },
    });
    var swiperWhyMain = new Swiper(".homes-why-left .swiper", {
        speed: 1200,
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "fade",
        navigation: {
            prevEl: ".prev",
            nextEl: ".next",
        },
        thumbs: {
            swiper: swiperWhyThumb,
        }
    });

    // home why
    var prdtThumb = new Swiper(".prdt-slider-thumb .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "slide",
        pagination: {
            el: ".prdt-slider-thumb .swiper-pagination",
            clickable: true,
        },
    });
    var prdtMain = new Swiper(".prdt-slider-main .swiper", {
        speed: 400,
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "slide",
        thumbs: {
            swiper: prdtThumb,
        }
    });
}