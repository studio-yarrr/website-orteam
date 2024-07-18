
document.addEventListener("DOMContentLoaded", function (event) {
  // Fancybox.bind("[data-fancybox]", {
  //   // Your custom options
  // });

  const headerBurger = document.querySelector('.header__burger');
  const menuWrapper = document.querySelector('.menu__wrapper');
  const menuContent = document.querySelector('.menu__content');
  const close = document.querySelectorAll('.close')
  headerBurger.addEventListener("click", item => {
    menuWrapper.classList.add('active')
    menuContent.classList.add('active')
  })

  menuWrapper.addEventListener('click', (event) => {
    if (event.target === menuWrapper) {
      menuWrapper.classList.remove('active');
      menuContent.classList.remove('active');
    }
  });

  close.forEach((button) => {
    button.addEventListener('click', () => {
      menuWrapper.classList.remove('active');
      menuContent.classList.remove('active');
    });
  });

});