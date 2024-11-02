import { getApiRoute_CreateThoughtBubble } from "@project/api-methods/API-Endpoints"
import { NoIdItem } from "@project/types/itemsTypes"

async function createThoughtBubble(thoughtBubble: NoIdItem){

    const endpoint = getApiRoute_CreateThoughtBubble();

    const createdThoughtBubble = await fetch(endpoint, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json' // Setting the media type to JSON
        },
        body: JSON.stringify(thoughtBubble),
    }); 

    return createdThoughtBubble;
}

export default createThoughtBubble;