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
    if(num2 == 0){
        alert("You can't divide by 0, the result would be Infinity!");
        clearAll();
        return "";
    } else return Math.round((num1/num2) * 100000) / 100000;
};

const power = function(num1, num2) {
    return Math.round((Math.pow(num1, num2)) * 100000) / 100000;
};

const equal = function(){
    if(firstValue != undefined && operation != undefined && display.innerHTML != "" && display.innerHTML != "-"){ //check if there is only the first value
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
}

const clearAll = function(){
    display.innerHTML = ""; 
    smallDisplay.innerHTML = "";
    firstValue = undefined;
    secondValue = undefined;
    operation = undefined;
}

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
numberButtonClear.addEventListener('click', clearAll);

let numberButtonBackspace = document.querySelector('#backspace');
numberButtonBackspace.addEventListener('click', () => {
    display.innerHTML = (display.innerHTML).substring(0, (display.innerHTML).length - 1); 
});


let operationsIds = ["plus", "minus", "times", "divided", "power"];
let operationsChar = ["+", "-", "*", "/", "^"];

let numberButtonEqual = document.querySelector('#equal');
numberButtonEqual.addEventListener('click', equal);

for (let i = 0; i<5; i++){
    let numberButtonOperation = document.querySelector('#'+operationsIds[i]);
    numberButtonOperation.addEventListener('click', () => {
        if(display.innerHTML != "" && display.innerHTML != "-"){
            if((smallDisplay.innerHTML).includes("+") || (smallDisplay.innerHTML).includes("-") || (smallDisplay.innerHTML).includes("*") || (smallDisplay.innerHTML).includes("/") || (smallDisplay.innerHTML).includes("^")) { //check if the button is used as an equal like 3+3+
                equal();
                firstValue = display.innerHTML;
                secondValue = undefined;
                operation = numberButtonOperation.id;
                smallDisplay.innerHTML = display.innerHTML + " "+operationsChar[i];
                display.innerHTML = "";
            } else {
                firstValue = display.innerHTML; 
                operation = numberButtonOperation.id;
                smallDisplay.innerHTML = firstValue + " "+operationsChar[i];
                display.innerHTML = "";
            }
        } else {
            if(numberButtonOperation.id == "minus" && !(display.innerHTML).includes("-")){
                display.innerHTML = "-";
            }
        };
    });
}