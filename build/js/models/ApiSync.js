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
;
export class ApiSync {
    constructor(rootUrl) {
        this.rootUrl = rootUrl;
    }
    ;
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = data;
            try {
                if (id) {
                    const url = new JoinUrl(this.rootUrl, [id]);
                    return axios.put(url.join(), data);
                }
                else {
                    const url = new JoinUrl(this.rootUrl);
                    return axios.post(url.join(), data);
                }
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    ;
    fetch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = new JoinUrl(this.rootUrl, [id]);
                return yield axios.get(url.join());
            }
            catch (error) {
                console.log(error);
                throw new Error(error);
            }
        });
    }
    ;
}
;
