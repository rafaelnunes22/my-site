import React, { HTMLAttributes } from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.css";

type Props = {
  Icon: IconType;
} & HTMLAttributes<HTMLAnchorElement>;

function NavButton({ Icon, children, ...props }: Props) {
  return (
    <a className={styles["button"]} {...props}>
      <Icon size={32} />
      {children}
    </a>
  );
}

export { NavButton };
