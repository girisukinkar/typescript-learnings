import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


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


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

//Giving HTMLSelectElement type to select html element
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    let doc : HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);

    }
    console.log(
       doc
    );
        list.render(doc, type.value, 'end');
});


//GENERICS

const addUID = <T extends {name:string}>(obj: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
    }
    
    let resultOne = addUID({name:'gi',age:27});


//ENUMS
enum PAYMENT_STATUS_TYPE {APPROVED = 1, PENDING = 0, REJECTED = 2, IN_REVIEW = 3}

console.log('PAYMENT TYPE',PAYMENT_STATUS_TYPE.PENDING);