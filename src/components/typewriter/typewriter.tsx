import React, { HTMLAttributes, useEffect, useState } from "react";
import cn from "clsx";
import styles from "./styles.module.css";

type Props = {
  text: string;
  highlight?: number[];
  as: keyof JSX.IntrinsicElements;
  onFinish?: () => void;
  blinkAtEnd?: boolean;
} & HTMLAttributes<HTMLDivElement>;

function Typewriter({
  className,
  text,
  highlight,
  as = "h1",
  onFinish,
  blinkAtEnd = false,
  ...props
}: Props): JSX.Element {
  const [typedText, setTypedText] = useState<string>("");
  const [blink, setBlink] = useState<boolean>(true);

  useEffect(() => {
    const typing = () => {
      let str = 0;
      const interval = setInterval(() => {
        str++;

        if (highlight && str === highlight![0]) {
        }
        setTypedText(text.substring(0, str));

        if (str === text.length) {
          clearInterval(interval);
        }
      }, 150);
    };

    typing();
  }, [highlight, setTypedText, text]);

  useEffect(() => {
    if (typedText === text) {
      if (onFinish) {
        onFinish();

        if (!blinkAtEnd) {
          setBlink(false);
        }
      }
    }
  }, [blinkAtEnd, onFinish, text, typedText]);

  return React.createElement(
    as,
    {
      className: cn(className, styles.typewriter, {
        [styles.blink]: blink,
      }),
      ...props,
    },
    typedText
  );
}

export { Typewriter };
