import React, { useContext } from 'react';
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { DataContext } from '../../context/DataContext';
import { countEyeColors } from '../../utils/sortFunctions';
import styles from './EyeColorRadarChart.module.scss';


export const EyeColorRadarChart = () => {
    const users = useContext(DataContext);
    const data = countEyeColors(users);


    return (
        <div>
            <dir className={styles.title}>Цвет глаз</dir>
            <ResponsiveContainer width="99%" height={180}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis className={styles.text}
                        angle={90}
                    />
                    <Radar name="Eye Color Distribution" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};
