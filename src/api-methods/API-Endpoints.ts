// These are the API Endpoints used in the applcation.
// Update these to relect any changes in the API Routing

const API_URL = import.meta.env.VITE_THOUGHTBUBBLES_API_URL; 

// Get all Thought Bubbles
function getApiRoute_GetAllThoughtBubbles(){
    return `${API_URL}/thoughtbubbles`;
}

// Get Bubble by ID
function getApiRoute_GetThoughtBubbleById(){
    return `${API_URL}/thoughtbubbles`;
}

// Create Bubble
function getApiRoute_CreateThoughtBubble(){
    return `${API_URL}/thoughtbubbles`;
}

// Delete Bubble
function getApiRoute_DeleteThoughtBubble(id: number){
    return `${API_URL}/thoughtbubbles/delete/${id}`;
}

export {
    getApiRoute_GetAllThoughtBubbles,
    getApiRoute_GetThoughtBubbleById,
    getApiRoute_CreateThoughtBubble,
    getApiRoute_DeleteThoughtBubble
};

