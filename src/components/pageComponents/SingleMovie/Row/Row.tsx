import React from "react";

import styles from "./Row.module.scss";

interface Props {
  title: string;
  content: string;
}

function Row({ title, content }: Props) {
  return (
    <div className={styles.Row}>
      <div className={styles.Title}>{title}</div>
      <div className={styles.Content}>{content}</div>
    </div>
  );
}

export default Row;
