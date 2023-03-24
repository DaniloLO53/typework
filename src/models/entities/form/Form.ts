import { Eventing } from "../../eventing/Eventing";
import { Callback, FormAttributes, FormEvents } from "./FormAttributes";

export class Form {
  public events: Eventing = new Eventing();

  constructor(
    private attributes: FormAttributes,
  ) {}

  get<K extends keyof  FormAttributes>(attribute: K): FormAttributes[K]  {
    return this.attributes[attribute];
  }

  set(attributes: Partial<FormAttributes>): void {
    Object.assign(this.attributes, attributes);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
};
