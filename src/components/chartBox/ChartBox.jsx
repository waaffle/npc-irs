import { Link } from 'react-router-dom';
import styles from './chartBox.module.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

export const ChartBox = (props) => {
    return (
        <div className={styles.chartBox}>
            <div className={styles.boxInfo}>
                <div className={styles.title}>
                    <img className={styles.icon} src={props?.icon} alt="" />
                    <span>{props?.title}</span>
                </div>
                <div className={styles.bigText}>{props?.number}</div>
                <Link to={`/${props.link}`} style={{ color: props?.color }}>Посмотреть всё</Link>
            </div>
            <div className={styles.chartInfo}>
                <div className={styles.chart}>
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props?.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 50 }}
                                formatter={(value) => [value, props?.name]}
                            />
                            <Line
                                type="monotone"
                                dataKey={props?.dataKey}
                                stroke={props?.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className={styles.texts}>
                    <span className={styles.percentage} style={{ color: props?.percentage < 0 ? "tomato" : "#6FCC86" }}>{props.percentage}%</span>
                    <span className={styles.duration}>в этом месяце</span>
                </div>
            </div>
        </div>
    );
};