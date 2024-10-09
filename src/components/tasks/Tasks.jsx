import styles from '../profile/profile.module.scss'

export const Tasks = ({ tasks }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.title}>Статистика по задачам</div>
            <div className={styles.grid}>
                <div className={styles.key}>Выполнено</div>
                <div className={styles.value}>{tasks?.completed}</div>
                <div className={styles.key}>В работе</div>
                <div className={styles.value}>{tasks?.in_job}</div>
                <div className={styles.key}>Просрочены</div>
                <div className={styles.value}>{tasks?.expired}</div>
            </div>
        </div>
    );
};