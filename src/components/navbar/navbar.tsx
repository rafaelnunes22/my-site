import React, { HTMLAttributes } from "react";
import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLElement>;

function Navbar({ children, ...props }: Props): JSX.Element {
  return (
    <nav className={styles.nav} {...props}>
      {children}
    </nav>
  );
}

export { Navbar };
