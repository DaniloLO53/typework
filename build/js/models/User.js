var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.get('id');
            if (id) {
                const response = yield this.sync.fetch(id);
                const { data } = response;
                this.set(data);
            }
            else {
                throw new Error('Error on fetching: no id of type number provided');
            }
        });
    }
}
