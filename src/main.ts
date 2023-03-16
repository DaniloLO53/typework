import axios from 'axios';
import { User } from './models/User';

const rafa = new User({ id: 2 });
rafa.set({name: 'rafaa', age: 5});
rafa.save();