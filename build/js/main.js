import { User } from "./models/User.js";
const danilo = new User({ name: 'Danilo', age: 26 });
danilo.on('click', () => console.log(0));
danilo.on('click', () => console.log(1));
danilo.on('change', () => { });
console.log(danilo.trigger('mouse'));
