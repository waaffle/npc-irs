import styles from "./topBox.module.scss";
import { users } from "../../data"
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { getTopUsers } from "../../utils/sortFunctions";

export const TopBox = () => {
    const users = useContext(DataContext);
    const topUsers = getTopUsers(users);

    return <div className={styles.topBox}>
        <div className={styles.title}>Лучшие сотрудники</div>
        <div className={styles.title2}>Выполнено задач</div>
        <Link to="/users">
            <div className={styles.list}>
                {
                    topUsers.map((user) => (
                        <div className={styles.listItem} key={user?._id}>
                            <div className={styles.user}>
                                <img src={user?.picture} alt="user photo" />
                                <div className={styles.userTexts}>
                                    <span className={styles.name}>{user?.fullName}</span>
                                    <span className={styles.email}>{user?.email}</span>
                                </div>
                            </div>
                            <span className={styles.completed}>{user?.tasks?.completed}</span>
                        </div>
                    ))
                }
            </div>
        </Link>
    </div>;
};