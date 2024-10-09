import styles from '../profile/profile.module.scss'

export const Education = ({ education }) => {
    if (!education) return null;
    return (
        <div className={styles.profile}>
            <div className={styles.title}>Образование</div>
            <div className={styles.grid}>
                <div className={styles.key}>Университет</div>
                <div className={styles.value}>{education?.university}</div>
                <div className={styles.key}>Годы обучения</div>
                <div className={styles.value}>{education?.years}</div>
            </div>
        </div>
    );
};