export class Item {

    id: string;
    title: string;
    body: string; 
    date: string;

    constructor(id: string, title: string, body: string, date: string){ 
        this.id = id; 
        this.body = body; 
        this.title = title; 
        this.date = date;
    }
}

// ---- Prop types for item related components --- 

// Props for the Items component
export interface ItemsCardLibraryProps {
    items: Item[]; 
}

// Item Card
export interface ItemProps {
    item: Item; 
}