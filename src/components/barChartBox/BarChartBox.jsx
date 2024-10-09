import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./barChartBox.module.scss";
import { VisitTooltip } from "../visitTooltip/visitTooltip";

export const BarChartBox = (props) => {
    return (
        <div className={styles.barChartBox}>
            <div className={styles.title}>{props?.title}</div>
            <div className={styles.chart}>
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={props?.chartData}>
                        <Tooltip content={<VisitTooltip />} />
                        <Bar
                            dataKey={props?.dataKey} fill={props?.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
