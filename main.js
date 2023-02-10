"use strict";

// Declared const variables

const billInput = document.getElementById('input_graph');
const numberOfPeople = document.getElementById('input_graph_2');
const tipAmountPerson = document.getElementById('total_number1')
const totalAmountPerson = document.getElementById('total_number2');
const customInputTip = document.getElementById('custom');
const presetButtons = document.querySelectorAll('button');
const resetButton = document.getElementById('reset');
const hiddenText = document.getElementById('zero');

// This function resets everything back to normal

resetButton.addEventListener('click',rst);

function rst(){
    billInput.value = "";
    numberOfPeople.value = "";
    totalAmountPerson.innerHTML = "$0.00";
    customInputTip.value = "";
    tipAmountPerson.innerHTML = "$0.00";
    document.getElementById("zero").style.display = 'block'
    presetButtons.value = "";

};

// This function toggles hide/visiblity

numberOfPeople.addEventListener('input', hide);

function hide(){
    
    var x = document.getElementById("zero");
    if (numberOfPeople.value <= 0) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

// This is a custom tip function 

customInputTip.addEventListener('input', customInput)

function customInput() {
  var customTipValue = (billInput.value * customInputTip.value) / 100;
  if (numberOfPeople.value == '' ) {
      tipAmountPerson.innerHTML = "$" + customTipValue;
      totalAmountPerson.innerHTML = "$" + (Number(billInput.value) + Number(customTipValue));
  } else (numberOfPeople <= 2) 
      tipAmountPerson.innerHTML = "$" + (customTipValue / numberOfPeople.value);
      totalAmountPerson.innerHTML = "$" + ((Number(billInput.value) + Number(customTipValue))) / numberOfPeople.value;
}


// Shows / Adds up total & total per person bill

billInput.addEventListener ('focusout', (e) => {
  for (const button of presetButtons) {
    button.addEventListener('click', function() {
      var tipValue = (parseInt(this.innerText));
      var bill = (billInput.value * tipValue) / 100;

      if (numberOfPeople.value == '' ) {
        tipAmountPerson.innerHTML = "$" + bill;
        totalAmountPerson.innerHTML = "$" + (Number(billInput.value) + Number(bill));
      } else (numberOfPeople.value >= 1 ) 
         tipAmountPerson.innerHTML = "$" + (bill / numberOfPeople.value);
         totalAmountPerson.innerHTML = "$" + ((Number(billInput.value) + Number(bill))) / numberOfPeople.value;

    });
  }
})


