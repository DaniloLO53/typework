import { View } from "./View";
export class UserForm extends View {
    constructor() {
        super(...arguments);
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
}
