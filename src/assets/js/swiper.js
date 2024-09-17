function isMobile() {
    return window.innerWidth <= 768;
}

if (isMobile()) {
    const swiperBanner =  new Swiper('.swiper-container', {
        slidesPerView: 1.4,
        spaceBetween: 20,
        pagination: {
            el: '.banner-pagination',
            clickable: true,
        },
    })

    const swiper = new Swiper('.list__swiper', {
        slidesPerView: 1.5,
        centeredSlides: true,
        initialSlide: 1,
        spaceBetween: 8,

        pagination: {
            el: '.list-pagination',
            clickable: true,
        },
    });

    const swiper3 = new Swiper('.details__swiper', {
        slidesPerView: 1.15,
        spaceBetween: 20,
        pagination: {
            el: '.details-pagination',
            clickable: true,
        },
    });

    const slider7 = new Swiper('.price-swiper', {
        spaceBetween: 20,
        speed: 800,
        slidesPerView: 4,
        pagination: {
            el: '.price-pagination',
            clickable: true,
        },

        breakpoints: {

            320: {
                slidesPerView: 1.15,
            },

            768: {
                slidesPerView: 2.,
            },

            1024: {
                slidesPerView: 4,
            }

        },
    })
}

const slider2 = new Swiper('.team__swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2,

    navigation: {
        nextEl: '.team-button-next',
        prevEl: '.team-button-prev',
    },

    pagination: {
        el: '.team-pagination',
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1.15,
        },

        768: {
            slidesPerView: 1.25,
        },

        1024: {
            slidesPerView: 2,
        }

    },
})

const slider4 = new Swiper('.process__swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2,

    navigation: {
        nextEl: '.process-button-next',
        prevEl: '.process-button-prev',
    },

    pagination: {
        el: '.process-pagination',
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1.15,
        },

        768: {
            slidesPerView: 1.7,
        },

        1024: {
            slidesPerView: 2,
        }

    },
})

const slider5 = new Swiper('.reviews__swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 4,

    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
    },

    pagination: {
        el: '.reviews-pagination',
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1.20,
        },

        768: {
            slidesPerView: 3,
        },

        1024: {
            slidesPerView: 4,
        }

    },
})

const slider6 = new Swiper('.braces__swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2.5,

    navigation: {
        nextEl: '.braces-button-next',
        prevEl: '.braces-button-prev',
    },

    pagination: {
        el: '.braces-pagination',
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1.15,
        },

        768: {
            slidesPerView: 2.5,
        },

        1024: {
            slidesPerView: 2.5,
        }

    },
})

const slider8 = new Swiper('.articles-swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2.5,

    navigation: {
        nextEl: '.articles-button-next',
        prevEl: '.articles-button-prev',
    },

    pagination: {
        el: '.articles-pagination',
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1.15,
        },

        768: {
            slidesPerView: 2.5,
        },

        1024: {
            slidesPerView: 3.5,
        }

    },
})

const slider9 = new Swiper('.video-swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2.5,

    navigation: {
        nextEl: '.video-button-next',
        prevEl: '.video-button-prev',
    },

    pagination: {
        el: '.video-pagination',
        clickable: true,
    },

    breakpoints: {

        320: {
            slidesPerView: 1.15,
        },

        768: {
            slidesPerView: 2.5,
        },

        1024: {
            slidesPerView: 3.5,
        }

    },
})

const swiper10 = new Swiper('.doc__swiper', {
    slidesPerView: 1.15,
    spaceBetween: 20,
    centeredSlides: true,
    initialSlide: 1,
    pagination: {
        el: '.doc-pagination',
        clickable: true,
    },
});

const slider11 = new Swiper('.doctor-certificate__swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2.45,

    navigation: {
        nextEl: '.certificate-button-next',
        prevEl: '.certificate-button-prev',
    },

    breakpoints: {

        320: {
            slidesPerView: 1.15,
        },

        768: {
            slidesPerView: 2.5,
        },

        1024: {
            slidesPerView: 2.45,
        }

    },
})

const slider12 = new Swiper('.case-swiper', {
    spaceBetween: 40,
    speed: 800,
    navigation: {
        nextEl: '.case-button-next',
        prevEl: '.case-button-prev',
    },
    pagination: {
        el: '.case-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.25,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },
    centeredSlides: true,
    roundLengths: true,
    initialSlide: 1,
});

const slider13 = new Swiper('.about__swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2.45,

    navigation: {
        nextEl: '.about-button-next',
        prevEl: '.about-button-prev',
    },

    breakpoints: {

        320: {
            slidesPerView: 1.2,
        },

        768: {
            slidesPerView: 3,
        },

        1024: {
            slidesPerView: 2.45,
        }

    },
})

const slider14 = new Swiper('.cost-swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.cost-button-next',
        prevEl: '.cost-button-prev',
    },
    pagination: {
        el: '.cost-pagination',
        clickable: true,
    },
})

const alignersSwiper = document.querySelector('.aligners-swiper');
    if(alignersSwiper) {
        const slider15 = new Swiper('.aligners-swiper', {
            spaceBetween: 20,
            speed: 800,
            slidesPerView: 1,
            loop: true,
            pagination: {
                el: '.aligners-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 1,
                }
            },
        });

        function updateSliderParams() {
            const isLargeScreen = window.innerWidth >= 1280;

            slider15.params.loop = isLargeScreen;
            if (isLargeScreen) {
                slider15.params.autoplay = {
                    delay: 3000,
                    disableOnInteraction: false,
                };
                slider15.autoplay.start();
            } else {
                slider15.params.autoplay = false;
                slider15.autoplay.stop();
            }

            slider15.update();
        }

        updateSliderParams();

        window.addEventListener('resize', updateSliderParams);

    }

const slider16 = new Swiper('.implantation-banner__slider', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 1.45,
    loop: true,
    pagination: {
        el: '.implantation-pagination',
        clickable: true,
    },
    breakpoints: {

        320: {
            slidesPerView: 1.45,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        }
    },
})

const slider17 = new Swiper('.implantation-num__slider', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2,
    loop: true,
    pagination: {
        el: '.implantation__num-pagination',
        clickable: true,
    },
    breakpoints: {

        320: {
            slidesPerView: 1.35,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        }
    },
})

const slider18 = new Swiper('.reason-operation__swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView:4,
    loop: true,
    pagination: {
        el: '.reason-operation__pagination',
        clickable: true,
    },
    breakpoints: {

        320: {
            slidesPerView: 1.35,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        }
    },
})