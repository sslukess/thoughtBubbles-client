import { Outlet, Link } from 'react-router-dom';

import styles from './styles.root.module.css';

function Root() {
    return (
        <>
                <nav id={styles.navbar}>
                    <h1 className={styles.header}>ThoughtBubbles</h1>
                    {/* <Link to={"items"}>Items page</Link> */}
                </nav>
            <main>
                <section id={styles["main-content"]}>
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default Root;