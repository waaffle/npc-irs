import styles from './customTooltip.module.scss'

export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.customTooltip}>
                <p>{`Возраст: ${payload[0].payload.age}`}</p>
                <p>{`Зарплата: ${payload[0].payload.salary} ₽`}</p>
            </div>
        );
    }

    return null;
};