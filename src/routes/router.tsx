import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

//Routes
import Root from './Root/Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "about",
                element: <h1>Hello I am the child</h1>
            },
            {
                path: "items",
                element: <h1>Hello I am the items</h1>
            }
        ]
    }
])

const Routes: React.FC = () => <RouterProvider router={router} />;

export default Routes; 