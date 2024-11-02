import { ThoughtBubble } from '@project/types/itemsTypes';

// get random topic
function getRandomElements(arr: any) {
    const result = [];
    const numElements = Math.floor(Math.random() * arr.length) + 1; // Random count from 1 to arr.length

    // Create a shallow copy of the array to avoid modifying the original array
    const tempArr = [...arr];

    // Randomly select elements
    for (let i = 0; i < numElements; i++) {
        const randomIndex = Math.floor(Math.random() * tempArr.length);
        result.push(tempArr[randomIndex]);
        tempArr.splice(randomIndex, 1); // Remove the selected element to avoid duplicates
    }

    return result;
}

// topics
const topicsArray = ["Life", "Bicycles", "Food", "Career"];

//items
const itemArray: ThoughtBubble[] = [];
for (let i = 1; i < 10; i++) {

    itemArray.push(
        new ThoughtBubble(2, `thought${i}`, getRandomElements(topicsArray)),
    )
}

export { itemArray, topicsArray };

