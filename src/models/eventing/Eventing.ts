import { Callback, FormEvents } from "../entities/form/FormAttributes";

export class Eventing {
  constructor(
    private events: FormEvents = {},
  ) {}

  on(eventName: keyof FormEvents, callback: Callback): void {
    this.events[eventName] = this.events[eventName]?.concat([callback]) ?? [callback];
  }

  trigger(eventName: keyof FormEvents): void {
    this.events[eventName]?.forEach((callback) => callback());
  }
}
