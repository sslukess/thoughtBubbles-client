import { Item } from '@project/types/itemsTypes';

const itemArray: Item[] = []; 

for (let i = 1; i < 10; i++) {
    itemArray.push(
        new Item(`title${i}`, `body${i}`, `date${i}`), 
    )
}

export { itemArray }; 

