import { Payment } from './models/Payment.js';
import { Invoice } from './models/invoice.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './models/ListTemplate.js';

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

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

newFormItem.addEventListener('submit', (e: Event) => {
  // prevent the page refresh when the form is submitted
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

// GENERICS
const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'tony' }
};

const docFour: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk']
};

console.log(docThree, docFour);

// ENUMS

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR
}

interface ResourceEnum<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}
const docFive: ResourceEnum<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
};

const docSix: ResourceEnum<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { name: 'yoshi' }
};

console.log(docFive, docSix);

// TUPLES
let arr = ['yoshi', 25, true];

let tup: [string, number, boolean] = ['yohsi', 25, true];

tup[0] = 'mario';
tup[1] = 50;
tup[2] = false;

let student: [string, number];

student = ['ryu', 22555];
