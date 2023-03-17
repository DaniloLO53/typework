import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";


const ROOTURL = 'http://localhost:3000/users/';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
};

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    const initialAttrs = new Attributes<UserProps>(attrs);
    const initialEventing = new Eventing();
    const initialApiSync = new ApiSync<UserProps>(ROOTURL);

    return new User(initialAttrs, initialEventing, initialApiSync);
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      ROOTURL,
      (json: UserProps) => User.buildUser(json)
    );
  }
}