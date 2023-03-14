export class User {
    constructor(userProps) {
        this.userProps = userProps;
        this.events = {};
    }
    get(prop) {
        return this.userProps[prop];
    }
    ;
    set(update) {
        Object.assign(this.userProps, update);
    }
    on(eventName, callback) {
        this.events[eventName] = [...(this.events[eventName] || []), callback];
    }
    ;
    trigger(eventName) {
        var _a;
        (_a = this.events[eventName]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback());
    }
    ;
}
