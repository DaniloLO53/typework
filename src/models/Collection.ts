import { Eventing } from "./eventing/Eventing";

export class Collection<T> {
  constructor(
    private models: T[] = [],
    private eventing: Eventing = new Eventing(),
  ) {}

  on = this.eventing.on;
  trigger = this.eventing.trigger;
};
