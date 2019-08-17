$(document).ready(function() {

  var num1 = '';
  var num2 = '';
  var operator = '';

  function hasDecimal(number) {
    return number.match(/\./g);
  }

  function isValidInput(inputValue, currentValue) {
    return !(inputValue === '.' && hasDecimal(currentValue));
  }

  function selectNumber(value) {
   if (operator === '') {
    if (isValidInput(value, num1)){
      num1 += value;
      screenDisplay(num1);
    }
   } else {
    if (isValidInput(value, num2)) {
      num2 += value;
      screenDisplay(num2)
    }
   }
  }

  function selectOperator(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        calculateTotal()
        operator = oper;
      }
  }

  $('button').click(function(e) {
    var input = $(this).text();
    console.log(input)
    if ((input >= '0' && input <= '9') || input === '.') {
      selectNumber(input);
    } else {
      if (input === 'AC') {
        selectClear(input);
      } //else if {
       // (input === '+/-')

      //}

      else {
        selectOperator(input);
      }
    }
  })

  $('body').keydown(function(e) {
    var input = e.key;
    console.log(e.key)
    if ((input >= '0' && input <= '9') || input === '.') {
      selectNumber(input);
    } else {
      if (input === 'Backspace') {
        selectClear(input);
      } else if (input === '-') {
          selectOperator('-')
      } else if (input === '+') {
          selectOperator('+')
      } else if (input === '/') {
          selectOperator('÷')
      } else if (input === '*') {
          selectOperator('×')
      } else if (input === 'Enter') {
        calculateTotal()
      }
    }
  })

  // $('body').keydown(function(e) {
  //   var input = e.key;
  //   if (input === 'Enter') {
  //     calculateTotal()
  // }

  function screenDisplay(x) {
    $('.calculator-screen').text(x);
  }

  function updateVariables() {
    num1 = total;
    num2 = '';
  }

  function calculateTotal() {
    switch (operator) {
      case '+':
        total = +num1 + +num2;
        screenDisplay(total);
        break;
      case '-':
        total = +num1 - +num2;
        screenDisplay(total);
        break;
      case '÷':
        total = +num1 / +num2;
        screenDisplay(total);
        break;
      case '×':
        total = +num1 * +num2;
        screenDisplay(total);
        break;
      case '%':
        total = +num1 / 100;
        screenDisplay(total);
        break;
    }
    updateVariables();
  }

  function selectClear() {
    num1 = '';
    num2 = '';
    operator = '';
    screenDisplay('0');
  }

  // function selectPositiveNegative(numInput) {
  //   if (numInput === 0) {
  //     numInput = numInput;
  //   } else

  //   num1 = '-' + num1
  // }


});
