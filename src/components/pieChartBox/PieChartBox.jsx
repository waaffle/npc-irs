import { useContext } from "react";
import styles from './pieChartBox.module.scss'
import { DataContext } from "../../context/DataContext";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { getAgeData } from "../../utils/sortFunctions";

export const PieChartBox = () => {
    const users = useContext(DataContext);
    const data = getAgeData(users);

    return (
        <div className={styles.pieChartBox}>
            <div className={styles.age}>Возраст сотрудников</div>
            <div className={styles.chart}>
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                            onClick={(e) => e.preventDefault()}
                            style={{ outline: 'none' }}
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.options}>
                {data.map((item) => (
                    <div className={styles.option} key={item.name}>
                        <div className={styles.title}>
                            <div className={styles.dot} style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        -
                        <span className={styles.number}>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};