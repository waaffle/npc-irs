import styles from './layout.module.scss'
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { Navbar } from '../navbar/Navbar';
import { Menu } from '../menu/Menu';

export const Layout = () => {
    return (
        <div className={styles.main}>
            <Menu />
            <div className={styles.container}>
                <Navbar />
                <div className={styles.contentContainer}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}