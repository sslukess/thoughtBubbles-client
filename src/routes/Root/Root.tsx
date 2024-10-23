import { Outlet, Link } from 'react-router-dom';

import './styles.root.module.css';

function Root() {

    return (
        <div id='navbar'>
            <nav>
                <h1>Hello I am the root</h1>
            </nav>
            <Link to={"about"}>About page</Link>
            <Outlet />
        </div>
    )
};

export default Root;