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
import { JoinUrl } from "../helpers/JoinUrl";
import { Eventing } from "./Eventing";
export class Collection {
    constructor(rootUrl, deserialize) {
        this.rootUrl = rootUrl;
        this.deserialize = deserialize;
        this.models = [];
        this.events = new Eventing();
    }
    get on() {
        return this.events.on;
    }
    get trigger() {
        return this.events.trigger;
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = new JoinUrl(this.rootUrl);
                const response = yield axios.get(url.join());
                const { data } = response;
                data.forEach((value) => {
                    const deserializedValue = this.deserialize(value);
                    this.models.push(deserializedValue);
                });
                this.trigger('change');
            }
            catch (error) {
                this.trigger('error');
                throw new Error('error');
            }
        });
    }
}
