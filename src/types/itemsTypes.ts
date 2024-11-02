export class NoIdThoughtBubble {
    // id: string; NO ID
    thought: string;
    topics: string[]; 

    constructor(thought: string, topics: string[]){ 
      
        this.thought = thought; 
        this.topics = topics; 
    }

}

export class ThoughtBubble extends NoIdThoughtBubble {

    id: number;

    constructor(id: number, thought: string, topics: string[]){
        super(thought, topics); 

        this.id = id; 
    }

}

// ---- Prop types for item related components --- 

// Props for the ThoughtBubbles component
export interface ThoughtBubblesCardLibraryProps {
    items: ThoughtBubble[]; 
}

// ThoughtBubble Card
export interface ThoughtBubbleProps {
    item: ThoughtBubble; 
}