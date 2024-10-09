import styles from './mainInfo.module.scss'

export const MainInfo = ({ user }) => {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.container}>
                <img className={styles.avatar} src={user?.picture} alt="avatar" />
                <div className={styles.info}>
                    <div className={styles.title}>{user.fullName}</div>
                    <a href="#" className={styles.detail}>
                        <img className={styles.img} src="/phone.svg" alt="" />
                        {user?.phone}
                    </a>
                    <a href="#" className={styles.detail}>
                        <img className={styles.img} src="/email.svg" alt="" />
                        {user?.email}
                    </a>
                    <a href="#" className={styles.detail}>
                        <img className={styles.img} src="/telegram.svg" alt="" />
                        {user?.telegram}
                    </a>
                </div>
            </div>
        </div>
    );
};