import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.page_container}>
      <div className={styles.content_wrap}>
        <Header />
        <main className="pd-3">
          <Outlet />
        </main>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
