//Interfaces
import { Invoice } from './classes/Invoice.js'; //Note : even while working with TS we use JS
const InvoiceOne = new Invoice('Girish', 'IT work', 1500000);
const InvoiceTwo = new Invoice('Disha', 'SQL work', 500000);
const invoices = [];
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);
invoices.forEach(inv => {
    console.log(inv.amount, inv.client, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
//Giving HTMLSelectElement type to select html element
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
