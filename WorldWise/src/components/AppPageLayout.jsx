import MapPage from "../pages/MapPage/MapPage";
import SideBarPage from "../pages/SideBarPage/SideBarPage";
import styles from "./AppPageLayout.module.css";
import User from "./User";
export default function AppPageLayout() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <SideBarPage />
        <div className={styles.right}>
          <MapPage />
          <User />
        </div>
      </main>
    </div>
  );
}
