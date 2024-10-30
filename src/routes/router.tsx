import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// route elements
import Items from '@project/routes/items-page/Items';
import { loader as itemsLoader } from '@project/routes/items-page/utils'

import AddItem from '@project/routes/add-item-page/AddItem'
import { action as addItemAction } from '@project/routes/add-item-page/utils'

import { action as deleteItemAction } from '@project/routes/delete-item/utils'

//Routes
import Root from './Root/Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "items",
                element: <Items />,
                loader: itemsLoader
            },
            {
                path: "add-item",
                element: <AddItem />,
                action: addItemAction
            },
            {
                path: "items/delete-item/:id",
                action: deleteItemAction
            }
        ]
    }
])

const Routes: React.FC = () => <RouterProvider router={router} />;

export default Routes; 