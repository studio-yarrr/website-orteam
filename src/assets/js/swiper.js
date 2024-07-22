function isMobile() {
    return window.innerWidth <= 768; // Измените значение, если нужно другое разрешение
}

// Инициализация swiper только на мобильных устройствах
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
