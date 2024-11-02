import { redirect } from "react-router-dom";
//project
import { NoIdThoughtBubble } from '@project/types/itemsTypes';
import createThoughtBubble from '@project/api-methods/createThoughtBubble'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function action({request}: any) {

    const formData = await request.formData();
    const topics = formData.getAll('topics') as string[];
    const thought = formData.getAll('thought') as string[];

    const newThoughtBubble = new NoIdThoughtBubble(thought.join(''), topics);

    await createThoughtBubble(newThoughtBubble);

    return redirect('/items'); 
}