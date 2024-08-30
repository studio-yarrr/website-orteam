document.addEventListener('DOMContentLoaded', () => {
 const calculator = document.querySelector(".calculator")

   if (calculator) {
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
         shouldSort: false
       });
     }

     if (selectBrackets) {
       choicesBrackets = new Choices(selectBrackets, {
         itemSelectText: "",
         searchEnabled: false,
       });

       choicesBrackets.setChoices([
         {value: '', label: '<span class="block-desc">2.</span> Выберите тип брекетов', selected: true},
         {value: 'tariff', label: 'Выберите тарифный план', disabled: true}
       ], 'value', 'label', false);
     }

     let total = 0;
     let selectedTariff = "";
     let selectedBracketType = "";

     const bracketChoices = {
       '2': [
         {value: 'metal', label: 'Металлические Damon Q2', selected: false},
         {value: 'combined', label: 'Комбинированные Damon Clear 2+Q2', selected: false},
         {value: 'ceramic', label: 'Керамические Damon Clear 2', selected: false}
       ],
       '3': [
         {value: 'metal1', label: 'Металлические Damon Q2', selected: false},
         {value: 'combined1', label: 'Металлические Protect', selected: false}
       ],
       '4': [
         {value: 'metal2', label: 'Металлические Damon Q2', selected: false},
         {value: 'combined2', label: 'Металлические Protect', selected: false}
       ],
       '5': [
         {value: 'metal3', label: 'Лигатурные Mini Diamond', selected: false}
       ]
     };

     if (selectElement) {
       selectElement.addEventListener('change', () => {
         if (selectElement.value) {
           selectedTariff = selectElement.selectedOptions[0].text;
           let innerText = document.querySelector('.innerText');
           let choicesInner = selectElement.closest('.choices');
           innerText.textContent = selectedTariff;
           choicesInner.classList.add('border-choices');

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
           choicesBrackets.setChoices([{
             value: 'tariff',
             label: 'Выберите тарифный план',
             selected: false
           }], 'value', 'label', false);
         }
       });
     }

     if (selectBrackets) {
       selectBrackets.addEventListener('change', () => {
         if (selectBrackets.value) {
           let choicesInner = selectBrackets.closest('.choices');
           choicesInner.classList.add('border-choices');

           numElement.forEach((elem, index) => {
             if (index === 1) {
               elem.classList.add('active');
             }
           });

           total = prices[selectBrackets.value] || 0;
           const selectedBracket = choicesBrackets.getValue(true);

           if (selectedBracket) {
             const bracketTypeArray = bracketChoices[selectElement.value];

             if (bracketTypeArray) {
               const selectedItem = bracketTypeArray.find(item => item.value === selectBrackets.value);
               if (selectedItem) {
                 selectedBracketType = selectedItem.label;
                 let innerType = document.querySelector('.innerType');
                 innerType.textContent = selectedBracketType;
               }
             }
           }
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
         if (radio.checked) {
           yearsNums.forEach((num, idx) => {
             if (idx === index) {
               num.classList.add('active-text');
               num.classList.remove('color-grey');
             } else {
               num.classList.remove('active-text');
               num.classList.add('color-grey');
             }
           });

           duration = yearsNums[index].textContent;
           let innerYears = document.querySelector('.innerYears');
           innerYears.textContent = duration;

           numElement.forEach((elem, idx) => {
             if (idx === 2) {
               elem.classList.add('active');
             }
           });

           const durationValue = parseFloat(radio.value);

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
         if (item.checked) {
           miniprop.forEach((num, inx) => {
             if(inx === index) {
               num.classList.add('active-text');
               num.classList.remove('color-grey');
             } else {
               num.classList.remove('active-text');
               num.classList.add('color-grey');
             }
           });

           minipropValue = Number(miniprop[index].textContent);
           let innerMiniprop = document.querySelector('.innerMiniprop');
           miniprop[index].classList.add('active-text');
           innerMiniprop.textContent = minipropValue
           totalCostMiniprop = minipropValue * amountMiniprop;

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
       let innerOperation = document.querySelector('.innerOperation');

       if (isOperationSelected) {
         innerOperation.textContent = '1';
       } else {
         innerOperation.textContent = '0';
       }
       updateTotal();
     });

     treatmentCheckbox.addEventListener('change', () => {
       isTreatmentSelected = treatmentCheckbox.checked;
       if (isTreatmentSelected) {
         let innerTreatment = document.querySelector('.innerTreatment');
         innerTreatment.textContent = '0,5'
       }
       updateTotal();
     });

     function updateTotal() {
       const actionsLigatures = 18000;
       let finalTotal = total + totalCost + totalCostMiniprop + actionsLigatures;

       if (isTreatmentSelected) {
         finalTotal /= 2;
       }

       totalOutput.textContent = `${finalTotal} ₽`;
     }

     const buttonCalculators = document.querySelectorAll('.calculator__button');
     const numElements = document.querySelectorAll('.calculator__num');
     const calculatorResets = document.querySelectorAll('.calculator__reset');
     const calculatorPrices = document.querySelectorAll('.calculator__price');
     const moveCosts = document.querySelectorAll('.moveCost');

     buttonCalculators.forEach(button => button.setAttribute('disabled', 'true'));

     function checkActiveClasses() {
       const activeElements = Array.from(numElements).filter(elem => elem.classList.contains('active'));
       const allActive = activeElements.length >= 4;

       buttonCalculators.forEach(button => {
         if (allActive) {
           button.classList.remove('button__disabled');
           button.classList.add('button');
           button.removeAttribute('disabled');
         } else {
           button.classList.remove('button');
           button.classList.add('button__disabled');
           button.setAttribute('disabled', 'true');
         }
       });

       const oneActive = Array.from(numElements).some(elem => elem.classList.contains('active'));
       calculatorResets.forEach(reset => {
         if (oneActive) {
           reset.classList.add('active');
         } else {
           reset.classList.remove('active');
         }
       });
     }

     checkActiveClasses();

     const observerCheck = new MutationObserver(checkActiveClasses);

     numElements.forEach(elem => {
       observerCheck.observe(elem, { attributes: true, attributeFilter: ['class'] });
     });

     calculatorResets.forEach(reset => {
       reset.addEventListener('click', () => {
         total = 0;
         totalCost = 0;
         totalCostMiniprop = 0;
         isOperationSelected = false;
         isTreatmentSelected = false;
         selectedTariff = "";
         selectedBracketType = "";
         totalOutput.textContent = "";

         numElements.forEach(item => item.classList.remove('active'));

         if (choices) {
           choices.setChoiceByValue('');
         }

         if (choicesBrackets) {
           choicesBrackets.setChoiceByValue('');
         }

         radioButtons.forEach(radio => {
           radio.checked = false;
         });
         radioButtons2.forEach(radio => {
           radio.checked = false;
         });

         yearsNums.forEach(num => num.classList.remove('active-text'));
         miniprop.forEach(num => num.classList.remove('active-text'));

         operationCheckbox.checked = false;
         treatmentCheckbox.checked = false;

         calculatorPrices.forEach(price => price.classList.remove('active'));

         const buttonMob = document.querySelectorAll('.button__mob');
         buttonMob.forEach(button => button.classList.remove('active'));

         const choicesInner = document.querySelectorAll('.choices');
         choicesInner.forEach(elem => elem.classList.remove('border-choices'));

         updateTotal();

         checkActiveClasses();
       });
     });

     moveCosts.forEach(elem => {
       elem.addEventListener('click', (event) => {
         event.preventDefault();
         calculatorPrices.forEach(price => price.classList.add('active'));
         const buttonMob = document.querySelectorAll('.button__mob');
         buttonMob.forEach(button => button.classList.add('active'));
       });
     });
   }
});