import Currency from './3-currency';

const dollar = new Currency('$', 'Dollars');
console.log(typeof dollar);
console.log(dollar instanceof Currency);
console.log(dollar.displayFullCurrency());
