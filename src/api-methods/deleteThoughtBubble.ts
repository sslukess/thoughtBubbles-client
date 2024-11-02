import { getApiRoute_DeleteThoughtBubble } from "@project/api-methods/API-Endpoints"

async function deleteThoughtBubble(id: number){

    const endpoint = getApiRoute_DeleteThoughtBubble(id);

    const deleteOperation = await fetch(endpoint, {
        method: "POST"
    }); 

    return deleteOperation;

}

export default deleteThoughtBubble;