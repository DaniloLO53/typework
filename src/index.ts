import { Form } from "./models/form/Form";

const form1 = new Form({method: 'GET', target: '_self'});

form1.set({method: 'POST', target: '_blank'});

const method = form1.get('method');
const target = form1.get('target');

form1.on('click', () => console.log('Clicked'));
form1.on('click', () => console.log('Clicked2'));
form1.on('hover', () => console.log('Clicked'));

console.log(form1);