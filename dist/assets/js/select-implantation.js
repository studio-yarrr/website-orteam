document.addEventListener('DOMContentLoaded', () => {
    const calculatorImplantation = document.querySelector('.calculator-implantation');

    if (calculatorImplantation) {
        const selectElement1 = document.querySelector('.js-choice__implantation1');
        const selectElement2 = document.querySelector('.js-choice__implantation2');
        const selectElement3 = document.querySelector('.js-choice__implantation3');
        const numElement = document.querySelectorAll('.calculator__num');
        const calculatorImplantationReset = document.querySelector('.calculator-implantation__reset');
        const firstOption = selectElement1.querySelector('option');
        const firstOption2 = selectElement2.querySelector('option');
        const firstOption3 = selectElement3.querySelector('option');

        firstOption.innerHTML = `<span class="block-desc">1. </span> ${firstOption.textContent}`;
        firstOption2.innerHTML = `<span class="block-desc">2. </span> ${firstOption2.textContent}`;
        firstOption3.innerHTML = `<span class="block-desc">3. </span> ${firstOption3.textContent}`;

        let priceImplantationType = 0;
        let priceImplantationPlastic = 0;
        let priceImplantationCrown = 0;

        let choices1, choices2, choices3;

        if (selectElement1) {
            choices1 = new Choices(selectElement1, {
                itemSelectText: "",
                searchEnabled: false,
                shouldSort: false
            });
        }



        selectElement1.addEventListener('change', function (event) {
            const selectedValue = event.target.value;
            const selectedText = event.target.options[event.target.selectedIndex].text;


            switch (selectedValue) {
                case 'neodent':
                case 'inno':
                    priceImplantationType = 33000;
                    break;
                case 'straumann':
                    priceImplantationType = 52000;
                    break;
                default:
                    priceImplantationType = 0;
            }
            const innerTextType = document.querySelector('.innerTextType');

            innerTextType.textContent = selectedText;

            numElement.forEach((elem, index) => {
                if (index === 0) {
                    elem.classList.add('active');
                }
            });

            calculateTotalPrice();
            checkActiveNumClasses();
        });

        if (selectElement2) {
            choices2 = new Choices(selectElement2, {
                itemSelectText: "",
                searchEnabled: false,
                shouldSort: false
            });
        }

        selectElement2.addEventListener('change', function (event) {
            const selectedValue = event.target.value;
            const selectedText = event.target.options[event.target.selectedIndex].text;

            switch (selectedValue) {
                case 'neither':
                    priceImplantationPlastic = 0;
                    break;
                case 'close':
                    priceImplantationPlastic = 10000;
                    break;
                case 'open':
                    priceImplantationPlastic = 55000;
                    break;
                default:
                    priceImplantationPlastic = 0;
            }

            const innerPlastic = document.querySelector('.innerPlastic');

            innerPlastic.textContent = selectedText;

            numElement.forEach((elem, index) => {
                if (index === 1) {
                    elem.classList.add('active');
                }
            });

            calculateTotalPrice();
            checkActiveNumClasses();
        });

        if (selectElement3) {
            choices3 = new Choices(selectElement3, {
                itemSelectText: "",
                searchEnabled: false,
                shouldSort: false
            });
        }

        selectElement3.addEventListener('change', function (event) {
            const selectedValue = event.target.value;
            const selectedText = event.target.options[event.target.selectedIndex].text;

            switch (selectedValue) {
                case 'zirconium':
                    priceImplantationCrown = 37000;
                    break;
                default:
                    priceImplantationCrown = 0;
            }

            const innerCrown = document.querySelector('.innerCrown');

            innerCrown.textContent = selectedText;

            numElement.forEach((elem, index) => {
                if (index === 2) {
                    elem.classList.add('active');
                }
            });

            calculateTotalPrice();
            checkActiveNumClasses();
        });

        function calculateTotalPrice() {
            let totalPriceImplantation = priceImplantationCrown + priceImplantationPlastic + priceImplantationType;

            if (plasticCheckbox.checked) {
                totalPriceImplantation += 8000;
            }

            if (temporaryCheckbox.checked) {
                totalPriceImplantation += 14000;
            }

            const totalImplantation = document.querySelector('.total-implantation');

            totalImplantation.textContent = `${totalPriceImplantation} ₽`;
        }

// checbox

        const plasticCheckbox = document.getElementById('plasticCheckbox');
        const temporaryCheckbox = document.getElementById('temporaryCheckbox');

        plasticCheckbox.addEventListener('change', () => {
            calculateTotalPrice();
            checkActiveNumClasses();
        });

        temporaryCheckbox.addEventListener('change', () => {
            calculateTotalPrice();
            checkActiveNumClasses();
        });

        const calculatorImplantationButton = document.querySelectorAll('.calculator-implantation__button');
        function checkActiveNumClasses() {
            const activeElements = Array.from(numElement).filter(elem => elem.classList.contains('active'));
            const allActiveNum = activeElements.length >= 3;
            calculatorImplantationButton.forEach(button => {
                if (allActiveNum) {
                    button.classList.remove('button__disabled');
                    button.classList.add('button');
                    button.removeAttribute('disabled');
                } else {
                    button.classList.remove('button');
                    button.classList.add('button__disabled');
                    button.setAttribute('disabled', 'true');
                }
            });

            const oneActiveNum = activeElements.length > 0;

            if (oneActiveNum) {
                calculatorImplantationReset.classList.add('active');
            } else {
                calculatorImplantationReset.classList.remove('active');
            }
        }

        checkActiveNumClasses();

        const observerCheckImplantation = new MutationObserver(checkActiveNumClasses);

        numElement.forEach(elem => {
            observerCheckImplantation.observe(elem, { attributes: true, attributeFilter: ['class'] });
        });

        const moveCostImplantation = document.querySelector('.moveCostImplantation');
        const calculatorImplantationPrice = document.querySelector('.calculator-implantation__price');
        moveCostImplantation.addEventListener('click', () => {
            calculatorImplantationPrice.classList.add('active');
        });

        calculatorImplantationReset.addEventListener('click', () => {
            plasticCheckbox.checked = false;
            temporaryCheckbox.checked = false;

            numElement.forEach(item => item.classList.remove('active'));

            if (choices1) choices1.setChoiceByValue('');
            if (choices2) choices2.setChoiceByValue('');
            if (choices3) choices3.setChoiceByValue('');

            const innerTextType = document.querySelector('.innerTextType');
            const innerPlastic = document.querySelector('.innerPlastic');
            const innerCrown = document.querySelector('.innerCrown');

            if (innerTextType) innerTextType.textContent = '';
            if (innerPlastic) innerPlastic.textContent = '';
            if (innerCrown) innerCrown.textContent = '';

            calculatorImplantationPrice.classList.remove('active');
            calculateTotalPrice();
            checkActiveNumClasses();
        });
    }
});