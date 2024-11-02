import { getApiRoute_CreateThoughtBubble } from "@project/api-methods/API-Endpoints"
import { NoIdThoughtBubble } from "@project/types/itemsTypes"

async function createThoughtBubble(thoughtBubble: NoIdThoughtBubble){

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