import axios, { AxiosResponse } from "axios";
import { Callback } from "../utils/Types";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
};

export class User {
  constructor(private userProps: UserProps) {}

  get(prop: keyof UserProps): string | number | undefined {
    return this.userProps[prop];
  };

  set(update: Partial<UserProps>): void {
    Object.assign(this.userProps, update);
  }

  async save(): Promise<void> {
    const id = this.get('id');

    try {
      if (id) {
        axios.put(`http://localhost:3000/users/${id}`, this.userProps);

      } else {
        axios.post(`http://localhost:3000/users/`, this.userProps);

      }

    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }

  };

  async fetch(): Promise<void> {
    try {
      const { data }: AxiosResponse = await axios.get(`http://localhost:3000/users/${this.get('id')}`);
      this.set(data);

    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  };
}