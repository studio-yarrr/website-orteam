function isMobile() {
    return window.innerWidth <= 768; // Измените значение, если нужно другое разрешение
}

// Инициализация swiper только на мобильных устройствах
if (isMobile()) {
    const swiper = new Swiper('.list__swiper', {
        slidesPerView: 1.5,
        spaceBetween: 50, // Отступ между слайдами
        centeredSlides: true, // Второй слайд будет по центру
        initialSlide: 1, // Начальный слайд (второй)
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
