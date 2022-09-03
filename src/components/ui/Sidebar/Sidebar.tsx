import React from "react";
import Button from "../Button";

import styles from "./Sidebar.module.scss";

const items = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Movies",
    link: "/movies",
  },
  {
    label: "Genres",
    link: "/genres",
  },
];

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      {items.map((item) => {
        return (
          <Button key={item.label} linkTo={item.link}>
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}

export default Sidebar;
