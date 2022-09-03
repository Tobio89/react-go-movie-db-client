import classNames from "classnames";
import Link from "next/link";
import React from "react";

import styles from "./Button.module.scss";

interface Props {
  className?: string;
  linkTo?: string;
  children: React.ReactNode;
}

function Button({ className, linkTo, children }: Props) {
  if (linkTo) {
    return (
      <Link href={linkTo}>
        <a className={classNames([styles.Button, className])}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={classNames([styles.Button, className])}>
      {children}
    </button>
  );
}

export default Button;
