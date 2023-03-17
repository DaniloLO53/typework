import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  template(): string {
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

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick
    }
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
      
    }
  }

  onButtonClick(): void {
    console.log('hey there')
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.appendChild(templateElement.content);
  }
}