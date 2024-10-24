import { Outlet, Link } from 'react-router-dom';

import './styles.root.module.css';

function Root() {

    return (
        <div id='navbar'>
            <nav>
                <h1>\HoardClient/</h1>
            </nav>
            <Link to={"items"}>Items page</Link>
            <Outlet />
        </div>
    )
};

export default Root;