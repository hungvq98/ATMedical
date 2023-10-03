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

    var swiperBlogMain = new Swiper(".blog-slider-main .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "fade",
        pagination: {
            el: ".blog-slider-main .swiper-pagination",
            clickable: true,
        },
    });
    var swiperBlogThumb = new Swiper(".blog-slider-thumb .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "fade",
        navigation: {
            prevEl: ".blog-slider-thumb .swiper-prev",
            nextEl: ".blog-slider-thumb .swiper-next",
        }
    });

    swiperBlogMain.controller.control = swiperBlogThumb;
    swiperBlogThumb.controller.control = swiperBlogMain;


    functionSlider('.blog-dt-slider', {
        speed: 1200,
        autoplay: {
            delaY: 5000,
        },
        // slidesPerGroup: 2,
        initialSlide: 0,
        centeredSlides: false,
        loop: false,
        spaceBetween: 0,
        effect: "slide",
        slidesPerView: "auto",
    })



    var swiperProdThumb = new Swiper(".prod-slider-thumb .swiper", {
        slidesPerView: "auto",
        spaceBetween: 10,
        direction: "vertical",
        breakpoints: {
            0:{
                direction: "horizontal",
            },
            901: {
                direction: "vertical",
            }
        }
    });
    var swiperProdMain = new Swiper(".prod-slider-main .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
            prevEl: ".prod-slider-thumb .swiper-prev",
            nextEl: ".prod-slider-thumb .swiper-next",
        },
        thumbs: {
            swiper: swiperProdThumb,
        }
    });


    functionSlider('.prod-like', {
        speed: 1200,
        autoplay: {
            delaY: 5000,
        },
        // slidesPerGroup: 2,
        initialSlide: 0,
        centeredSlides: false,
        loop: false,
        spaceBetween: 0,
        effect: "slide",
        slidesPerView:"auto",
    })


    const swColor = document.querySelectorAll(".homes-bn");
    swColor.forEach(items => {
        const swiperColor = items.querySelector('.swiper')
        const progressPagi = items.querySelector('.progress')
        const prev = items.querySelector('.swiper-prev')
        const next = items.querySelector('.swiper-next')

        var swiperColors = new Swiper(swiperColor, {
            grabCursor: true,
            navigation: {
                prevEl:prev,
                nextEl:next,
            },
            on: {
                init: function (e) {
                    const totalSlide = swiperColor.querySelectorAll(".swiper-slide")

                    let progress = 100 / (totalSlide.length);
                    let percent = (e.realIndex + 1) * progress;
                    progressPagi.style = `--progress: ${percent}%`
                },
                slideChange: function (e) {
                    const totalSlide = swiperColor.querySelectorAll(".swiper-slide")
                    let progress = 100 / (totalSlide.length);
                    let percent = (e.realIndex + 1) * progress;
                    progressPagi.style = `--progress: ${percent}%`
                },
            }
        });
    })


}