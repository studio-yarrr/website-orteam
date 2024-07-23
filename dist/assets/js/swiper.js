function isMobile() {
    return window.innerWidth <= 768;
}

if (isMobile()) {
    const swiper = new Swiper('.list__swiper', {
        slidesPerView: 1.5,
        spaceBetween: 50,
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const swiper3 = new Swiper('.details__swiper', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

const slider2 = new Swiper('.team__swiper', {
    spaceBetween: 20,
    speed: 800,
    slidesPerView: 2,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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