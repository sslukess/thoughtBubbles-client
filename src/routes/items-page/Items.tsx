import ItemCard from "@project/components/large-components/item-card/itemCard"
import { Item } from '@project/types/itemsTypes';
import { useLoaderData } from 'react-router-dom';

function Items() {

    const items = useLoaderData();

    return (
        <div>
            {
                items.map(function (item: Item, index: number) {
                    return <ItemCard item={item} key={index} />
                })
            }
        </div>
    )
}



export default Items; 