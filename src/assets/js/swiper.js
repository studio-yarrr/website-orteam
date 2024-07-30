function isMobile() {
    return window.innerWidth <= 768;
}

if (isMobile()) {
    const swiperBanner =  new Swiper('.swiper-container', {
        slidesPerView: 1.5,
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
        slidesPerView: 1.5,
        spaceBetween: 20,
        // pagination: {
        //     el: '.details-pagination',
        //     clickable: true,
        // },
    });

    const slider7 = new Swiper('.price-swiper', {
        spaceBetween: 20,
        speed: 800,
        slidesPerView: 4,

        // breakpoints: {
        //
        //     320: {
        //         slidesPerView: 1.5,
        //     },
        //
        //     768: {
        //         slidesPerView: 2.5,
        //     },
        //
        //     1024: {
        //         slidesPerView: 2.5,
        //     }
        //
        // },
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
            slidesPerView: 1.5,
        },

        768: {
            slidesPerView: 2,
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
            slidesPerView: 1.5,
        },

        768: {
            slidesPerView: 2,
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

    breakpoints: {

        320: {
            slidesPerView: 1.5,
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

    breakpoints: {

        320: {
            slidesPerView: 1.5,
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

    breakpoints: {

        320: {
            slidesPerView: 1.5,
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

    breakpoints: {

        320: {
            slidesPerView: 1.5,
        },

        768: {
            slidesPerView: 2.5,
        },

        1024: {
            slidesPerView: 3.5,
        }

    },
})



