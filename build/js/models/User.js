import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
const ROOTURL = 'http://localhost:3000/users/';
;
export class User extends Model {
    static buildUser(attrs) {
        const initialAttrs = new Attributes(attrs);
        const initialEventing = new Eventing();
        const initialApiSync = new ApiSync(ROOTURL);
        return new User(initialAttrs, initialEventing, initialApiSync);
    }
    static buildUserCollection() {
        return new Collection(ROOTURL, (json) => User.buildUser(json));
    }
}
