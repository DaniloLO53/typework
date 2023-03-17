import { Callback } from "../utils/Types";

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => { // bound "this
    this.events[eventName] = [...(this.events[eventName] || []), callback];
  };

  trigger = (eventName: string): void => { // bound "this"
    this.events[eventName]?.forEach((callback) => callback());
  };
};