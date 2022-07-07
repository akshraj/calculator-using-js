const oneBtn = document.getElementById('calc-one')
const twoBtn = document.getElementById('calc-two')
const threeBtn = document.getElementById('calc-three')
const fourBtn = document.getElementById('calc-four')
const fiveBtn = document.getElementById('calc-five')
const sixnBtn = document.getElementById('calc-six')
const sevenBtn = document.getElementById('calc-seven')
const eightBtn = document.getElementById('calc-eight')
const nineBtn = document.getElementById('calc-nine')
const zeroBtn = document.getElementById('calc-zero')
const decimalBtn = document.getElementById('calc-decimal')
const clearBtn = document.getElementById('calc-clear')
const backSpaceBtn = document.getElementById('calc-backspace')
const divideBtn = document.getElementById('calc-divide')
const multiplyBtn = document.getElementById('calc-multiply')
const plusBtn = document.getElementById('calc-plus')
const minusBtn = document.getElementById('calc-minus')
const equalBtn = document.getElementById('calc-equals')
const displayValElement = document.getElementById('calc-display-val')

const calcNumBtns = document.getElementsByClassName('calc-btn-num')
const calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');


let displayVal = '0';
let pendingVal;
let evalStringArr = [];

for (let i = 0; i <= calcNumBtns.length; i++) {
  if (calcNumBtns[i]) calcNumBtns[i].addEventListener('click', updateDisplayVal, false)
}
for (let i = 0; i <= calcOperatorBtns.length; i++) {
  if (calcOperatorBtns[i]) calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

function updateDisplayVal(clickObj) {
  const btnText = clickObj.target.innerText;

  if (displayVal === '0') displayVal = '';
  displayVal += btnText;
  if (displayValElement.scrollLeft !== displayValElement.scrollWidth) {
    window.setInterval(() => {

      displayValElement.scrollBy(10, 0); // X,Y Number
    }, 1);
  }
  displayValElement.innerText = displayVal;
}

clearBtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArr = [];
  displayValElement.innerHTML = displayVal;
}

backSpaceBtn.onclick = () => {

  if (displayVal === '') displayVal = '0';
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
  displayValElement.innerText = displayVal;
}

decimalBtn.onclick = () => {
  if (!displayVal.includes('.')) displayVal += '.';
  displayValElement.innerText = displayVal;
}

function performOperation(clickObj) {
  let operator = clickObj.target.innerText;
  switch (operator) {
    case '+':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArr.push(pendingVal);
      evalStringArr.push('+');
      break;
    case '-':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArr.push(pendingVal);
      evalStringArr.push('-');
      break;
    case 'X':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArr.push(pendingVal);
      evalStringArr.push('*');
      break;
    case '÷':
      pendingVal = displayVal;
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArr.push(pendingVal);
      evalStringArr.push('/');
      break;
    case '=':
      evalStringArr.push(displayVal);
      let evaluation = eval(evalStringArr.join(' '));
      displayValElement.innerText = evaluation.toString();
      evalStringArr = [];
      break;

    default:
      break;

  }
}