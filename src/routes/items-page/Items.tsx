import { Item } from '@project/types/itemsTypes';
import { useLoaderData } from 'react-router-dom';

// Components
import ItemsCardLibrary from "@project/components/large-components/item-cards-library/itemsCardLibrary"

function Items() {

    const items = useLoaderData() as Item[];

    return <ItemsCardLibrary items={items} />
}



export default Items; 