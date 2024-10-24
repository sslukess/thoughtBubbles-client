import { Outlet, Link } from 'react-router-dom';

// note that this is general import, not scoped. 
import './styles.root.module.css';
import Styles from './styles.root.module.css';

function Root() {
    return (
        <>
                <nav id={Styles.navbar}>
                    <h1>\HoardClient/</h1>
                    <Link to={"items"}>Items page</Link>
                </nav>
            <main>
                <section id={Styles["main-content"]}>
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default Root;