import { Item } from '@project/types/itemsTypes';
import { v4 as uuidv4 } from 'uuid';

const itemArray: Item[] = []; 

for (let i = 1; i < 10; i++) {
    itemArray.push(
        new Item(uuidv4(), `title${i}`, `body${i}`, `date${i}`), 
    )
}

export { itemArray }; 

