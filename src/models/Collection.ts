import axios, { AxiosResponse } from "axios";
import { JoinUrl } from "../helpers/JoinUrl";
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T
    ) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetch(): Promise<void> {
    try {
      const url = new JoinUrl(this.rootUrl);
      const response: AxiosResponse = await axios.get(url.join());
      const { data } = response;

      data.forEach((value: K)  => {
        const deserializedValue = this.deserialize(value);
        this.models.push(deserializedValue);
      });

      this.trigger('change');

    } catch (error) {
      this.trigger('error');

      throw new Error('error');
    }
  }
}