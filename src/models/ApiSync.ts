import axios, { AxiosPromise, AxiosResponse } from "axios";
import { JoinUrl } from "../helpers/JoinUrl";
import { UserProps } from "./User";

interface HasId {
  id?: number;
};

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {};

  async save(data: T): AxiosPromise {
    const { id } = data;

    try {
      if (id) {
        const url = new JoinUrl(this.rootUrl, [id]);
        return axios.put(url.join(), data);

      } else {
        const url = new JoinUrl(this.rootUrl);
        return axios.post(url.join(), data);

      }

    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }

  };

  async fetch(id: number): AxiosPromise {
    try {
      const url = new JoinUrl(this.rootUrl, [id]);
      return await axios.get(url.join());

    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };
};