import {Outlet, Link} from 'react-router-dom';


function Root() {

    return ( 
        <div>
            <h1>Hello I am the root</h1>
            <Link to={"about"}>About page</Link>
            <Outlet />
        </div>
    )
};

export default Root;