import { ThoughtBubblesCardLibraryProps, ThoughtBubble } from '@project/types/itemsTypes';
import ThoughtBubbleCard from '@project/components/large-components/thoughtbubble-card/itemCard'

// styles
import styles from './itemCardLibrary.styles.module.css';

function ThoughtBubblesCardLibrary( Props: ThoughtBubblesCardLibraryProps ) {

    const { items } = Props;

    return (
        <div id={styles.cardLibray}>
            {
                items.map(function (item: ThoughtBubble, index: number) {
                    return <ThoughtBubbleCard item={item} key={index} />
                })
            }
        </div>
    )
}

export default ThoughtBubblesCardLibrary;