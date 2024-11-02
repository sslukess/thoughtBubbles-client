// import { Item } from '@project/types/itemsTypes';
// import { itemArray } from '@project/testing-data/interiemItems'
import getAllThoughtBubbles from "@project/api-methods/getAllThoughtBubbles"

export async function loader() {

    const returnArray = await getAllThoughtBubbles();

    return returnArray;
};

