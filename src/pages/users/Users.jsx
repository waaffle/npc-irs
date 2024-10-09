import { DataTable } from "../../components/dataTable/DataTable";
import styles from "./users.module.scss";

export const Users = () => {
  return <div className={styles.users}>
    <div className={styles.title}>Сотрудники</div>
    <DataTable />
  </div>;
};
