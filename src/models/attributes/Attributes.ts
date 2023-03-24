export class Attributes<T> {
  constructor(
    private attributes: T,
  ) {}

  get<K extends keyof  T>(attribute: K): T[K]  {
    return this.attributes[attribute];
  }

  set(attributes: Partial<T>): void {
    Object.assign(this.attributes || {}, attributes);
  }
};
