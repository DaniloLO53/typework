import { UserProps } from "./User";

export class Attributes<T> {
  constructor(private userProps: T) {}

  get = <K extends keyof T>(key: K): T[K] => { // bound "this"
    return this.userProps[key];
  };

  set(update: T): void {
    Object.assign(this.userProps as UserProps, update);
  }
};