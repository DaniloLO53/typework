import { Attributes } from "../../attributes/Attributes";
import { Collection } from "../../Collection";
import { Eventing } from "../../eventing/Eventing";
import { Model } from "../../Model";
import { FormAttributes } from "./FormAttributes";

export class Form extends Model<FormAttributes> {
  static buildForm(attributes: FormAttributes) {
    const attrs = new Attributes<FormAttributes>(attributes);
    const events = new Eventing();

    return new Form(attrs, events);
  }

  static buildFormCollection(): Collection<Form> {
    return new Collection<Form>();
  }
};
