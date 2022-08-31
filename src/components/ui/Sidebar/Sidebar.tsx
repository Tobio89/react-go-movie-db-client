import React from "react";

import styles from "./Sidebar.module.scss";

const items = ["Home", "Movies", "Genres", "GraphQL"];

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      {items.map((item) => {
        return (
          <div key={item} className={styles.MenuItem}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
