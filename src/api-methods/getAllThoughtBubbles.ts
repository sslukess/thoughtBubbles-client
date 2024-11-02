import { getApiRoute_GetAllThoughtBubbles } from "@project/api-methods/API-Endpoints"
import { ThoughtBubble } from "@project/types/itemsTypes"

async function getAllThoughtBubbles(){

    const endpoint = getApiRoute_GetAllThoughtBubbles();

    const allThoughtBubblesResponse = await fetch(endpoint);

    if (!allThoughtBubblesResponse.ok) {
        throw new Error(`Response status: ${allThoughtBubblesResponse.status}`);
      }

    const allThoughtBubblesJson = await allThoughtBubblesResponse.json() as ThoughtBubble[];

    return allThoughtBubblesJson;
}

export default getAllThoughtBubbles;