export class NoIdItem {
    // id: string; NO ID
    thought: string;
    topics: string[]; 

    constructor(thought: string, topics: string[]){ 
      
        this.thought = thought; 
        this.topics = topics; 
    }

}

export class Item extends NoIdItem {

    id: number;

    constructor(id: number, thought: string, topics: string[]){
        super(thought, topics); 

        this.id = id; 
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