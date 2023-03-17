import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
const ROOTURL = 'http://localhost:3000/users/';
;
export class User {
    constructor(attrs) {
        this.events = new Eventing();
        this.sync = new Sync(ROOTURL);
        this.attributes = new Attributes(attrs);
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    get get() {
        return this.attributes.get;
    }
    set(update) {
        this.attributes.set(update);
        this.events.trigger('change');
    }
}
