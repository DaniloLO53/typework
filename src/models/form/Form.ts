import { FormAttributes } from "./FormAttributes";

export class Form {
  constructor(
    private attributes: FormAttributes
  ) {}

  get<K extends keyof  FormAttributes>(attribute: K): FormAttributes[K]  {
    return this.attributes[attribute];
  }
};
