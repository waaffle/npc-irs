import { Link } from "react-router-dom";
import styles from "./navbar.module.scss"

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link to="/" className={styles.link}>
                <img src="/home-black.svg" alt="" />
            </Link>
            <Link to="/users" className={styles.link}>
                <img src="/user-black.svg" alt="" />
            </Link>
            <img src="/search.svg" alt="" className={styles.icon} />
            <img src="/app.svg" alt="" className={styles.icon} />
            <img src="/expand.svg" alt="" className={styles.icon} />
            <div className={styles.notification}>
                <img src="./notifications.svg" alt="" />
                <span >1</span>
            </div>
            <div className={styles.user}>
                <img src="https://cdn1.flamp.ru/f8022ed92cd32799070d11040b63d6e2.jpg" alt="" />
                <span>Admin</span>
            </div>
            <img src="/settings.svg" alt="" className={styles.icon} />
        </div>
    );
};

