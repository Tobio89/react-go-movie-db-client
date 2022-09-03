import React from "react";

import styles from "./Tag.module.scss";

interface Props {
  content: string;
}

function Tag({ content }: Props) {
  return <div className={styles.Tag}>{content}</div>;
}

export default Tag;
