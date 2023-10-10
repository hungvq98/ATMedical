// import SearchModule from './SearchModule.js'
export default function SwiperModule() {
  function functionSlider(element, customizeOption, typePagi) {
    const swiperSlider = document.querySelectorAll(element);
    if (swiperSlider) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");
        if (!typePagi) {
          typePagi = "bullets";
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
            crossFade: true,
          },
          ...customizeOption,
        });
      });
    }
  }

  functionSlider(".element", {
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
      },
    },
  });

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

  functionSlider(".prod-slider", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
    slidesPerView: "auto",
  });

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

  functionSlider(".homes-slider-clip", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    initialSlide: 1,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
    slidesPerView: "auto",
  });

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
    },
  });
  const abc_sw = new Swiper(".abc-sw .swiper", {
    slidesPerView: 4,
    grid: {
      rows: 2,
    },
    slidesPerColumn: 2,
    // navigation: {
    //   nextEl: ".gallery-slider .button-slide-next",
    //   prevEl: ".gallery-slider .button-slide-prev",
    // },
    pagination: {
      el: ".hcate-sw .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      0: {
        spaceBetween: 8,
      },
      550: {
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
        effect: "slide",}
    }})


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
            prevEl: ".homes-why-left .prev",
            nextEl: ".homes-why-left .next",
        },
        thumbs: {
            swiper: swiperWhyThumb,
        }
    });

    // home 
    var swiperHomeProdTh = new Swiper(".left-slider .swiper", {
        speed: 1200,
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "slide",
        allowTouchMove: false,
    });
    const homeProdprogress = document.querySelector('.homes-nb .progress-line')
    var swiperHomeProd = new Swiper(".right-slider .swiper", {
        speed: 1200,
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "fade",
        navigation: {
            prevEl: ".homes-nb .swiper-prev",
            nextEl: ".homes-nb .swiper-next",
        },
        thumbs: {
            swiper: swiperHomeProdTh,
        },
        on: {
            init: function (e) {
                const totalSlide = document.querySelectorAll(".homes-nb .right .swiper-slide")
                let progress = 100 / (totalSlide.length);
                let percent = (e.realIndex + 1) * progress;
                homeProdprogress.style = `--progress: ${percent}%`
            },
            slideChange: function (e) {
                const totalSlide = document.querySelectorAll(".homes-nb .right .swiper-slide")
                let progress = 100 / (totalSlide.length);
                let percent = (e.realIndex + 1) * progress;
                homeProdprogress.style = `--progress: ${percent}%`
            },
        }
    });


    // home vid
    var swiperVidThumb = new Swiper(".homes-vid-thumb .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "slide",
        allowTouchMove:false,
    });
    var swiperVidMain = new Swiper(".homes-vid-main .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        effect: "slide",
        thumbs: {
            swiper: swiperVidThumb,
        }
    });


    // home customer
    var swiperCusTh = new Swiper(".homes-cus-verti .swiper", {
        slidesPerView: "auto",
        spaceBetween: 0,
        speed: 1200,
        effect: "slide",
        direction: "vertical",
        allowTouchMove: false,
        pagination: {
            el: ".homes-cus-verti .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                direction: "horizontal",
                allowTouchMove: false,
            },
            681: {
                direction: "vertical",
            }
        }
    });
    const homesCusPr = document.querySelector('.homes-cus-progress .progress')
    let xOfset = -30;
    let yOfset = 30;
    var quality_sw = new Swiper(".homes-cus-cover .swiper", {
        effect: "creative",
        // slidesPerView: 1,
        // centerInsufficientSlides: true,
        // initialSlide: 3,
        // loopAdditionalSlides: 1,
        // allowTouchMove: false,
        pagination: {
            el: ".homes-cus-cover .swiper-pagination",
            type: "fraction",
        },
        loop: false,
        centeredSlides: true,
        speed: 1200,
        slidesPerView: "auto",
        creativeEffect: {
            limitProgress: 4,
            perspective: true,
            prev: {
                opacity: 0,
                translate: [0, "20%", 1],
            },
            next: {
                translate: [xOfset, yOfset, -1],
            },
        },
        breakpoints: {
            0: {
                creativeEffect: {
                    limitProgress: 1,
                    perspective: false,
                    prev: {
                        opacity: 0,
                        translate: ["-100%", 0, 0],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                },
            },
            900: {
                creativeEffect: {
                    limitProgress: 4,
                    perspective: true,
                    prev: {
                        opacity: 0,
                        translate: [0, "20%", 1],
                    },
                    next: {
                        translate: [xOfset, yOfset, -1],
                    },
                },
            }
        },
        thumbs: {
            swiper: swiperCusTh
        },
        navigation: {
            nextEl: ".homes-cus-cover .swiper-next",
            prevEl: ".homes-cus-cover .swiper-prev",
        },
        on: {
            init: function (e) {
                const totalSlide = document.querySelectorAll(".homes-cus-cover .swiper-slide")
                const total = document.querySelector('.homes-cus-progress .total')
                if (totalSlide.length < 10) {
                    total.innerHTML = '0' + totalSlide.length
                } else {
                    total.innerHTML = totalSlide.length
                }

                // 

                let progress = 100 / (totalSlide.length);
                let percent = (e.realIndex + 1) * progress;
                homesCusPr.style = `--progress: ${percent}%`
            },
            slideChange: function (e) {
                const totalSlide = document.querySelectorAll(".homes-cus-cover .swiper-slide")
                let progress = 100 / (totalSlide.length);
                let percent = (e.realIndex + 1) * progress;
                homesCusPr.style = `--progress: ${percent}%`
            },
        }
    });

    // 

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

