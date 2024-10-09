import styles from '../profile/profile.module.scss'

export const Family = ({ user }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.title}>Члены семьи</div>
            <div className={styles.grid}>
                {user?.family.map((person) => (
                    <>
                        <div className={styles.key}>{person?.role}</div>
                        <div className={styles.value}>{person?.fullName}</div>
                    </>
                ))}
            </div>
        </div>
    );
};