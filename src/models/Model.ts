import { AxiosPromise, AxiosResponse } from "axios";
import { AnyObject, Callback } from "../utils/Types";

interface ModelAttributes<T extends AnyObject> {
  get<K extends keyof T>(key: K): T[K];

  getAll(): T;

  set(update: Partial<T>): void;
}

interface Sync<T> {
  save(data: T): AxiosPromise;

  fetch(id: number): AxiosPromise;
}

interface Events {
  on(event: string, callback: Callback): void;

  trigger(event: string): void;
}

export class Model<T extends AnyObject> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
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

  async save(): Promise<void> {
    try {
      await this.sync.save(this.attributes.getAll());
      this.trigger('save');

    } catch (error) {
      this.trigger('error');
      throw new Error('Error on saving');

    }
  }
};