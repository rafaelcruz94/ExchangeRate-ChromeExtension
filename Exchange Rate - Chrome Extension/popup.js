'use strict';

//variables
const fromCurEl = document.getElementById('fromCur');
const fromQtyEl = document.getElementById('fromQty');
const toCurEl = document.getElementById('toCur');
const toQtyEl = document.getElementById('toQty');

//Api https://www.exchangerate-api.com/
async function convert() {
	const api = `https://api.exchangerate-api.com/v4/latest/${fromCurEl.value}`;
    const response = await fetch(api);
    const data = await response.json();
	const rate = data.rates[toCurEl.value];
	document.getElementById('rate').innerHTML = `1 ${fromCurEl.value} = ${rate} ${toCurEl.value}`;
	toQtyEl.value = (fromQtyEl.value * rate).toFixed(2);
}

//EventListeners
document.querySelectorAll('select').forEach(item => {
	item.addEventListener('change', convert);
});

document.querySelectorAll('input').forEach(item => {
	item.addEventListener('input', convert);
});

document.getElementById('exchange').addEventListener('click', () => {
	const savedValue = fromCurEl.value;
	fromCurEl.value = toCurEl.value;
    toCurEl.value = savedValue;
	convert();
});

//Load
convert();