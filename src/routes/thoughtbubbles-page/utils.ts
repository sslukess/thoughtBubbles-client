// import { ThoughtBubble } from '@project/types/itemsTypes';
// import { itemArray } from '@project/testing-data/interiemThoughtBubbles'
import getAllThoughtBubbles from "@project/api-methods/getAllThoughtBubbles"

export async function loader() {

    const returnArray = await getAllThoughtBubbles();

    return returnArray;
};

