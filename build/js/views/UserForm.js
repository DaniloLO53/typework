export class UserForm {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
    }
    template() {
        return `
      <div>
        <h1>User's Form</h1>
        <div>User's name: ${this.model.get('name')}</div>
        <div>User's age: ${this.model.get('age')}</div>
        <input />
        <button>Click me!</button>
      </div>
    `;
    }
    eventsMap() {
        return {
            'click:button': this.onButtonClick
        };
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
    onButtonClick() {
        console.log('hey there');
    }
    render() {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.appendChild(templateElement.content);
    }
}
