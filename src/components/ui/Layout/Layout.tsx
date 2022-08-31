import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

import styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className={styles.Layout}>
      <div className={styles.Container}>
        <Header />
        <div className={styles.Inner}>
          <Sidebar />
          <div className={styles.App}>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
