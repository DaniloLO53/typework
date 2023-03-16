export class Attributes {
    constructor(userProps) {
        this.userProps = userProps;
        this.get = (key) => {
            return this.userProps[key];
        };
    }
    set(update) {
        Object.assign(this.userProps, update);
    }
}
;
