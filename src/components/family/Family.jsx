import styles from '../profile/profile.module.scss'

export const Family = ({ user }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.title}>Члены семьи</div>
            <div >
                {user?.family.map((person) => (
                    <div key={person.fullName} className={styles.grid}>
                        <div className={styles.key}>{person?.role}</div>
                        <div className={styles.value}>{person?.fullName}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};