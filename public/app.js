import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/Invoice.js'; //Note : even while working with TS we use JS
import { Payment } from './classes/Payment.js'; //Note : even while working with TS we use JS
/* const InvoiceOne = new Invoice('Girish','IT work', 1500000);
const InvoiceTwo = new Invoice('Disha','SQL work', 500000);

const invoices : Invoice[] = [];
invoices.push(InvoiceOne);
invoices.push(InvoiceTwo);

invoices.forEach(inv => {
    console.log(inv.amount,inv.client, inv.format());
}) */
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//Giving HTMLSelectElement type to select html element
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
//GENERICS
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let resultOne = addUID({ name: 'gi', age: 27 });
//ENUMS
var PAYMENT_STATUS_TYPE;
(function (PAYMENT_STATUS_TYPE) {
    PAYMENT_STATUS_TYPE[PAYMENT_STATUS_TYPE["APPROVED"] = 1] = "APPROVED";
    PAYMENT_STATUS_TYPE[PAYMENT_STATUS_TYPE["PENDING"] = 0] = "PENDING";
    PAYMENT_STATUS_TYPE[PAYMENT_STATUS_TYPE["REJECTED"] = 2] = "REJECTED";
    PAYMENT_STATUS_TYPE[PAYMENT_STATUS_TYPE["IN_REVIEW"] = 3] = "IN_REVIEW";
})(PAYMENT_STATUS_TYPE || (PAYMENT_STATUS_TYPE = {}));
console.log('PAYMENT TYPE', PAYMENT_STATUS_TYPE.PENDING);
