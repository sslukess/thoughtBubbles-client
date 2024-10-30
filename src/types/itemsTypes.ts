export class Item {

    id: string;
    thought: string;
    topics: string[]; 

    constructor(id: string, thought: string, topics: string[]){ 
        this.id = id; 
        this.thought = thought; 
        this.topics = topics; 
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