import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from './barChartTasks.module.scss'
import { getTasksData } from "../../utils/sortFunctions";


export const BarChartTasks = () => {
    const users = useContext(DataContext);
    const taskData = getTasksData(users);

    return (
        <div className={styles.barTable}>
            <div className={styles.title}>Статистика по задачам</div>
            <ResponsiveContainer width="99%" height={350}>
                <BarChart data={[taskData]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                        contentStyle={{ background: "#fff", border: "none" }}
                        labelStyle={{ display: "none" }}
                        formatter={(value, name) => [`${value} задач`, name]}
                        cursor={false}
                        position={{ y: 50 }}
                    />

                    <Legend />
                    <Bar dataKey="completed" fill="#33B3D3" name="Выполнено" />
                    <Bar dataKey="inJob" fill="#6FCC86" name="В работе" />
                    <Bar dataKey="expired" fill="#5c59a3" name="Просрочено" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};