import axios from 'axios';

const x = axios.post('http://localhost:3000/users', {
  name: 'Dani',
  age: 30
});
console.log(x)