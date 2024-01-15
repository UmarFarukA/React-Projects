import styles from "./SideBarPage.module.css";
import Footer from "../Footer/Footer";
import AppPage from "../AppPage/AppPage";

export default function SideBarPage() {
  return (
    <div className={styles.sideBar}>
      <AppPage />

      <Footer />
    </div>
  );
}
