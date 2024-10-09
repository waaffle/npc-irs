import styles from './profile.module.scss'

export const Profile = ({ user }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.title}>Общая информация</div>
            <div className={styles.grid}>
                <div className={styles.key}>Пол</div>
                <div className={styles.value}>{user?.gender}</div>
                <div className={styles.key}>Возраст</div>
                <div className={styles.value}>{user?.age}</div>
                <div className={styles.key}>Дата рождения</div>
                <div className={styles.value}>{user?.dateOfBirth}</div>
                <div className={styles.key}>Должность</div>
                <div className={styles.value}>{user?.post}</div>
                <div className={styles.key}>Зарплата</div>
                <div className={styles.value}>{user?.salary} р</div>
                <div className={styles.key}>Адрес</div>
                <div className={styles.value}>{user?.address}</div>
                <div className={styles.key}>О себе</div>
                <div className={styles.value}>{user?.about}</div>

            </div>
        </div>
    );
};