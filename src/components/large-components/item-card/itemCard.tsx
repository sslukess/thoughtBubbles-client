import { Item, ItemProps } from '@project/types/itemsTypes';
import React from 'react';

const ItemCard: React.FC<ItemProps> = (Props: ItemProps) => {

    const { item: {title, body, date } } = Props;

    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <p><i>{date}</i></p>
        </div>
    )
}; 

export default ItemCard; 