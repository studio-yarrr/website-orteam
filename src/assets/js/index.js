
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


    //accordion
    const titles = document.querySelectorAll('.accordion__title');
    const contents = document.querySelectorAll('.accordion-content');
    const svg = document.querySelectorAll('.questions__item .questions__svg svg');

    titles.forEach(item => item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
            svg.forEach(element => element.classList.remove('active'));
        } else {
            contents.forEach(element => {
                element.classList.remove('active');
                element.style.maxHeight = 0;
            });

            titles.forEach(element => element.classList.remove('active'));

            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
            svg.forEach(element => element.classList.remove('active'));
            svg.forEach((element, index) => {
                if (index === Array.from(contents).indexOf(activeContent)) {
                    element.classList.add('active');
                }
            });

        }
    }));

    //map
    ymaps.ready(function () {

        let myMap = new ymaps.Map("YMapsID", {
            center: [60.012085, 30.328723],
            zoom: 11,
        });


        let myPlacemark = new ymaps.Placemark([60.012085, 30.328723], {
        });
        myMap.behaviors.disable('scrollZoom');


        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            myMap.behaviors.disable('drag');
        }

        myMap.geoObjects.add(myPlacemark);

    });

    const contacts = document.querySelector('.contacts');
    const requisites = document.querySelector('.requisites');
    const doc = document.querySelector('.doc');
    if (contacts) {
        document.querySelector('.footer__top').style.display = 'none';
        document.querySelector('.footer h2').style.display = 'none';
    }

    if (requisites) {
        document.querySelector('.footer__top').style.display = 'none';
        document.querySelector('.footer h2').style.display = 'none';
    }

    if (doc) {
        document.querySelector('.footer__top').style.display = 'none';
        document.querySelector('.footer h2').style.display = 'none';
    }

    const listDoctors = document.getElementById('listDoctors');
    const selectDoctors = document.getElementById('selectDoctors');
    const ulList = document.querySelectorAll('.doctors__item');
    const doctorsCard = document.querySelectorAll('.doctors__content-item');

    ulList.forEach(li => {
        const option = document.createElement('option');
        option.value = li.id;
        option.textContent = li.textContent;
        selectDoctors.appendChild(option);
    });

    function cardFilter(event) {
        let e = event.target;
        if (e.classList.contains('doctors__item') || e.tagName === 'SELECT') {
            const selectedValue = e.value || e.getAttribute('id');

            ulList.forEach(elem => {
                elem.classList.remove('active');
            });
            ulList.forEach(elem => {
                if (elem.id === selectedValue) {
                    elem.classList.add('active');
                }
            });

            doctorsCard.forEach(card => {
                card.style.display = 'none';
                const cardCategory = card.getAttribute('data-item');
                card.style.display = cardCategory === selectedValue || selectedValue === 'all'
                    ? 'flex'
                    : 'none';
            });
        }
    }

    if(listDoctors || selectDoctors) {
        listDoctors.addEventListener('click', cardFilter);
        selectDoctors.addEventListener('change', cardFilter);
    }



    const onList = document.querySelector('.doctor-qualification__linc');
    const list = document.querySelector('.doctor-qualification__list');

   if(onList) {
       onList.addEventListener('click', () => {
           if (list.classList.contains('active')) {
               list.classList.remove('active');
               onList.textContent = 'Развернуть';
           } else {
               list.classList.add('active');
               onList.textContent = 'Свернуть';
           }
       });
   }


    const portfolioList = document.querySelector('.portfolio__list');
    const portfolioContent = document.querySelectorAll('.portfolio__content');
    const portfolioItem = document.querySelectorAll('.portfolio__item');
    const portfolioButton = document.querySelector('.portfolio__button');

    if(portfolioList || portfolioContent ) {
        portfolioList.addEventListener('click', (event) => {
            const e = event.target;
            if(e.classList.contains('portfolio__item')) {
                portfolioItem.forEach( item => {
                    item.classList.remove('active')
                })
                e.classList.add("active")

                portfolioContent.forEach( item => {
                    item.classList.remove('active')
                })
                const index = Array.from(portfolioItem).indexOf(e);
                portfolioContent[index].classList.add('active');
            }
        })

    }
});