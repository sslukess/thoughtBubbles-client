import { ThoughtBubble } from '@project/types/itemsTypes';
import { useLoaderData } from 'react-router-dom';

// Components
import ThoughtBubblesCardLibrary from "@project/components/large-components/thoughtbubble-cards-library/itemsCardLibrary"

function ThoughtBubbles() {

    const items = useLoaderData() as ThoughtBubble[];

    return <ThoughtBubblesCardLibrary items={items} />
}

export default ThoughtBubbles; 