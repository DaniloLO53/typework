import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: 'Dan', age: 27 });

const rootElement = document.getElementById('root');

const userForm = new UserForm(rootElement as Element, user);
userForm.render();