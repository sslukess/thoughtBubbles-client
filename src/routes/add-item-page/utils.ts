import { redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
//project
import { itemArray } from '@project/testing-data/interiemItems'
import { Item } from '@project/types/itemsTypes';

export async function action({request}: any) {

    const formData = await request.formData();
    const objectData = Object.fromEntries(formData);

    const newItem = new Item(uuidv4(), objectData.name, objectData.thought, objectData.date)

    itemArray.push(newItem)

    return redirect('/items'); 
}