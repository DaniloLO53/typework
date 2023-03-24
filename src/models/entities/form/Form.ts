import { Attributes } from "../../attributes/Attributes";
import { Eventing } from "../../eventing/Eventing";
import { Callback, FormAttributes, FormEvents } from "./FormAttributes";

export class Form {
  public events: Eventing = new Eventing();
  public attributes: Attributes<FormAttributes>;;

  constructor(
    public attrs: FormAttributes
  ) {
    this.attributes = new Attributes<FormAttributes>(attrs);
  }

  set(attribute: FormAttributes): void {
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
