import { View } from "./View";
export class UserShow extends View {
    template() {
        return `
        <div>
          <h1>User Show</h1>
          <div>
            User Name: ${this.model.get('name')}
          </div>
          <div>
            User Age: ${this.model.get('age')}
          </div>
        </div>
      `;
    }
}
;
