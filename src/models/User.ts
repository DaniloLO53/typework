import axios, { AxiosPromise, AxiosResponse } from "axios";
import { Callback } from "../utils/Types";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

const ROOTURL = 'http://localhost:3000/users/';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
};

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(ROOTURL);
  public attributes: Attributes<UserProps>;
  
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  async fetch(): Promise<void> {
    const id = this.get('id');

    if (id) {
      const response: AxiosResponse = await this.sync.fetch(id);
      const { data } = response;

      this.set(data);
    } else {
      throw new Error('Error on fetching: no id of type number provided');
    }
  }
}