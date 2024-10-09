import cn from "classnames";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../context/MenuContext";
import styles from "./menu.module.scss";
import { motion } from "framer-motion";

export const Menu = () => {
    const { isOpen, changeOpen } = useContext(MenuContext);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1400 && isOpen) {
                changeOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen, changeOpen]);
    return (
        <motion.div
            className={cn(styles.menu)}
            animate={{ width: isOpen ? 300 : (window.innerWidth <= 1400 ? 80 : 100) }}
            initial={{ width: 100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className={styles.logo}>
                <button className={styles.menuButton} onClick={changeOpen}>
                    {isOpen ? (
                        <img className={styles.img} src="reo_logo.png" alt="logo" />
                    ) : (
                        <img className={styles.img} src="/burger-menu.svg" alt="menu" />
                    )}
                </button>
            </div>

            <Link to="/" className={cn(styles.menuItem)}>
                <img className={styles.icon} src="/home.svg" alt="home" />
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.2,
                            delay: 0.2
                        }}
                        className={styles.text}
                    >
                        Главная страница
                    </motion.div>
                )}
            </Link>

            <Link to="/users" className={cn(styles.menuItem)}>
                <img className={styles.icon} src="/user.svg" alt="users" />
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.2,
                            delay: 0.2
                        }}
                        className={styles.text}
                    >
                        Сотрудники
                    </motion.div>
                )}
            </Link>
        </motion.div>
    );
};
