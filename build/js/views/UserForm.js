import { View } from "./View";
export class UserForm extends View {
    constructor() {
        super(...arguments);
        this.onSaveModel = () => {
            this.model.save();
        };
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
        <input placeholder=${this.model.get('name')} />
        <button class="set-age">Set random age!</button>
        <button class="set-name">Change name</button>
        <button class="save-model">Save</button>
      </div>
    `;
    }
    eventsMap() {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveModel,
        };
    }
}
