export class Eventing {
    constructor() {
        this.events = {};
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
;
