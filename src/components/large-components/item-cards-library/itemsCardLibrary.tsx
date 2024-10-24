import { ItemsCardLibraryProps, Item } from '@project/types/itemsTypes';
import ItemCard from '@project/components/large-components/item-card/itemCard'

// styles
import styles from './itemCardLibrary.styles.module.css';

function ItemsCardLibrary( Props: ItemsCardLibraryProps ) {

    const { items } = Props;

    return (
        <div id={styles.cardLibray}>
            {
                items.map(function (item: Item, index: number) {
                    return <ItemCard item={item} key={index} />
                })
            }
        </div>
    )
}

export default ItemsCardLibrary;