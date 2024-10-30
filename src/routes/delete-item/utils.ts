import { redirect } from "react-router-dom";
import { itemArray } from '@project/testing-data/interiemItems'

const action = ({params}) => { 

    // TODO replace with real delete process

    const idToDelete = params.id;
    const indexToDelete = itemArray.findIndex((item) => {
        return item.id == idToDelete
    })
    if (indexToDelete > -1 && indexToDelete < itemArray.length) {
        itemArray.splice(indexToDelete, 1); // remove 1 element at the specified index
    }

    return redirect('/items'); 
}

export { action };