// get elements

const priceInput = document.querySelector('[name="price"]');
const quantityInput = document.querySelector('#quantityRange');
const quantityNumber = document.querySelector('.quantity-number');
const totalValue = document.querySelector('.total-value');

// functions

function calculateItemValue() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    quantityNumber.innerText = quantity;
    const total = price * quantity;
    totalValue.innerText = total.toFixed(2) + ' €';
}

// add eventListeners

priceInput.addEventListener('input', calculateItemValue);
quantityInput.addEventListener('input', calculateItemValue);
quantityNumber.addEventListener('input', calculateItemValue);