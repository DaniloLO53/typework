import { Form } from "./models/form/Form";

const form1 = new Form({method: 'GET', target: '_self'});

form1.set({method: 'POST', target: '_blank'});

const method = form1.get('method');
const target = form1.get('target');

console.log(method, target);