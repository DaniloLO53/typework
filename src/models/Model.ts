import { Callback } from "./entities/form/FormAttributes";

interface Attributes<T> {
  get<K extends keyof T>(attribute: K): T[K];
  set(attributes: Partial<T>): void 
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void
}

export class Model<T> {
  constructor(
    private attributes: Attributes<T>,
    private events: Events,
  ) {}

  set(attribute: T): void {
    this.attributes.set(attribute);
    this.events.trigger('change');
  }

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}; 
