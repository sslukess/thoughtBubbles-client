import { redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
//project
import { itemArray } from '@project/testing-data/interiemItems'
import { Item } from '@project/types/itemsTypes';

export async function action({request}) {

    const formData = await request.formData();
    
    const topics = formData.getAll('topics') as string[];
    const thought = formData.getAll('thought') as string;

    const newItem = new Item(uuidv4(), thought, topics);

    itemArray.push(newItem);

    return redirect('/items'); 
}