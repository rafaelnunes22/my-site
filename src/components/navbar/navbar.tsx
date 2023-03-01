import React, { HTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLElement>;

function Navbar({ children, ...props }: Props) {
  return <nav className={styles.nav}>{children}</nav>;
}

export { Navbar };
