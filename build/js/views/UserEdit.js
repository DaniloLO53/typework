import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { View } from "./View";
export class UserEdit extends View {
    regionsMap() {
        return {
            userShow: '.user-show',
            userForm: '.user-form',
        };
    }
    onRender() {
        const userShow = new UserShow(this.regions.userShow, this.model);
        const userForm = new UserForm(this.regions.userForm, this.model);
        userShow.render();
        userForm.render();
    }
    template() {
        return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
      `;
    }
}
