const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
   const digit = ev.target.innerText;
   display.value += digit;
}

document.querySelectorAll('.operation button')
    .forEach(button => button.addEventListener('click', operationPressed));

function operationPressed(ev) {
   const operation = ev.target.innerText;
   display.value += operation;
}

document.querySelector('.eq').addEventListener('click', eqPressed);

function eqPressed() {
    const disval = display.value;
    let result = eval(display.value);
    if (disval === '') {
        display.value = '';
            } else if (Math.abs(result) == Infinity) {
            display.value = '0';
            } else {
            display.value = result;
    }    
}

document.querySelector('.clean').addEventListener('click', cleanText);

    function cleanText() {
        display.value = '';
    }

document.querySelector('.dot').addEventListener('click', dotPressed);

function dotPressed(ev) {
    const mark = ev.target.innerText;
    if (display.value === '') {
        display.value = '0' + mark;
            } else {
            display.value += mark;
    } 
}

document.querySelector('.deldigit').addEventListener('click', remoweDigit);

    function remoweDigit () {
      const remdig = display.value;
      display.value = remdig.substring(0, remdig.length-1);
}

