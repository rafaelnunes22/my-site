import React, { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.css";

type Props = {
  Icon: IconType;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

function NavButton({ Icon, children, ...props }: Props): JSX.Element {
  return (
    <a className={styles["button"]} {...props}>
      <Icon size={32} />
      {children}
    </a>
  );
}

export { NavButton };
