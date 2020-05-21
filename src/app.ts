import { Payment } from './models/Payment.js';
import { Invoice } from './models/invoice.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];

// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invoiceOne = new Invoice('mario', 'work on the mario websit', 500);
// const invoiceTwo = new Invoice('luigi', 'work on the luigi websit', 300);

// this says that only invoice objects can be added to this array.
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

// use type casting for form element
const newFormItem = document.getElementById('newItemForm') as HTMLFormElement;

// use type casting for input elements
const type = document.getElementById('type') as HTMLSelectElement;
const tofrom = document.getElementById('tofrom') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;

newFormItem.addEventListener('submit', (e: Event) => {
  // prevent the page refresh when the form is submitted
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});
