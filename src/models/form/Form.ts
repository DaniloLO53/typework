import { FormAttributes } from "./FormAttributes";

export class Form {
  constructor(
    private attributes: FormAttributes
  ) {}

  get<K extends keyof  FormAttributes>(attribute: K): FormAttributes[K]  {
    return this.attributes[attribute];
  }

  set(attributes: Partial<FormAttributes>): void {
    const attrsList = Object.entries(attributes);

    attrsList.forEach((attr) => {
      const [name, type] = attr;

      this.attributes[name] = type;
    })
  }
};
