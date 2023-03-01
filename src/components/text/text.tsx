import React from "react";

type Props = {
  as: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>;

function Text({ as, children, ...props }: Props) {
  return React.createElement(as, { ...props }, children);
}

export { Text };
