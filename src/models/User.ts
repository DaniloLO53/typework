import axios, { AxiosResponse } from "axios";
import { Callback } from "../utils/Types";
import { Eventing } from "./Eventing";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
};

export class User {
  public events: Eventing = new Eventing();

  constructor(private userProps: UserProps) {}

  get(prop: keyof UserProps): string | number | undefined {
    return this.userProps[prop];
  };

  set(update: Partial<UserProps>): void {
    Object.assign(this.userProps, update);
  }

}