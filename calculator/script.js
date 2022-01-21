const log = console.log;
const calcKeys = document.querySelectorAll('.calc-key');
const printValue = document.querySelector('.cal-display');
const clearKey = document.querySelector('#clear');


calcKeys.forEach(key => {
    key.addEventListener('click', e => {
        const key = e.target;
        const value = key.innerText;
        printNumber(value);
    });
});

const printNumber = (num) => {
    printValue.innerText += num;
}

const clearDisplay = () => {
    printValue.textContent = '';
};

clearKey.addEventListener('click', clearDisplay);