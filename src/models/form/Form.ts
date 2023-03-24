import { Callback, FormAttributes, FormEvents } from "./FormAttributes";

export class Form {
  constructor(
    private attributes: FormAttributes,
    private events: FormEvents = {},
  ) {}

  get<K extends keyof  FormAttributes>(attribute: K): FormAttributes[K]  {
    return this.attributes[attribute];
  }

  set(attributes: Partial<FormAttributes>): void {
    Object.assign(this.attributes, attributes);
  }

  on(eventName: keyof FormEvents, callback: Callback): void {
    this.events[eventName] = this.events[eventName]?.concat([callback]) ?? [callback];
  }

  trigger(eventName: keyof FormEvents): void {
    this.events[eventName]?.forEach((callback) => callback());
  }
};
