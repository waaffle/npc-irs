import { useContext } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DataContext } from "../../context/DataContext";
import { getSampleData } from "../../utils/getSampleData";
import { CustomTooltip } from "../customTooltip/CustomTooltip";

export const SalaryChart = () => {
    const users = useContext(DataContext);

    const salaryAgeData = users.map(user => ({
        age: user.age,
        salary: user.salary
    })).sort((a, b) => a.age - b.age);

    const sampledData = getSampleData(salaryAgeData, 5);

    return (
        <div>
            <ResponsiveContainer width="99%" height={180}>
                <LineChart data={sampledData} margin={{ right: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="age"
                    />
                    <YAxis
                        domain={[40000, 'auto']}
                        label={{ value: 'Зарплата', angle: -90, position: 'insideLeft', dy: 25 }}
                        tickFormatter={(value) => (`${(value / 1000).toFixed(0)}k`)}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="salary" stroke="#33B3D3" name="Зарплата" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

