import { redirect } from "react-router-dom";

import deleteThoughtBubble from '@project/api-methods/deleteThoughtBubble'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const action = async ({params}: any) => { 

    const idToDelete = params.id;

    await deleteThoughtBubble(idToDelete) // delete that puppy

    return redirect('/thoughtbubbles'); 
}

export { action };