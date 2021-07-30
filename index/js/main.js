let money = 20000;
let income = '5000';
let addExpenses = '568, 1000, 761';
let deposit = false;
let mission = 1e6;
let period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
console.log(addExpenses);

let budgetDay = money / 30;
console.log(budgetDay);
