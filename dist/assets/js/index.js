
document.addEventListener("DOMContentLoaded", function (event) {
    Fancybox.bind('[data-fancybox]', {
        // Ваши настройки
        hideScrollbar: false
    });


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


  function addMask() {
    [].forEach.call(
        document.querySelectorAll('input.custom-input[type="tel"]'),
        function (input) {
          let keyCode;
          function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___-____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                  return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = new_value.indexOf("_");
            if (i != -1) {
              i < 5 && (i = 3);
              new_value = new_value.slice(0, i);
            }
            let reg = matrix
                .substr(0, this.value.length)
                .replace(/_+/g, function (a) {
                  return "\\d{1," + a.length + "}";
                })
                .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (
                !reg.test(this.value) ||
                this.value.length < 5 ||
                (keyCode > 47 && keyCode < 58)
            )
              this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) {
              this.value = "";
              this.classList.remove("havetext");
            }
          }

          input.addEventListener("input", mask, false);
          input.addEventListener("focus", mask, false);
          input.addEventListener("blur", mask, false);
          input.addEventListener("keydown", mask, false);
        }
    );
  }
  addMask();
// copy text

    const reviewTexts = document.querySelectorAll('.reviews__item-text');
    const reviewPopups = document.querySelectorAll('.review-popup');

    reviewPopups.forEach(function(popup, index) {
        popup.innerHTML = reviewTexts[index].innerHTML;
    });


});