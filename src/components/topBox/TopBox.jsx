import styles from "./topBox.module.scss";
import { users } from "../../data"
import { DataContext } from "../../context/DataContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getTopUsers } from "../../utils/sortFunctions";
import { UserModal } from "../userModal/UserModal";
import { AnimatePresence } from "framer-motion";

export const TopBox = () => {
    const users = useContext(DataContext);
    const topUsers = getTopUsers(users);

    const [selectedUser, setSelectedUser] = useState(null);

    const closeModal = () => {
        setSelectedUser(null);
    };

    return <div className={styles.topBox}>
        <div className={styles.title}>Лучшие сотрудники</div>
        <div className={styles.title2}>Выполнено задач</div>

        <div className={styles.list}>
            {
                topUsers.map((user) => (
                    <div className={styles.listItem} key={user?._id} onClick={() => setSelectedUser(user)}>
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

        <AnimatePresence>{selectedUser && (
            <UserModal user={selectedUser} closeModal={closeModal} />
        )}
        </AnimatePresence>
    </div>;
};