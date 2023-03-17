export class Attributes {
    constructor(data) {
        this.data = data;
        this.get = (key) => {
            return this.data[key];
        };
    }
    getAll() {
        return this.data;
    }
    ;
    set(update) {
        Object.assign(this.data, update);
    }
    ;
}
;
