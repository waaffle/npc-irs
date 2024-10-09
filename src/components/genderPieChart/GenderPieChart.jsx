import { useContext } from 'react';
import styles from './genderPieChart.module.scss'
import { DataContext } from '../../context/DataContext';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { renderCustomizedLabel } from '../renderCustomizedLabel/renderCustomizedLabel';
import { getGenderData } from '../../utils/sortFunctions';

export const GenderPieChart = () => {

    const users = useContext(DataContext);
    const genderData = getGenderData(users);

    const genderPieData = [
        { name: 'Мужской', value: genderData.male },
        { name: 'Женский', value: genderData.female }
    ];

    const COLORS = ['#FF8042', '#FFBB28'];


    return (
        <div className={styles.genderPieChart}>
            <div className={styles.title}>Пол</div>
            <ResponsiveContainer width="99%" height={180}>
                <PieChart>
                    <Pie
                        data={genderPieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={renderCustomizedLabel}
                        onClick={(e) => e.preventDefault()}
                        style={{ outline: 'none' }}
                    >
                        {
                            genderPieData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div >
    );
};