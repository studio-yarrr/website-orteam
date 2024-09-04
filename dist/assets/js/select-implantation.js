document.addEventListener('DOMContentLoaded', () => {
    const calculatorImplantation = document.querySelector('.calculator-implantation');

    if(calculatorImplantation) {
        const selectElement1 = document.querySelector('.js-choice__implantation1');
        const selectElement2 = document.querySelector('.js-choice__implantation2');
        const selectElement3 = document.querySelector('.js-choice__implantation3');
        const numElement = document.querySelectorAll('.calculator__num');

        let priceImplantationType = 0;
        let priceImplantationPlastic = 0;
        let priceImplantationCrown = 0;

        if (selectElement1) {
            const choices = new Choices(selectElement1, {
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
        });

        if (selectElement2) {
            choices = new Choices(selectElement2, {
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
            const innerCrown = document.querySelector('.innerTextType');

            innerPlastic.textContent = selectedText;

            numElement.forEach((elem, index) => {
                if (index === 1) {
                    elem.classList.add('active');
                }
            });

            calculateTotalPrice();
        });

        if (selectElement3) {
            choices = new Choices(selectElement3, {
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

            totalImplantation.textContent = totalPriceImplantation;
        }

        // checbox

        const plasticCheckbox = document.getElementById('plasticCheckbox');
        const temporaryCheckbox = document.getElementById('temporaryCheckbox');

        plasticCheckbox.addEventListener('change', () => {
            calculateTotalPrice();
        });

        temporaryCheckbox.addEventListener('change', () => {
            calculateTotalPrice();
        })
    }

    const numElements = document.querySelectorAll('.calculator__num');
    const calculatorImplantationButton =document.querySelectorAll('.calculator-implantation__button')
    function checkActiveNumClasses() {
        const activeElements = Array.from(numElements).filter(elem => elem.classList.contains('active'));
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

        const oneActiveNum = Array.from(numElements).some(elem => elem.classList.contains('active'));
        const calculatorResets = document.querySelectorAll('.calculator__reset');

        calculatorResets.forEach(reset => {
            if (oneActiveNum) {
                reset.classList.add('active');
            } else {
                reset.classList.remove('active');
            }
        });
    }

    checkActiveNumClasses();

    const observerCheckImplantation = new MutationObserver(checkActiveNumClasses);

    numElements.forEach(elem => {
        observerCheckImplantation.observe(elem, { attributes: true, attributeFilter: ['class'] });
    });


    const moveCostImplantation = document.querySelector('.moveCostImplantation')
    const calculatorImplantationPrice = document.querySelector('.calculator-implantation__price')
    moveCostImplantation.addEventListener('click', () => {
        calculatorImplantationPrice.classList.add('active')
    })

});