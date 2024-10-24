

class Item {
    #title: string; 
    get title() {
        return this.#title; 
    }
    set title(newTitle) {
        this.#title = newTitle; 
    }

}

export interface ItemsProps {
    items: Item[]; 
}