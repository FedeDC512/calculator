const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
  return num1-num2;
};

const multiply = function(num1, num2) {
  return num1*num2;
};

const divide = function(num1, num2) {
  return Math.round((num1/num2) * 100) / 100;
};

const power = function(num1, num2) {
    let power = 1;
    for(let i = 0; i< num2; i++){
      power = power * num1;
    }
    return power;
  };

let firstValue;
let secondValue;
let operation;
let result;
let display = document.querySelector('.display');
let smallDisplay = document.querySelector('.small-display');

//let numberButton;
for (let i = 1; i<10; i++){
    let numberButton = document.querySelector('#n'+i);
    numberButton.addEventListener('click', () => {
        display.innerHTML = (display.innerHTML == "") ? (numberButton.id).replace('n', '') : display.innerHTML + (numberButton.id).replace('n', '');
    })
}

let numberButton0 = document.querySelector('#n0');
numberButton0.addEventListener('click', () => { 
    if(!(display.innerHTML == "0")){    
        display.innerHTML = (display.innerHTML == "") ? '0' : display.innerHTML + '0';
    }
});

let numberButton00 = document.querySelector('#n00');
numberButton00.addEventListener('click', () => { 
    if(!(display.innerHTML == "0")){    
        display.innerHTML = (display.innerHTML == "") ? '0' : display.innerHTML + '00';
    }
});

let numberButtonDot = document.querySelector('#ndot');
numberButtonDot.addEventListener('click', () => {
    if(!display.innerHTML.includes('.')){
        display.innerHTML =(display.innerHTML == "") ? '0.' : display.innerHTML + '.'; 
    }
});

let numberButtonClear = document.querySelector('#clear');
numberButtonClear.addEventListener('click', () => {
    display.innerHTML = ""; 
    smallDisplay.innerHTML = "";
    firstValue = 0;
    secondValue = 0;
    operation = "";
});

let numberButtonBackspace = document.querySelector('#backspace');
numberButtonBackspace.addEventListener('click', () => {
    display.innerHTML = (display.innerHTML).substring(0, (display.innerHTML).length - 1); 
});


let operationsIds = ["plus", "minus", "times", "divided", "power"];
let operationsChar = ["+", "-", "*", "/", "^"];

let numberButtonEqual = document.querySelector('#equal');
numberButtonEqual.addEventListener('click', () => {
    if(display.innerHTML){ //check if there is only the first value (it works even if no operation is selected, to fix)
        if ((smallDisplay.innerHTML).includes("=")){ //check if a previous operation was done
            firstValue = display.innerHTML;
            let lastOperationChar;
            for (let i = 0; i<5; i++){
                if(operation == operationsIds[i]){ lastOperationChar = operationsChar[i]; }
            }
            smallDisplay.innerHTML = firstValue +" "+ lastOperationChar +" "+secondValue+" =";
        } else {
            secondValue = display.innerHTML; 
            smallDisplay.innerHTML = smallDisplay.innerHTML +" "+secondValue+" =";
        };

        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);

        switch (operation) {
            case "plus":
            result = add(firstValue, secondValue);
            break;
            case "minus":
            result = subtract(firstValue, secondValue);
            break;
            case "times":
            result = multiply(firstValue, secondValue);
            break;
            case "divided":
            result = divide(firstValue, secondValue);
            break;
            case "power":
            result = power(firstValue, secondValue);
            break;
        };
            
        display.innerHTML = result;
    };
});

for (let i = 0; i<5; i++){
    let numberButtonOperation = document.querySelector('#'+operationsIds[i]);
    numberButtonOperation.addEventListener('click', () => {
        //if(display.innerHTML && smallDisplay.innerHTML){
            firstValue = display.innerHTML; 
            operation = numberButtonOperation.id;
            smallDisplay.innerHTML = firstValue + " "+operationsChar[i];
            display.innerHTML = "";
        //};
    });
}