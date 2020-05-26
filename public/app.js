var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { Payment } from './models/Payment.js';
import { Invoice } from './models/invoice.js';
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
var newFormItem = document.getElementById('newItemForm');
// use type casting for input elements
var type = document.getElementById('type');
var tofrom = document.getElementById('tofrom');
var details = document.getElementById('details');
var amount = document.getElementById('amount');
// list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
newFormItem.addEventListener('submit', function (e) {
    // prevent the page refresh when the form is submitted
    e.preventDefault();
    var values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))();
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
var docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'tony' }
};
var docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
var docFive = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
var docSix = {
    uid: 10,
    resourceType: ResourceType.DIRECTOR,
    data: { name: 'yoshi' }
};
console.log(docFive, docSix);
// TUPLES
var arr = ['yoshi', 25, true];
var tup = ['yohsi', 25, true];
tup[0] = 'mario';
tup[1] = 50;
tup[2] = false;
var student;
student = ['ryu', 22555];
