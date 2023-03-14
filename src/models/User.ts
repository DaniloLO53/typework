interface UserProps {
  name: string;
  age: number;
}

type Calback = () => void;

export class User {
  events: { [key: string]: Calback[] } = {};

  constructor(
    private userProps: UserProps
  ) {}

  get(prop: keyof UserProps): string | number {
    return this.userProps[prop];
  };

  set(update: Partial<UserProps>): void {
    Object.assign(this.userProps, update);
  }

  on(eventName: string, callback: Calback): void {
    this.events[eventName] = [...(this.events[eventName] || []), callback];
  };

  trigger(eventName: string): void {
    this.events[eventName]?.forEach((callback) => callback());
  };
}