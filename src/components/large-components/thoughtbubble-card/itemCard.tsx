import { ThoughtBubbleProps } from '@project/types/itemsTypes';
import React from 'react';
import { Form } from "react-router-dom";

// Styles
import styles from './itemCard.styles.module.css';

const ThoughtBubbleCard: React.FC<ThoughtBubbleProps> = (Props: ThoughtBubbleProps) => {

    const { item: { id, thought, topics } } = Props;

    const action = `delete-item/${id}`;

    return (
        <div className={styles.itemCard}>
            <div className={styles.itemVisualCard}>
                <Form method='post' action={action}>
                    <button type="submit">X</button>
                </Form>
                <h3 className={styles.itemTitle}>{thought}</h3>
                <p className={styles.itemBody}>{topics}</p>
            </div>
        </div>
    )
};

export default ThoughtBubbleCard; 