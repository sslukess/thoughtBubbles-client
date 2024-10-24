export class Item {

    title: string;
    body: string; 
    date: string; 

    constructor(title: string, body: string, date: string){ 
        this.body = body; 
        this.title = title; 
        this.date = date;
    }
    
    // // Getters and setters
    // get title() {
    //     return this.#title; 
    // }
    // set title(newTitle) {
    //     this.#title = newTitle; 
    // }
}

// ---- Prop types for item related components --- 

// Props for the Items component
export interface ItemsProps {
    items: Item[]; 
}

// Item Card
export interface ItemProps {
    item: Item; 
}