//Interfaces

import { Invoice } from './classes/Invoice.js'; //Note : even while working with TS we use JS

const InvoiceOne = new Invoice('Girish','IT work', 1500000);
const InvoiceTwo = new Invoice('Disha','SQL work', 500000);

const invoices : Invoice[] = [];
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);

invoices.forEach(inv => {
    console.log(inv.amount,inv.client, inv.format());
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

//Giving HTMLSelectElement type to select html element
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(
        type.value, tofrom.value, details.value, amount.valueAsNumber
    );
})