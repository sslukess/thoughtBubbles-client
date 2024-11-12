import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// route elements
import ThoughtBubbles from '@project/routes/thoughtbubbles-page/ThoughtBubbles';
import { loader as itemsLoader } from '@project/routes/thoughtbubbles-page/utils'

import AddThoughtBubble from '@project/routes/add-thoughtbubble-page/AddThoughtBubble'
import { action as addThoughtBubbleAction } from '@project/routes/add-thoughtbubble-page/utils'

import { action as deleteThoughtBubbleAction } from '@project/routes/delete-thoughtbubble/utils'

//Routes
import Root from './Root/Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "thoughtbubbles",
                element: <ThoughtBubbles />,
                loader: itemsLoader
            },
            {
                path: "add-thoughtbubble",
                element: <AddThoughtBubble />,
                action: addThoughtBubbleAction
            },
            {
                path: "thoughtbubbles/delete-thoughtbubble/:id",
                action: deleteThoughtBubbleAction
            }
        ]
    }
])

const Routes: React.FC = () => <RouterProvider router={router} />;

export default Routes; 