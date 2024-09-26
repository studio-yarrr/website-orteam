
document.addEventListener("DOMContentLoaded", function (event) {
    Fancybox.bind('[data-fancybox]', {
        // Ваши настройки
        hideScrollbar: false
    });

    // copy text

    const reviewTexts = document.querySelectorAll('.reviews__item-text1');

    if(reviewTexts) {
        const reviewPopups = document.querySelectorAll('.review-popup1');

        reviewPopups.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts[index].innerHTML;
        });
    }

    const reviewTexts2 = document.querySelectorAll('.reviews__item-text2');

    if(reviewTexts2) {
        const reviewPopups2 = document.querySelectorAll('.review-popup2');

        reviewPopups2.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts2[index].innerHTML;
        });
    }

    const reviewTexts3 = document.querySelectorAll('.reviews__item-text3');


    if(reviewTexts3) {
        const reviewPopups3 = document.querySelectorAll('.review-popup3');

        reviewPopups3.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts3[index].innerHTML;
        });
    }

    const reviewTexts4 = document.querySelectorAll('.reviews__item-text4');


    if(reviewTexts4) {
        const reviewPopups4 = document.querySelectorAll('.review-popup4');

        reviewPopups4.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts4[index].innerHTML;
        });
    }


    const reviewTexts5 = document.querySelectorAll('.reviews__item-text5');


    if(reviewTexts5) {
        const reviewPopups5 = document.querySelectorAll('.review-popup5');

        reviewPopups5.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts5[index].innerHTML;
        });
    }

    const reviewTexts6 = document.querySelectorAll('.reviews__item-text6');


    if(reviewTexts6) {
        const reviewPopups6 = document.querySelectorAll('.review-popup6');

        reviewPopups6.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts6[index].innerHTML;
        });
    }

    const reviewTexts7 = document.querySelectorAll('.reviews__item-text7');


    if(reviewTexts7) {
        const reviewPopups7 = document.querySelectorAll('.review-popup7');

        reviewPopups7.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts7[index].innerHTML;
        });
    }

    const reviewTexts8 = document.querySelectorAll('.reviews__item-text8');

    if(reviewTexts8) {
        const reviewPopups8 = document.querySelectorAll('.review-popup8');

        reviewPopups8.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts8[index].innerHTML;
        });
    }

    const reviewTexts9 = document.querySelectorAll('.reviews__item-text9');


    if(reviewTexts9) {
        const reviewPopups9 = document.querySelectorAll('.review-popup9');

        reviewPopups9.forEach(function(popup, index) {
            popup.innerHTML = reviewTexts9[index].innerHTML;
        });
    }


    const caseTextBlock = document.querySelector('.case2__inf-bottom');
    if(caseTextBlock) {
        const casePopup = document.getElementById('case-popup');
        casePopup.textContent = caseTextBlock.textContent;
    }

    const headerBurger = document.querySelector('.header__burger');
    const menuWrapper = document.querySelector('.menu__wrapper');
    const menuContent = document.querySelector('.menu__content');
    const close = document.querySelectorAll('.close');
    const recordWrapper = document.querySelectorAll('.record__wrapper');
    const successModalWrapper = document.querySelector('.success-modal__wrapper');

    function showSuccesseModal() {
        successModalWrapper.classList.add('active');
    }

    headerBurger.addEventListener("click", () => {
        menuWrapper.classList.add('active');

        setTimeout(() => {
            menuContent.classList.add('active');
        }, 50);
    });

    menuWrapper.addEventListener('click', (event) => {
        if (event.target === menuWrapper) {
            closeMenu();
        }
    });

    function closeMenu() {
        menuContent.classList.remove('active');

        setTimeout(() => {
            menuWrapper.classList.remove('active');
        }, 300);
    }

    close.forEach((button) => {
        button.addEventListener('click', closeAll);
    });

    function closeAll() {
        menuContent.classList.remove('active');
        successModalWrapper.classList.remove('active');

        setTimeout(() => {
            menuWrapper.classList.remove('active');
            recordWrapper.forEach(wrapper => {
                wrapper.classList.remove('active');
            });
        }, 300);
    }

    const successModal = document.querySelector('.success-modal');

    successModalWrapper.addEventListener('click', function(event) {
        if (!successModal.contains(event.target)) {
            closeAll();
        }
    });

    const openModal = document.querySelectorAll('.openModal');

    openModal.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            document.querySelector('.record__wrapper').classList.add('active');
        });
    });

    const closeRecord = document.querySelectorAll('.closeRecord');

    closeRecord.forEach((button) => {
        button.addEventListener('click', () => {
            recordWrapper.forEach(wrapper => {
                wrapper.classList.remove('active');
            });
        });
    });

    function handleForm(formInf) {
        formInf.addEventListener('submit', function (event) {
            event.preventDefault();

            const controls = this.querySelectorAll('.required__input');
            let isValid = true;

            controls.forEach(control => {
                const errorForm = control.previousElementSibling;
                if (!control.value) {
                    isValid = false;
                    control.classList.add('invalid');
                    errorForm.classList.add('active');
                } else {
                    control.classList.remove('invalid');
                    errorForm.classList.remove('active');
                }
            });

            if (isValid) {
                controls.forEach(control => {
                    control.value = '';
                    control.classList.remove('invalid');
                    const errorForm = control.previousElementSibling;
                    errorForm.classList.remove('active');
                });

                closeAll();
                setTimeout(() => {
                    showSuccesseModal();
                }, 300);
            } else {
                console.log('Форма содержит ошибки.');
            }
        });

        const controls = formInf.querySelectorAll('.required__input');
        controls.forEach(control => {
            control.addEventListener('input', function () {
                const errorForm = control.previousElementSibling;
                if (control.value) {
                    control.classList.remove('invalid');
                    errorForm.classList.remove('active');
                }
            });
        });
    }


    const formSend = document.querySelectorAll('.sendForm');

    if (formSend) {
        formSend.forEach(item => {
            handleForm(item);
        });
    }


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


    //accordion
    const titles = document.querySelectorAll('.accordion__title');
    const contents = document.querySelectorAll('.accordion-content');
    const svg = document.querySelectorAll('.questions__item .questions__svg svg');
    const costIcon = document.querySelectorAll('.cost-icon');
    if (titles.length > 0 && contents.length > 0) {
        titles[0].classList.add('active');
        contents[0].classList.add('active');
        contents[0].style.maxHeight = contents[0].scrollHeight + 'px';
        if (svg.length > 0) svg[0].classList.add('active');
        if (costIcon.length > 0) costIcon[0].classList.add('active');
    }
    titles.forEach(item => item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.style.maxHeight = 0;
            svg.forEach(element => element.classList.remove('active'));
            costIcon.forEach(element => element.classList.remove('active'));
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
            costIcon.forEach(element => element.classList.remove('active'))
            costIcon.forEach((element, index) => {
                if (index === Array.from(contents).indexOf(activeContent)) {
                    element.classList.add('active');
                }
            })

        }
    }));

    //map
    ymaps.ready(function () {

        let myMap = new ymaps.Map("YMapsID", {
            center: [60.012085, 30.328723],
            zoom: 11,
        });


        let myPlacemark = new ymaps.Placemark([60.012085, 30.328723], {});
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
    const doctorsCard = document.querySelectorAll('.doctors-page__content-item');

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
                const cardCategory = card.getAttribute('data-item');
                card.style.display = (cardCategory === selectedValue || selectedValue === 'all') ? 'flex' : 'none';
            });
        }
    }


    if (listDoctors || selectDoctors) {
        listDoctors.addEventListener('click', cardFilter);
        selectDoctors.addEventListener('change', cardFilter);

        selectDoctors.addEventListener('focus', () => {
            const icon = document.querySelector('.select-container .heading-icon--top');
            if (icon) {
                icon.classList.add('active');
            }
        });

        selectDoctors.addEventListener('blur', () => {
            const icon = document.querySelector('.select-container .heading-icon--top');
            if (icon) {
                icon.classList.remove('active');
            }
        });

        selectDoctors.addEventListener('change', () => {
            const icon = document.querySelector('.select-container .heading-icon--top');
            if (icon) {
                icon.classList.remove('active');
            }
        });

        selectDoctors.addEventListener('mousedown', () => {
            const icon = document.querySelector('.select-container .heading-icon--top');
            if (icon) {
                icon.classList.add('active');
            }
        });
    }

    const inputAction = document.querySelectorAll('.input__action');

    if (inputAction) {
        inputAction.forEach(item => {
            item.addEventListener('focus', () => {
                const icon = item.querySelector('.heading-icon--top-form');
                if (icon) {
                    icon.classList.add('active');
                }
            });

            item.addEventListener('blur', () => {
                const icon = item.querySelector('.heading-icon--top-form');
                if (icon) {
                    icon.classList.remove('active');
                }
            });

            item.addEventListener('change', () => {
                const icon = item.querySelector('.heading-icon--top-form');
                if (icon) {
                    icon.classList.remove('active');
                }
            });

            item.addEventListener('mousedown', () => {
                const icon = item.querySelector('.heading-icon--top-form');
                if (icon) {
                    icon.classList.add('active');
                }
            });
        });
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

    const listParent = document.querySelector('.list-parent');
    const items = document.querySelectorAll('.item');

    if (listParent) {
        listParent.addEventListener('click', (event) => {
            const e = event.target;
            if (e.classList.contains('item')) {
                items.forEach(i => {
                    i.classList.remove('active');
                });
                e.classList.add('active');
            }
        });
    }

    const nav = document.querySelector('.about__nav');
    const treatmentBlock = document.getElementById('treatment');

    if(nav) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 1024) {
                if (window.scrollY >= treatmentBlock.offsetTop) {
                    nav.style.position = 'static';
                } else {
                    nav.style.position = 'sticky';
                }
            } else {
                nav.style.position = 'static';
            }
        });
    }


    let ps = document.querySelectorAll('.point');

    if(ps) {
        ps.forEach(function(p) {
            let maxLength;

            if (window.matchMedia('(min-width: 1020px)').matches) {
                maxLength = 125;
            } else if (window.matchMedia('(min-width: 400px)').matches) {
                maxLength = 140;
            } else {
                maxLength = 200;
            }

            p.dataset.originalText = p.innerText;
            if (p.innerText.length > maxLength) {
                p.innerText = p.innerText.slice(0, maxLength) + '...';
            }
        });

    }

    let ps2 = document.querySelectorAll('.point2');

    if(ps2) {
        ps2.forEach(function(p) {
            let maxLength;

            if (window.matchMedia('(min-width: 1020px)').matches) {
                maxLength = 260;
            } else if (window.matchMedia('(min-width: 400px)').matches) {
                maxLength = 260;
            } else {
                maxLength = 280;
            }

            p.dataset.originalText = p.innerText;
            if (p.innerText.length > maxLength) {
                p.innerText = p.innerText.slice(0, maxLength) + '...';
            }
        });
    }

    let onListOperation = document.querySelector('.onListOperation');

    if(onListOperation) {
        onListOperation.addEventListener('click', () => {
            const operationItems = document.querySelectorAll('.operation__text-item');
            operationItems.forEach(item => {
                item.classList.toggle('active')
            })
            if (onListOperation.textContent === 'Развернуть') {
                onListOperation.textContent = 'Свернуть';
            } else {
                onListOperation.textContent = 'Развернуть'
            }
        })
    }

    const answer = document.querySelector('.answer');

    if(answer) {
        function setupToggle(containerId, headingId, iconClass, otherContainerId, otherHeadingId, otherIconClass) {
            const container = document.getElementById(containerId);
            const heading = document.getElementById(headingId);
            const icon = container.querySelector(iconClass);

            const otherContainer = document.getElementById(otherContainerId);
            const otherHeading = document.getElementById(otherHeadingId);
            const otherIcon = otherContainer.querySelector(otherIconClass);

            container.addEventListener('click', () => {
                if (otherHeading.classList.contains('active')) {
                    otherHeading.classList.remove('active');
                    otherIcon.classList.remove('active');
                }
                heading.classList.toggle('active');
                icon.classList.toggle('active');
            });

            icon.addEventListener('click', (event) => {
                event.stopPropagation();
                heading.classList.toggle('active');
                icon.classList.toggle('active');
            });
        }

        setupToggle('headContainer', 'headingHead', '.heading-icon', 'doctorContainer', 'headingDoctor', '.heading-icon');
        setupToggle('doctorContainer', 'headingDoctor', '.heading-icon', 'headContainer', 'headingHead', '.heading-icon');

        const selectAllHeadCheckbox = document.getElementById('selectAllHead');
        const headCheckboxes = document.querySelectorAll('#headingHead .checkbox-custom:not(#selectAllHead)');

        selectAllHeadCheckbox.addEventListener('change', () => {
            headCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllHeadCheckbox.checked;
            });
        });

        const selectAllDoctorCheckbox = document.getElementById('selectAllDoctor');
        const doctorCheckboxes = document.querySelectorAll('#headingDoctor .checkbox-custom:not(#selectAllDoctor)');

        selectAllDoctorCheckbox.addEventListener('change', () => {
            doctorCheckboxes.forEach(checkbox => {
                checkbox.checked = selectAllDoctorCheckbox.checked;
            });
        });

        const sortContainer = document.getElementById('sortContainer');
        const headingSort = document.getElementById('headingSort');

        if (sortContainer) {
            sortContainer.addEventListener('click', () => {
                headingSort.classList.toggle('active');
            });

            document.addEventListener('click', (event) => {
                if (!sortContainer.contains(event.target)) {
                    headingSort.classList.remove('active');
                }
            });
        }

        const newRadio = document.getElementById('new');
        const oldRadio = document.getElementById('old');
        const container = document.querySelector('.answer__container');

        function parseDate(dateString) {
            const [day, month, year] = dateString.split('.').map(Number);
            return new Date(year, month - 1, day);
        }

        function sortItems(order) {
            const items = Array.from(container.querySelectorAll('.answer__item'));
            items.sort((a, b) => {
                const dateA = parseDate(a.querySelector('.day').textContent);
                const dateB = parseDate(b.querySelector('.day').textContent);
                return order === 'new' ? dateB - dateA : dateA - dateB;
            });
            items.forEach(item => container.appendChild(item));
        }

        newRadio.addEventListener('change', () => {
            if (newRadio.checked) {
                sortItems('new');
            }
        });

        oldRadio.addEventListener('change', () => {
            if (oldRadio.checked) {
                sortItems('old');
            }
        });

        sortItems('new');

        const applyButton = document.querySelector('.applyFilters');
        const doctorApplyButton = document.querySelector('.doctorApplyButton');
        const checkboxes = document.querySelectorAll('.checkbox-custom');
        const itemsAnswer = document.querySelectorAll('.answer__item');

        if(applyButton) {
            applyButton.addEventListener('click', () => {
                const selectedCategories = Array.from(checkboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.id);

                itemsAnswer.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');


                    if (selectedCategories.length === 0 || selectedCategories.includes(itemCategory)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });

        }


        document.querySelector('button[type="reset"]').addEventListener('click', () => {
            itemsAnswer.forEach(item => {
                item.style.display = 'block';
            });
        });


        if (doctorApplyButton) {
            doctorApplyButton.addEventListener('click', () => {
                const selectedDoctors = Array.from(doctorCheckboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.id);

                itemsAnswer.forEach(item => {
                    const itemDoctor = item.querySelector('.answer__person-name span').textContent.trim();
                    const doctorNameMap = {
                        doctor1: 'Юлия Пряженник',
                        doctor2: 'Ксения Чорная',
                        doctor3: 'Людмила Волянская',
                        doctor4: 'Даниил Платонов',
                        doctor5: 'Елизавета Танона'
                    };

                    if (selectedDoctors.length === 0) {

                        item.style.display = 'block';
                    } else {

                        if (selectedDoctors.some(doctorId => itemDoctor.includes(doctorNameMap[doctorId]))) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        }

    }

    const blog = document.querySelector('.blog');

    if(blog) {
        const headContainer = document.getElementById('headContainerBlog');
        const headingHead = document.getElementById('headingHeadBlog');
        const icon = headContainer.querySelector('.heading-icon');
        const sortContainerBlog = document.getElementById('sortContainerBlog');
        const blogSort = document.getElementById('blogSort');

        headContainer.addEventListener('click', () => {
            headingHead.classList.toggle('active');
            icon.classList.toggle('active');
            blogSort.classList.remove('active');
        });

        sortContainerBlog.addEventListener('click', () => {
            if (blogSort) {
                blogSort.classList.toggle('active');
                headingHead.classList.remove('active');
            }
        });


        const applyButton = document.querySelector('.applyFilters');
        const checkboxes = document.querySelectorAll('.checkbox-custom');
        const itemsAnswer = document.querySelectorAll('.articles__item');

        if(applyButton) {
            applyButton.addEventListener('click', () => {
                const selectedCategories = Array.from(checkboxes)
                    .filter(checkbox => checkbox.checked)
                    .map(checkbox => checkbox.id);

                itemsAnswer.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (selectedCategories.length === 0 || selectedCategories.includes(itemCategory)) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }


        document.querySelector('button[type="reset"]').addEventListener('click', () => {
            itemsAnswer.forEach(item => {
                item.style.display = 'flex';
            });
        });

        document.getElementById('selectAllHead').addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('#headingHeadBlog .checkbox-custom');
            checkboxes.forEach(checkbox => checkbox.checked = this.checked);
        });
// фильтр базы

        const articles = document.querySelectorAll('.articles__item');
        const checkboxesType = document.querySelectorAll('.blog__filter-left input[type="checkbox"]');


        function updateArticlesVisibility() {
            const isBaseChecked = document.getElementById('base').checked;
            const isLittleChecked = document.getElementById('little').checked;

            articles.forEach(article => {
                const heading = article.getAttribute('data-heading');


                if (!isBaseChecked && !isLittleChecked) {
                    article.classList.remove('hidden');
                }

                else if ((isBaseChecked && heading === 'base') || (isLittleChecked && heading === 'little')) {
                    article.classList.remove('hidden');
                } else {
                    article.classList.add('hidden');
                }
            });
        }


        checkboxesType.forEach(checkbox => {
            checkbox.addEventListener('change', updateArticlesVisibility);
        });


        updateArticlesVisibility();

    }

    const day = document.querySelector('.day');

    if (day) {
        day.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                const viewItem = document.querySelector('.view__inf');
                viewItem.classList.toggle('active');
            }
        });
    }


    const params = document.querySelector('.aligners__param');

    if(params) {
        const params = document.querySelectorAll('.aligners__param');
        const planLists = document.querySelectorAll('.aligners__plans');
        const images = document.querySelectorAll('.aligners-img');

        params.forEach((param, index) => {
            param.addEventListener('click', () => {

                params.forEach(p => p.classList.remove('active'));
                planLists.forEach(list => list.classList.remove('active'));
                images.forEach(img => img.classList.remove('active'));


                param.classList.add('active');
                planLists[index].classList.add('active');
                images[index].classList.add('active');
            });
        });
    }

    const openText = document.querySelectorAll('.openText');
    const icons = document.querySelectorAll('form span.icon-button__bg');
    const calculator = document.querySelector('.calculator');
    const calculatorImplantation = document.querySelector('.calculator-implantation');

    openText.forEach((elem, index) => {
        elem.addEventListener('click', (event) => {
            if (window.innerWidth <= 768) {
                event.stopPropagation();

                icons.forEach(icon => icon.classList.remove('active'));

                if (icons[index]) {
                    icons[index].classList.add('active');
                }

                if(calculator) {
                    calculator.classList.add('active');
                }

                if(calculatorImplantation) {
                    calculatorImplantation.classList.add('active');
                }
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768) {
            let clickedInside = false;

            openText.forEach((elem, index) => {
                if (elem.contains(event.target) || (icons[index] && icons[index].contains(event.target))) {
                    clickedInside = true;
                }
            });

            if (!clickedInside) {
                icons.forEach(icon => icon.classList.remove('active'));
                if(calculator) {
                    calculator.classList.remove('active');
                }
                if(calculatorImplantation) {
                    calculatorImplantation.classList.remove('active');
                }
            }
        }
    });


    const dysfunctionName = document.querySelector('.dysfunction__tab-name');
    const dysfunctionSubtitles = document.querySelectorAll('.dysfunction__subtitle');
    const dysfunctionText = document.querySelectorAll('.dysfunction__text');

    if (dysfunctionName) {
        dysfunctionName.addEventListener('click', (event) => {
            let target = event.target;
            if (target.classList.contains('dysfunction__subtitle')) {

                dysfunctionSubtitles.forEach(item => item.classList.remove('active'));
                dysfunctionText.forEach(item => item.classList.remove('active'));


                target.classList.add('active');


                const index = Array.from(dysfunctionSubtitles).indexOf(target);
                dysfunctionText[index].classList.add('active');
            }
        });
    }

    const standards = document.querySelectorAll('.standards');

    if (standards) {
        const changeOrder = document.querySelectorAll('.changeOrder');

        changeOrder.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth < 1024) {
                    const currentOrder4 = document.querySelector('.order4');

                    if (currentOrder4) {
                        const currentClass = Array.from(item.classList).find(cls => cls.startsWith('order') && cls !== 'order4');

                        item.classList.add('move-to-front');
                        currentOrder4.classList.add('hidden');

                        setTimeout(() => {
                            currentOrder4.classList.remove('order4');
                            currentOrder4.classList.add(currentClass);

                            item.classList.remove(currentClass);
                            item.classList.add('order4');

                            currentOrder4.classList.remove('hidden');
                            item.classList.remove('move-to-front');
                        }, 500);
                    }
                }
            });
        });
    }

    const requisitesPage = document.querySelector('.requisites__page');

    if (requisitesPage) {
        const printPage = document.querySelector('.printPage');
        const downloadRequisites = document.querySelector('.downloadRequisites');

        printPage.addEventListener('click', () => {
            const printContents = document.querySelector('.requisites__content').innerHTML;
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
            location.reload(); // Добавлено для восстановления событий
        });

        downloadRequisites.addEventListener('click', () => {
            const content = document.querySelector('.requisites__content').innerHTML;
            const blob = new Blob([content], { type: 'text/html' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'requisites.html';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }


    const entryChere = document.querySelector('.share');

    if (entryChere) {
        const iconChere = document.querySelector('.iconChere');
        entryChere.addEventListener('click', () => {
            iconChere.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            if (!entryChere.contains(event.target)) {
                iconChere.classList.remove('active');
            }
        });
    }

    // изменение формы числа в секции статья

    const dayElement = document.querySelector('.day');
    if (dayElement) {
        const dateParts = dayElement.textContent.split('.');
        const date = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);
        const options = { month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('ru-RU', options).replace(' ', ', ');

        const mobileDateElement = document.createElement('div');
        mobileDateElement.classList.add('mobile-day');
        mobileDateElement.textContent = formattedDate;

        dayElement.insertAdjacentElement('afterend', mobileDateElement);
    }
});
