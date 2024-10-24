import { ItemProps } from '@project/types/itemsTypes';
import React from 'react';

// Styles
import styles from './itemCard.styles.module.css';

const ItemCard: React.FC<ItemProps> = (Props: ItemProps) => {

    const { item: { title, body, date } } = Props;

    return (
        <div className={styles.itemCard}>
            <div className={styles.itemVisualCard}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemBody}>{body}</p>
                <p className={styles.itemDate}>{date}</p>
            </div>
        </div>
    )
};

export default ItemCard; 