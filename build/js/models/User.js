var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { Eventing } from "./Eventing";
;
export class User {
    constructor(userProps) {
        this.userProps = userProps;
        this.events = new Eventing();
    }
    get(prop) {
        return this.userProps[prop];
    }
    ;
    set(update) {
        Object.assign(this.userProps, update);
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.get('id');
            try {
                if (id) {
                    axios.put(`http://localhost:3000/users/${id}`, this.userProps);
                }
                else {
                    axios.post(`http://localhost:3000/users/`, this.userProps);
                }
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    ;
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield axios.get(`http://localhost:3000/users/${this.get('id')}`);
                this.set(data);
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    ;
}
