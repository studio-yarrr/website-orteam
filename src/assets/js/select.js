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
      total = 0;

      if (selectElement.value) {
        selectedTariff = selectElement.selectedOptions[0].text;
        console.log(selectedTariff);

        numElement.forEach((elem, index) => {
          if (index === selectBrackets.selectedIndex) {
            elem.classList.add('active');
          } else {
            elem.classList.remove('active');
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
        numElement.forEach(elem => {
          elem.classList.add('active');
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
        totalOutput.textContent = `Итого: ${total} руб.`;
        console.log(`Выбран тариф: ${selectedTariff}, тип брекетов: ${selectedBracketType}, сумма: ${total} руб.`);
      } else {
        numElement.forEach(elem => {
          elem.classList.remove('active');
        });
        totalOutput.textContent = `Итого: 0 руб.`;
      }
    });
  }


});
