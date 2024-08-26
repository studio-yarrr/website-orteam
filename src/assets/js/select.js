document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('.js-choice');
  const selectBrackets = document.querySelector('.js-choice2');
  const numElement = document.querySelectorAll('.calculator__num');
  const totalOutput = document.querySelector('.total-output');

  let choices, choicesBrackets;

  const prices = {
    'metal': 172000,
    'combined': 192000,
    'ceramic': 212000,
    'metal1': 132000,
    'combined1': 100000,
    'metal2': 106000,
    'combined2': 80000,
    'metal3': 24000
  };

  if (selectElement) {
    choices = new Choices(selectElement, {
      itemSelectText: "",
      searchEnabled: false,
    });
  }

  if (selectBrackets) {
    choicesBrackets = new Choices(selectBrackets, {
      itemSelectText: "",
      searchEnabled: false,
    });

    choicesBrackets.setChoices([
      { value: '', label: 'Выберите тип брекетов', selected: true },
      { value: 'tariff', label: 'Выберите тарифный план', selected: false }
    ], 'value', 'label', false);
  }

  let total = 0;
  let selectedTariff = "";
  let selectedBracketType = "";

  const bracketChoices = {
    '2': [
      { value: 'metal', label: 'Металлические Damon Q2', selected: false },
      { value: 'combined', label: 'Комбинированные Damon Clear 2+Q2', selected: false },
      { value: 'ceramic', label: 'Керамические Damon Clear 2', selected: false }
    ],
    '3': [
      { value: 'metal1', label: 'Металлические Damon Q2', selected: false },
      { value: 'combined1', label: 'Металлические Protect', selected: false }
    ],
    '4': [
      { value: 'metal2', label: 'Металлические Damon Q2', selected: false },
      { value: 'combined2', label: 'Металлические Protect', selected: false }
    ],
    '5': [
      { value: 'metal3', label: 'Лигатурные Mini Diamond', selected: false }
    ]
  };

  if (selectElement) {
    selectElement.addEventListener('change', () => {
      if (selectElement.value) {
        selectedTariff = selectElement.selectedOptions[0].text;
        console.log(selectedTariff);

        numElement.forEach((elem, index) => {
          if (index === 0) {
            elem.classList.add('active');
          }
        });

        const defaultOption = { value: '', label: 'Выберите тип брекетов', selected: true };

        choicesBrackets.clearStore();

        if (bracketChoices[selectElement.value]) {
          choicesBrackets.setChoices([defaultOption, ...bracketChoices[selectElement.value]], 'value', 'label', false);
        }
      } else {
        choicesBrackets.setChoices([{ value: 'tariff', label: 'Выберите тарифный план', selected: false }], 'value', 'label', false);
      }
    });
  }

  if (selectBrackets) {
    selectBrackets.addEventListener('change', () => {
      if (selectBrackets.value) {
        numElement.forEach((elem, index) => {
          if (index === 1) {
            elem.classList.add('active');
          }
        });

        total = prices[selectBrackets.value] || 0;
        const selectedBracket = choicesBrackets.itemList.element.innerText;

        if (selectedBracket) {
          const bracketTypeArray = bracketChoices[selectBrackets.value];
          console.log('Массив типов: ', bracketTypeArray);

          if (bracketTypeArray) {
            const selectedItem = bracketTypeArray.find(item => item.value === selectedBracket.value);

            if (selectedItem) {
              selectedBracketType = selectedItem.label;
            } else {
              selectedBracketType = 'Неизвестный тип'; // Нет соответствия
            }
          } else {
            selectedBracketType = 'Неизвестный тип'; // Массив типов не существует
          }
        } else {
          selectedBracketType = 'Неизвестный тип'; // Если не выбрано
        }

        console.log(selectedBracketType);
        updateTotal();
      }
    });
  }

// radio
  const radioButtons = document.querySelectorAll('.customClick');
  const yearsNums = document.querySelectorAll('.years__num');
  const costPerActivation = 3300;

  let duration;
  let totalCost = 0;

  radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      yearsNums.forEach(num => num.classList.remove('active-text'));
      if (radio.checked) {
        duration = yearsNums[index].textContent;

        yearsNums[index].classList.add('active-text');

        numElement.forEach((elem, idx) => {
          if (idx === 2) {
            elem.classList.add('active');
          }
        });

        const durationValue = parseFloat(radio.value);
        console.log(durationValue);

        let activations = 0;
        if (durationValue === 1) {
          activations = 24;
        } else if (durationValue === 1.5) {
          activations = 36;
        } else if (durationValue === 2) {
          activations = 48;
        } else if (durationValue === 2.5) {
          activations = 60;
        }
        totalCost = activations * costPerActivation;
        console.log(totalCost);
        updateTotal();
      }
    });
  });

// radio 2
  const radioButtons2 = document.querySelectorAll('.customClick2');
  const miniprop = document.querySelectorAll('.miniprop__num');
  let minipropValue = 0;
  const amountMiniprop = 9000;
  let totalCostMiniprop = 0;

  radioButtons2.forEach((item, index) => {
    item.addEventListener('change', () => {
      miniprop.forEach(num => num.classList.remove('active-text'));
      if (item.checked) {
        minipropValue = Number(miniprop[index].textContent);

        console.log(minipropValue);
        miniprop[index].classList.add('active-text');

        totalCostMiniprop = minipropValue * amountMiniprop;
        console.log(totalCostMiniprop);
        updateTotal();
      }

      numElement.forEach((elem, idx) => {
        if (idx === 3) {
          elem.classList.add('active');
        }
      });
    });
  });

// нижние чекбоксы
  const operationCheckbox = document.getElementById('operation');
  const treatmentCheckbox = document.getElementById('treatment');

  let isOperationSelected = operationCheckbox.checked;
  let isTreatmentSelected = treatmentCheckbox.checked;

  operationCheckbox.addEventListener('change', () => {
    isOperationSelected = operationCheckbox.checked;
    updateTotal();
  });

  treatmentCheckbox.addEventListener('change', () => {
    isTreatmentSelected = treatmentCheckbox.checked;
    updateTotal();
  });

  function updateTotal() {
    let finalTotal = total + totalCost + totalCostMiniprop;

    if (isTreatmentSelected) {
      finalTotal /= 2;
    }

    finalTotal += 18000;

    totalOutput.textContent = `Итого: ${finalTotal} руб.`;
  }

  const buttonCalculator = document.querySelector('.calculator__button');
  const numElements = document.querySelectorAll('.calculator__num');
  const calculatorReset = document.querySelector('.calculator__reset');

  buttonCalculator.setAttribute('disabled', 'true');

  function checkActiveClasses() {
    const allActive = Array.from(numElements).every(elem => elem.classList.contains('active'));
    if (allActive) {
      buttonCalculator.classList.remove('button__disabled');
      buttonCalculator.classList.add('button');
      buttonCalculator.removeAttribute('disabled');
    } else {
      buttonCalculator.classList.remove('button');
      buttonCalculator.classList.add('button__disabled');
      buttonCalculator.setAttribute('disabled', 'true');
    }

    const oneActive = Array.from(numElements).some(elem => elem.classList.contains('active'));
    if (oneActive) {
      calculatorReset.classList.add('active');
    } else {
      calculatorReset.classList.remove('active');
    }
  }


  checkActiveClasses();


  const observerCheck = new MutationObserver(checkActiveClasses);

  numElements.forEach(elem => {
    observerCheck.observe(elem, { attributes: true, attributeFilter: ['class'] });
  });


});