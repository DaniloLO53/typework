export class UserForm {
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.bindModel = () => this.model.on('change', () => this.render());
        this.onSetNameClick = () => {
            const input = this.parent.querySelector('input');
            if (input) {
                const name = input.value;
                this.model.set({ name });
            }
        };
        this.onSetAgeClick = () => {
            this.model.setRandomAge();
        };
        this.bindModel();
    }
    template() {
        return `
      <div>
        <h1>User's Form</h1>
        <div>User's name: ${this.model.get('name')}</div>
        <div>User's age: ${this.model.get('age')}</div>
        <input />
        <button class="set-age">Set random age!</button>
        <button class="set-name">Change name</button>
      </div>
    `;
    }
    eventsMap() {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
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
    render() {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.appendChild(templateElement.content);
    }
}
