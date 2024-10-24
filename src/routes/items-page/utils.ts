import { Item } from '@project/types/itemsTypes';

export function loader() {
    return [
        new Item("title1", "body1", "date1"), 
        new Item("title2", "body2", "date2"),
        new Item("title3", "body3", "date3")
    ] 
};

