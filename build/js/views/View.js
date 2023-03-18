export class View {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.bindModel = () => this.model.on('change', () => this.render());
        this.bindModel();
    }
    bindEvents(fragment) {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }
    render() {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.appendChild(templateElement.content);
    }
}
;
