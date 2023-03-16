import axios, { AxiosResponse } from "axios";
import { JoinUrl } from "../helpers/JoinUrl";
import { UserProps } from "./User";

export class Sync {
  constructor(public rootUrl: string) {};

  async save(): Promise<void> {
    const id = this.get('id');

    try {
      if (id) {
        const url = new JoinUrl(this.rootUrl, [id]);
        axios.put(url.join(), this.userProps);

      } else {
        const url = new JoinUrl(this.rootUrl);
        axios.post(url.join(), this.userProps);

      }

    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }

  };

  async fetch(): Promise<void> {
    try {
      const url = new JoinUrl(this.rootUrl, [this.get('id')]);
      const { data }: AxiosResponse = await axios.get(url.join());
      this.set(data);

    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };
};