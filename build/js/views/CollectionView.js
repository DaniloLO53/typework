export class CollectionView {
    constructor(parent, collection) {
        this.parent = parent;
        this.collection = collection;
    }
    render() {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        for (let model of this.collection.models) {
            const itemParent = document.createElement('div');
            this.renderItem(model, itemParent);
            templateElement.content.appendChild(itemParent);
        }
        this.parent.appendChild(templateElement.content);
    }
}
