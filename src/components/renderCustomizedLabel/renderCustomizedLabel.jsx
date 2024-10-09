const RADIAN = Math.PI / 180;
export const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="#111010" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="middle">
            {`${name} ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};