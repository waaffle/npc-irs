import cn from "classnames";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuContext } from "../../context/MenuContext";
import styles from "./menu.module.scss";

export const Menu = () => {
    const { isOpen, changeOpen } = useContext(MenuContext);

    return (
        <div className={cn(
            styles.menu,
            isOpen && styles.open
        )}>
            <div className={styles.logo}>

                <button className={styles.menuButton} onClick={changeOpen}>
                    {isOpen ?
                        <img className={styles.img} src="reo_logo.png" alt="logo" />
                        :
                        <img className={styles.img} src="/burger-menu.svg" alt="" />}
                </button>
            </div>
            <Link to="/" className={cn(styles.menuItem, isOpen && styles.open)}>
                <img className={styles.icon} src="/home.svg" alt="" />
                {isOpen && <div className={styles.text}>Главная страница</div>}
            </Link>
            <Link to="/users" className={cn(styles.menuItem, isOpen && styles.open)}>
                <img className={styles.icon} src="/user.svg" alt="" />
                {isOpen && <div className={styles.text}>Сотрудники</div>}
            </Link>
        </div>
    );
};

