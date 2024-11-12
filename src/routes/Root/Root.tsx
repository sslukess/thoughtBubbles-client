import { Outlet, Link } from 'react-router-dom';

import styles from './styles.root.module.css';

function Root() {
    return (
        <>
                <nav id={styles.navbar}>
                    <h1 className={styles.header}>thoughtBubbles</h1>
                    <Link to={"thoughtbubbles"}>ThoughtBubbles page</Link>
                    <Link to={"add-thoughtbubble"}>Add ThoughtBubble</Link>
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