import styles from './visitTooltip.module.scss'

export const VisitTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.visitTooltip}>
                <p>{`Посещений: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};