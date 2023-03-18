import { CollectionView } from "./CollectionView";
import { UserShow } from "./UserShow";
export class UserList extends CollectionView {
    renderItem(model, itemParent) {
        new UserShow(itemParent, model).render();
    }
}
;
