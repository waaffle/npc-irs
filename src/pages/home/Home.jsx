import cn from "classnames";
import { BarChartTasks } from "../../components/barChartTasks/BarChartTasks";
import { ChartBox } from "../../components/chartBox/ChartBox";
import { PieChartBox } from "../../components/pieChartBox/PieChartBox";
import { TopBox } from "../../components/topBox/TopBox";
import { barChartBoxVisit, chartBoxTasks, chartBoxUser } from "../../data";
import styles from "./home.module.scss";
import { SalaryChart } from "../../components/salaryChart/SalaryChart";
import { GenderPieChart } from "../../components/genderPieChart/genderPieChart";
import { EyeColorRadarChart } from "../../components/EyeColorRadarChart/EyeColorRadarChart";
import { BarChartBox } from "../../components/barChartBox/barChartBox";

export const Home = () => {
  return <div className={styles.home}>
    <div className={cn(styles.box, styles.box1)}><TopBox /></div>
    <div className={cn(styles.box, styles.box2)}><ChartBox {...chartBoxUser} /></div>
    <div className={cn(styles.box, styles.box3)}><ChartBox {...chartBoxTasks} /></div>
    <div className={cn(styles.box, styles.box4)}><PieChartBox /></div>
    <div className={cn(styles.box, styles.box5)}><SalaryChart /></div>
    <div className={cn(styles.box, styles.box6)}><EyeColorRadarChart /></div>
    <div className={cn(styles.box, styles.box7)}><BarChartTasks /></div>
    <div className={cn(styles.box, styles.box8)}><GenderPieChart /></div>
    <div className={cn(styles.box, styles.box9)}><BarChartBox {...barChartBoxVisit} /></div>
  </div>;
};
