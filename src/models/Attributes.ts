import { AnyObject } from "../utils/Types";

export class Attributes<T extends AnyObject> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => { // bound "this"
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  };

  set(update: Partial<T>): void {
    Object.assign(this.data as T, update);
  };
};
